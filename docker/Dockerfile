FROM alpine:3.6

# Setup apache and php
RUN apk --no-cache add \
        apache2 \
        php5-apache2 \
        php5-json \
        && mkdir /run/apache2

WORKDIR /app/

COPY httpd.conf /app/httpd.conf
COPY html/ /app/html/
    
CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND", "-f", "/app/httpd.conf" ]
