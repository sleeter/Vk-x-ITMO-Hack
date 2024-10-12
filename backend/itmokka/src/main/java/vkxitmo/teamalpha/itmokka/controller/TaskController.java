package vkxitmo.teamalpha.itmokka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vkxitmo.teamalpha.itmokka.dto.request.TakedTaskRequest;
import vkxitmo.teamalpha.itmokka.dto.response.ApiResponse;
import vkxitmo.teamalpha.itmokka.dto.response.TaskInfoResponse;
import vkxitmo.teamalpha.itmokka.service.TaskService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class TaskController {
    private final TaskService taskService;
    @GetMapping("/task/{id}")
    ApiResponse<TaskInfoResponse> getInfoAboutTask(@PathVariable Long id) {
        TaskInfoResponse response = taskService.getTask(id);
        return ApiResponse.success(response);
    }
    @PostMapping("/task")
    ApiResponse<Void> insertTakedTask(@RequestBody TakedTaskRequest takedTaskRequest) {
        taskService.insertTakedTask(takedTaskRequest);
        return ApiResponse.success();
    }
}
