package com.hackerrank.validator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChallengeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChallengeApplication.class, args);
    }

}


//mvn clean verify sonar:sonar -Dsonar.projectKey=request-validator -Dsonar.projectName='request-validator' -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_e3aafa54b4bc2c29ea776a4401e7e58e36cdda65