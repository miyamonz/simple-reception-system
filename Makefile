push: build
	git ftp push
build:
	npm run build
	cp -r docker/data/htdocs/* dist
