# TODO: replace to docker compose
build:
    docker build \
        --build-arg JUST_UNSTABLE=${JUST_UNSTABLE} \
        --build-arg GO_VERSION=${GO_VERSION} \
        -t n4vysh/examples:backend \
        .
