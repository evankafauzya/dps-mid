FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY 5sproject.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
COPY files/ /usr/share/nginx/html/files/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 81
