FROM openjdk:21-jdk
EXPOSE 80
ARG JAR_FILE=target/*SNAPSHOT.jar
WORKDIR /opt/backend
COPY ${JAR_FILE} backend.jar
ENTRYPOINT ["java", "-jar", "backend.jar"]