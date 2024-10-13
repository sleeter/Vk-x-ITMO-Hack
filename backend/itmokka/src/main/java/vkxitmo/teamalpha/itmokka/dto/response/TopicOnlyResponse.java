package vkxitmo.teamalpha.itmokka.dto.response;

import java.util.List;

public record TopicOnlyResponse(String name, String description, List<TaskResponse> taskList) {
}
