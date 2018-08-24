FROM node:8.11.4-jessie


RUN npm install


CMD java -jar /app/doom-client.jar
