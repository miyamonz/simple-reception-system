
.PHONY: push-test
push-test: build-test
	git push hama-test master
	git ftp push -s test

.PHONY: push-prod
push-prod: build-prod
	git push hama-prod master
	git ftp push -s prod


build-test:
	npm run build:test
	cp docker/html/*.* dist/test

build-prod:
	npm run build:prod
	cp docker/html/*.* dist/prod
