FROM alpine:3.6

# Setup apache and php
RUN apk --no-cache add \
        apache2 \
        php5-apache2 \
        && mkdir /run/apache2

WORKDIR /app/

VOLUME /app/data

COPY httpd.conf /app/httpd.conf
COPY data/ /app/data/
EXPOSE 8080
    
CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND", "-f", "/app/httpd.conf" ]
