//package vkxitmo.teamalpha.itmokka.configuration.security;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@RequiredArgsConstructor
////@EnableConfigurationProperties(CustomSecurityProperties.class)
//public class SecurityConfig {
//
////    private final CustomSecurityProperties customSecurityProperties;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                        .requestMatchers("/api/v1/topic").permitAll()
//                        .anyRequest().authenticated()
//                )
//                .formLogin(AbstractHttpConfigurer::disable)
//                .httpBasic(AbstractHttpConfigurer::disable)
//                .csrf(AbstractHttpConfigurer::disable)
//                .sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .build();
//    }
//
////    @Bean
////    public WebMvcConfigurer corsConfigurer() {
////        return new WebMvcConfigurer() {
////
////            @Override
////            public void addCorsMappings(CorsRegistry registry) {
////                registry
////                        .addMapping("/**")
////                        .allowedOrigins(customSecurityProperties.allowedCorsOrigins())
////                        .allowCredentials(true)
////                        .allowedHeaders("*")
////                        .allowedMethods("*");
////            }
////        };
////
////    }
//}
//
