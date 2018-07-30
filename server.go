package main

import (
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.ListenAndServe(":8080"+port, nil)
}
