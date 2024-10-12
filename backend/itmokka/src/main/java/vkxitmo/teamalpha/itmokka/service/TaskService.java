package vkxitmo.teamalpha.itmokka.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vkxitmo.teamalpha.itmokka.dto.request.TakedTaskRequest;
import vkxitmo.teamalpha.itmokka.dto.response.TaskInfoResponse;
import vkxitmo.teamalpha.itmokka.enumeration.Status;
import vkxitmo.teamalpha.itmokka.mapper.TaskMapper;
import vkxitmo.teamalpha.itmokka.model.TakedTask;
import vkxitmo.teamalpha.itmokka.model.TakedTaskId;
import vkxitmo.teamalpha.itmokka.model.Task;
import vkxitmo.teamalpha.itmokka.model.Topic;
import vkxitmo.teamalpha.itmokka.repository.TakedTaskRepository;
import vkxitmo.teamalpha.itmokka.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    private final TakedTaskRepository takedTaskRepository;

    // TODO: except done tasks and expired
    public List<Task> getTasks(Topic topic) {
        return taskRepository.findAllByTopic(topic);
    }
    public TaskInfoResponse getTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow();
        return taskMapper.taskToTaskInfoResponse(task);
    }
    public void insertTakedTask(TakedTaskRequest takedTaskRequest) {
        TakedTaskId id = taskMapper.userAndTaskIdToTakedTaskId(takedTaskRequest.userId(), takedTaskRequest.taskId());

        TakedTask task = taskMapper.takedTaskRequestToTakedTask(id, takedTaskRequest.status());

        Optional<TakedTask> opt = takedTaskRepository.findById(task.getId());
        TakedTask t = null;
        if(opt.isPresent()) {
            t = opt.get();
            if(t.getStatus().equals(task.getStatus())) {
                throw new RuntimeException(); // TODO: AlreadyExistsException
            }
            t.setStatus(task.getStatus());
        }
        if(task.getStatus().equals(Status.COMPLETED.getLabel())) {
            // TODO: change the points to vk user
        }
        if(t != null) {
            takedTaskRepository.save(t);
        } else {
            takedTaskRepository.save(task);
        }
    }
}
