package vkxitmo.teamalpha.itmokka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vkxitmo.teamalpha.itmokka.dto.response.ApiResponse;
import vkxitmo.teamalpha.itmokka.dto.response.VkUserResponse;
import vkxitmo.teamalpha.itmokka.service.VkUserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class VkUserController {
    private final VkUserService vkUserService;

    @GetMapping("/vkuser/{id}")
    ApiResponse<VkUserResponse> getUser(@PathVariable Long id) {
        VkUserResponse response = vkUserService.getVkUser(id);
        return ApiResponse.success(response);
    }
}
