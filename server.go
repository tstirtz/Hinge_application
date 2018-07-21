package main

import (
	"net/http"
)

func main() {
	port := "8080"
	http.Handle("/", http.FileServer(http.Dir("./static")))
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		panic(err)
	}
}
