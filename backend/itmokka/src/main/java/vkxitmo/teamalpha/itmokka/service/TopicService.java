package vkxitmo.teamalpha.itmokka.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vkxitmo.teamalpha.itmokka.dto.request.TopicOnlyRequest;
import vkxitmo.teamalpha.itmokka.dto.response.*;
import vkxitmo.teamalpha.itmokka.enumeration.Status;
import vkxitmo.teamalpha.itmokka.enumeration.Topics;
import vkxitmo.teamalpha.itmokka.mapper.TaskMapper;
import vkxitmo.teamalpha.itmokka.mapper.TopicMapper;
import vkxitmo.teamalpha.itmokka.model.TakedTask;
import vkxitmo.teamalpha.itmokka.model.Task;
import vkxitmo.teamalpha.itmokka.model.Topic;
import vkxitmo.teamalpha.itmokka.repository.TakedTaskRepository;
import vkxitmo.teamalpha.itmokka.repository.TaskRepository;
import vkxitmo.teamalpha.itmokka.repository.TopicRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class TopicService {
    private final TopicRepository topicRepository;
    private final TopicMapper topicMapper;
    private final TaskService taskService;
    private final TaskMapper taskMapper;
    final Integer MAXSIZEOFTASKS = 4;
    private final TaskRepository taskRepository;
    private final TakedTaskRepository takedTaskRepository;

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
            taskResponseList = taskService.getTasks(topic).stream().limit(MAXSIZEOFTASKS).map(t -> taskMapper.taskToTaskResponse(t, null)).toList();
        }
        return topicMapper.TopicToTopicInfoResponse(topic, topicResponseList, taskResponseList);
    }

    public TopicOnlyResponse getTopic(TopicOnlyRequest req) {
//        List<Topics> l = Arrays.stream(Topics.values()).filter(t -> t.getLabel().equals(req.name())).toList();
//        Topic t = topicRepository.findByName(l.get(0).name()).orElseThrow();
        Optional<Topic> opT = topicRepository.findByName(req.name());
        Topic t = opT.orElseThrow();
        List<Task> taskList = taskRepository.findAllByTopic(t);
        List<TakedTask> takedTasks = takedTaskRepository.findAll().stream().filter(ts -> ts.getId().getUserId().equals(req.id())).toList();
//        taskList.removeIf(task -> takedTasks.stream().anyMatch(takedTask -> takedTask.getStatus().equals(Status.COMPLETED.getLabel()) && takedTask.getId().getTaskId().equals(task.getId())));
        List<TmpTaskResponse> list = new ArrayList<>();
        for(var task : taskList) {
            for(var takedTask : takedTasks) {
                if(task.getId().equals(takedTask.getId().getTaskId())) {
                    list.add(new TmpTaskResponse(task, takedTask.getStatus()));
                    break;
                }
            }
            list.add(new TmpTaskResponse(task, null));
        }
//        return topicMapper.TopicToTopicOnlyResponse(t, taskList.stream().map(taskMapper::taskToTaskResponse).toList());
        return topicMapper.TopicToTopicOnlyResponse(t, list.stream().map(ts -> {
            return taskMapper.taskToTaskResponse(ts.task(), ts.status());
        }).toList());
    }
}
