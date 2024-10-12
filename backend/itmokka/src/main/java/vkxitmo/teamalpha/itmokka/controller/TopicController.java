package vkxitmo.teamalpha.itmokka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vkxitmo.teamalpha.itmokka.dto.response.ApiResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicInfoResponse;
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
}
