package vkxitmo.teamalpha.itmokka.dto.response;


import java.time.Instant;

public record TaskInfoResponse(Long id, String picture, String name, String description, Integer points, String category, Instant deadline, String explanation) {
}
