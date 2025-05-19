SHELL := /bin/bash

mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
mkfile_dir := $(dir $(mkfile_path))

HADOLINT_IMAGE = hadolint/hadolint
HADOLINT_VERSION = 2.12.0-alpine
HADOLINT_VLOCAL = -v ${mkfile_dir}:/host:ro
HADOLINT = @docker run --rm ${HADOLINT_VLOCAL} ${HADOLINT_IMAGE}:${HADOLINT_VERSION}

TRIVY_IMAGE = aquasec/trivy
TRIVY_VERSION = 0.62.0
TRIVY_VCACHE = -v /tmp/trivy/:/root/.cache/
TRIVY_VLOCAL = -v /var/run/docker.sock:/var/run/docker.sock
TRIVY = @docker run --rm ${TRIVY_VCACHE} ${TRIVY_VLOCAL} ${TRIVY_IMAGE}:${TRIVY_VERSION}

.PHONY: help
help:
	@echo "Main:"
	@echo "  make help             — Display this help"
	@echo "Utilities:"
	@echo "  make hadolint         — Lint with hadolint"
	@echo "  make scan             — Scan latest image"
	@echo "Local:"
	@echo "  make build            — Build web2018"
	@echo "  make build-force      — Force build web2018"
	@echo "  make up               — Brings up web2018"
	@echo "  make exec             — Enter the container"

.PHONY: hadolint
hadolint:
	@${HADOLINT} sh -c "hadolint /host/docker/Dockerfile"

.PHONY: scan
scan:
	@${TRIVY} clean --scan-cache
	@${TRIVY} image --severity HIGH,CRITICAL epfl-theme-elements-web:latest

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
