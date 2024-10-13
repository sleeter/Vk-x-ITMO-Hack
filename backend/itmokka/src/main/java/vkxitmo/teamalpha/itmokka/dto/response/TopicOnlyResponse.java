package vkxitmo.teamalpha.itmokka.dto.response;

import java.util.List;

public record TopicOnlyResponse(String name, List<TaskResponse> taskList) {
}
