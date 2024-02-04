package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"

	"github.com/n4vysh/examples/backend/api"
	middleware "github.com/oapi-codegen/gin-middleware"
)

var rootCmd = &cobra.Command{
	Use:   "simple-todo-api",
	Short: "Simple Todo API server",
	Long:  "Simple Todo API server command line utilities",
	Run: func(cmd *cobra.Command, args []string) {
		port := flag.String("port", "8080", "Port for test HTTP server")
		flag.Parse()
		petStore := api.NewPetStore()
		s := NewGinPetServer(petStore, *port)
		log.Fatal(s.ListenAndServe())
	},
}

func init() {
	cobra.OnInitialize(initConfig)

	rootCmd.PersistentFlags().StringP("port", "p", "8080", "Port for HTTP server")

	viper.BindPFlag("port", rootCmd.PersistentFlags().Lookup("port"))
	viper.SetDefault("port", "8080")
}

func initConfig() {
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", viper.ConfigFileUsed())
	}
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func NewGinPetServer(petStore *api.PetStore, port string) *http.Server {
	swagger, err := api.GetSwagger()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error loading swagger spec\n: %s", err)
		os.Exit(1)
	}

	swagger.Servers = nil

	r := gin.Default()

	r.Use(middleware.OapiRequestValidator(swagger))

	api.RegisterHandlers(r, petStore)

	s := &http.Server{
		Handler: r,
		Addr:    net.JoinHostPort("0.0.0.0", port),
	}
	return s
}
