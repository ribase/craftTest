# Serveur apache
FROM debian:jessie

MAINTAINER Sebastian Thadewald <bt@cabag.ch>

RUN echo 'deb http://ftp.fr.debian.org/debian/ jessie non-free' >> /etc/apt/sources.list
RUN echo 'deb-src http://ftp.fr.debian.org/debian/ jessie non-free' >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install apache2 libapache2-mod-fastcgi

RUN apt-get -y install curl
RUN echo 'deb http://packages.dotdeb.org jessie all' > /etc/apt/sources.list.d/dotdeb.list
RUN curl http://www.dotdeb.org/dotdeb.gpg | apt-key add -


RUN apt-get update -y
RUN apt-get install -y php7.0 libapache2-mod-php7.0 php7.0-apcu php7.0-curl php7.0-xml php7.0-zip php7.0-mbstring php7.0-gd php7.0-mysql php7.0-soap libpcre3 libpcre3-dev
RUN apt-get install -y mcrypt php7.0-mcrypt
RUN rm /etc/apache2/sites-enabled/*

ENV VIRTUALHOST www.craft.local

ADD conf-available /etc/apache2/conf-available
ADD sites-available /etc/apache2/sites-available

ADD utils/php.ini /etc/php/7.0/apache2/php.ini
ADD utils/cli-php.ini /etc/php/7.0/cli/php.ini

EXPOSE 80

ADD apache.sh /usr/bin/apache.sh
RUN chmod +x /usr/bin/apache.sh
ENTRYPOINT apache.sh

WORKDIR /var/www/web
