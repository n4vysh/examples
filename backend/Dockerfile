ARG GO_VERSION

FROM golang:${GO_VERSION}-alpine3.19 as base

FROM n4vysh/examples:spec-0.1.0 as spec

FROM cosmtrek/air:v1.49.0 as air

FROM base as dev

COPY --from=air /go/bin/air /go/bin/air

ARG JUST_UNSTABLE
ENV JUST_UNSTABLE $JUST_UNSTABLE

RUN apk --no-cache add just=~1.23.0 \
  --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community

# TODO: remove
WORKDIR /go/src/github.com/n4vysh/examples/backend

COPY go.mod go.sum justfile *.just ./

RUN just mod

COPY . .
COPY --from=spec . ../spec

ENTRYPOINT ["/go/bin/air"]

FROM dev as build

RUN just gen && GOOS=linux GOARCH=amd64 just build '-ldflags="-w -s"'

RUN wget -t 5 -O /usr/local/share/ca-certificates/global-bundle.pem \
  https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem

FROM scratch
COPY --from=build /go/src/github.com/n4vysh/examples/backend/tmp/main /bin/
COPY --from=build /usr/local/share/ca-certificates/global-bundle.pem /usr/local/share/ca-certificates/
EXPOSE 8080
ENTRYPOINT ["/bin/main"]
