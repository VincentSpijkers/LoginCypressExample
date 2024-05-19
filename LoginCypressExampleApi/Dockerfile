FROM maven:3.8.5-openjdk-17 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /home/app/target/LoginCypressExampleApi-0.0.1-SNAPSHOT.jar /usr/local/lib/LoginCypressExampleApi.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/LoginCypressExampleApi.jar"]