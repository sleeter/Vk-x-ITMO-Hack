package vkxitmo.teamalpha.itmokka.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vkxitmo.teamalpha.itmokka.dto.response.VkUserResponse;
import vkxitmo.teamalpha.itmokka.mapper.VkUserMapper;
import vkxitmo.teamalpha.itmokka.model.VkUser;
import vkxitmo.teamalpha.itmokka.repository.VkUserRepository;

@Service
@RequiredArgsConstructor
public class VkUserService {
    private final VkUserRepository vkUserRepository;
    private final VkUserMapper vkUserMapper;

    public VkUserResponse getVkUser(Long id) {
        VkUser vkUser = vkUserRepository.findById(id).orElseThrow();
        return vkUserMapper.vkUserToVkUserResponse(vkUser);
    }
}
