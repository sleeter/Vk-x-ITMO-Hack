package vkxitmo.teamalpha.itmokka.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TakedTaskRequest(
        @JsonProperty("user_id") Long userId,
        @JsonProperty("task_id") Long taskId, String status) {
}
