SHELL := /bin/bash

.PHONY: help
help:
	@echo "Main:"
	@echo "  make help             — Display this help"
	@echo "Local:"
	@echo "  make build            — Build web2018"
	@echo "  make build-force      — Force build web2018"
	@echo "  make up               — Brings up web2018"
	@echo "  make exec             — Enter the container"

.PHONY: build
build:
	@docker compose build

.PHONY: build-force
build-force:
	@docker compose build --force-rm --no-cache --pull

.PHONY: up
up:
	@docker compose up

.PHONY: exec
exec:
	@docker exec -it --user nginx web2018 sh
