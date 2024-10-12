package vkxitmo.teamalpha.itmokka.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vkxitmo.teamalpha.itmokka.dto.response.TaskResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicInfoResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicResponse;
import vkxitmo.teamalpha.itmokka.enumeration.Topics;
import vkxitmo.teamalpha.itmokka.mapper.TaskMapper;
import vkxitmo.teamalpha.itmokka.mapper.TopicMapper;
import vkxitmo.teamalpha.itmokka.model.Topic;
import vkxitmo.teamalpha.itmokka.repository.TopicRepository;

import java.util.Arrays;
import java.util.List;



@Service
@RequiredArgsConstructor
public class TopicService {
    private final TopicRepository topicRepository;
    private final TopicMapper topicMapper;
    private final TaskService taskService;
    private final TaskMapper taskMapper;
    final Integer MAXSIZEOFTASKS = 4;

    public List<TopicResponse> getMainTopics() {
        return Arrays.stream(Topics.values()).filter(t -> t.getLevel().equals(1)).map(t -> topicMapper.TopicEnumToTopicResponse(t.ordinal(), t)).toList();
    }
    // TODO: maybe need vk user id
    public TopicInfoResponse getTopicInfo(Long id) {
        Topic topic = topicRepository.findById(id).orElseThrow();
        List<TopicResponse> topicResponseList = null;
        List<TaskResponse> taskResponseList = null;
        if(id == Topics.BEITMO.ordinal()) {
            topicResponseList = Arrays.stream(Topics.values()).filter(t -> t.getLevel().equals(2)).map(t -> topicMapper.TopicEnumToTopicResponse(t.ordinal(), t)).toList();
        } else {
            // TODO: for this
            taskResponseList = taskService.getTasks(topic).stream().limit(MAXSIZEOFTASKS).map(taskMapper::taskToTaskResponse).toList();
        }
        return topicMapper.TopicToTopicInfoResponse(topic, topicResponseList, taskResponseList);
    }
}
