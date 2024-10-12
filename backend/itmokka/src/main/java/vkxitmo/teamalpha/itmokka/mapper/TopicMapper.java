package vkxitmo.teamalpha.itmokka.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;
import vkxitmo.teamalpha.itmokka.configuration.mapper.MapstructConfig;
import vkxitmo.teamalpha.itmokka.dto.response.TaskResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicInfoResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TopicResponse;
import vkxitmo.teamalpha.itmokka.enumeration.Topics;
import vkxitmo.teamalpha.itmokka.model.Topic;

import java.util.List;

@Mapper(config = MapstructConfig.class)
@Component
public interface TopicMapper {
    TopicResponse TopicEnumToTopicResponse(Integer id, Topics topics);

    TopicInfoResponse TopicToTopicInfoResponse(Topic topic, List<TopicResponse> subtopics, List<TaskResponse> tasks);
}
