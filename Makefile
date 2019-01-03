.PHONY: push
push: build
	git ftp push
	git push hama master

build:
	npm run build
	cp docker/data/htdocs/* dist
