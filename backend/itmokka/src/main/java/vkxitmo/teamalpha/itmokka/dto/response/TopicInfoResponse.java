package vkxitmo.teamalpha.itmokka.dto.response;

import java.util.List;

public record TopicInfoResponse(String name, String description, List<TopicResponse> subtopics, List<TaskResponse> tasks) {
}
