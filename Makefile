SHELL := /bin/bash

mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
mkfile_dir := $(dir $(mkfile_path))

HADOLINT_IMAGE = hadolint/hadolint
HADOLINT_VERSION = 2.12.0-alpine
HADOLINT_VLOCAL = -v ${mkfile_dir}:/host:ro
HADOLINT = @docker run --rm ${HADOLINT_VLOCAL} ${HADOLINT_IMAGE}:${HADOLINT_VERSION}

.PHONY: help
help:
	@echo "Main:"
	@echo "  make help             — Display this help"
	@echo "Utilities:"
	@echo "  make lint             — Lint with hadolint"
	@echo "Local:"
	@echo "  make build            — Build web2018"
	@echo "  make build-force      — Force build web2018"
	@echo "  make up               — Brings up web2018"
	@echo "  make exec             — Enter the container"

.PHONY: lint
lint:
	@${HADOLINT} sh -c "hadolint /host/docker/Dockerfile"

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
