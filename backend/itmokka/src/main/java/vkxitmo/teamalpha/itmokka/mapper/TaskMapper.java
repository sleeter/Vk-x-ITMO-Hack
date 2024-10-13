package vkxitmo.teamalpha.itmokka.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import vkxitmo.teamalpha.itmokka.configuration.mapper.MapstructConfig;
import vkxitmo.teamalpha.itmokka.dto.response.TaskInfoResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TaskResponse;
import vkxitmo.teamalpha.itmokka.model.TakedTask;
import vkxitmo.teamalpha.itmokka.model.TakedTaskId;
import vkxitmo.teamalpha.itmokka.model.Task;

@Mapper(config = MapstructConfig.class)
@Component
public interface TaskMapper {

    TaskResponse taskToTaskResponse(Task task);

    TaskInfoResponse taskToTaskInfoResponse(Task task);

    TakedTaskId userAndTaskIdToTakedTaskId(Long userId, Long taskId);

    TakedTask takedTaskRequestToTakedTask(TakedTaskId id, String status);
}
