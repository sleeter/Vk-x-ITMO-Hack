package vkxitmo.teamalpha.itmokka.dto.response;

public record TaskResponse(Long id, byte[] picture, String name, Integer points, String category, String status) {
}
