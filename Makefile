.PHONY: push-test
push-test: build-test
	git push hama-test master
	git ftp push -s test

.PHONY: push-prod
push-prod: build-prod
	git push hama-prod master
	git ftp push -s prod

copy-ht:
	export $$(cat template/.env | grep -v "^#" | xargs ); cat template/.htaccess | mo > "dist/${SCOPE}/admin/.htaccess"
	cp template/.htpasswd "dist/${SCOPE}/admin/"
	chmod 604 "dist/${SCOPE}/admin/.htaccess"
	chmod 604 "dist/${SCOPE}/admin/.htpasswd"
	cp template/path.php "dist/${SCOPE}/"
copy-ht-test:
	SCOPE=test make copy-ht
copy-ht-prod:
	SCOPE=prod make copy-ht


build:
	rm -r dist
	npm run build:${SCOPE}
	cp docker/html/*.* dist/${SCOPE}
	make copy-ht

build-test:
	SCOPE=test make build

build-prod:
	SCOPE=prod make build
