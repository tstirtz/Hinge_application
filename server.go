package main

import (
	"net/http"
)

func main() {
	port := "8080"
	http.Handle("/", http.FileServer(http.Dir("./static")))
	http.ListenAndServe(":"+port, nil)
}
