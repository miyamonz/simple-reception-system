
.PHONY: push-test
push-test: build-test
	git ftp push -s test
	git push hama-test master

.PHONY: push-prod
push-prod: build-prod
	git ftp push -s prod
	git push hama-prod master


build-test:
	npm run build:test
	cp docker/html/*.* dist

build-prod:
	npm run build:prod
	cp docker/html/*.* dist
