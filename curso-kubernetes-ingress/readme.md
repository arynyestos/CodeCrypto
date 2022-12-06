kubectl create deploy home --image gcr.io/google-samples/hello-app:1.0 --port 8080

kubectl expose deploy home --port 8080