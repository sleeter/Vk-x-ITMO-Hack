package vkxitmo.teamalpha.itmokka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import vkxitmo.teamalpha.itmokka.dto.request.TopicOnlyRequest;
import vkxitmo.teamalpha.itmokka.dto.response.ApiResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicInfoResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicOnlyResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicResponse;
import vkxitmo.teamalpha.itmokka.service.TopicService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class TopicController {
    private final TopicService topicService;

    @GetMapping("/topic")
    ApiResponse<List<TopicResponse>> getMainTopics() {
        List<TopicResponse> response = topicService.getMainTopics();
        return ApiResponse.success(response);
    }
    @GetMapping("/topic/info/{id}")
    ApiResponse<TopicInfoResponse> getInfoAboutTopic(@PathVariable Long id) {
        TopicInfoResponse response = topicService.getTopicInfo(id);
        return ApiResponse.success(response);
    }

    @GetMapping("/topic/info")
    ApiResponse<TopicOnlyResponse> getTopicByName(@Param("name") String name, @Param("id") Long id) {
        TopicOnlyResponse response = topicService.getTopic(new TopicOnlyRequest(name, id));
        return ApiResponse.success(response);
    }
}
