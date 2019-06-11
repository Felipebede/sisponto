package bd.flp.sisponto;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SispontoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SispontoApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner() {
        return args -> {
            System.out.println("=======================");
            System.out.println("=======FUNCIONOU=======");
            System.out.println("=======================");
        };
    }

}
