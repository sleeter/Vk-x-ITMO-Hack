package vkxitmo.teamalpha.itmokka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"vkxitmo.teamalpha.itmokka.configuration"})
public class ItmokkaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItmokkaApplication.class, args);
	}

}
