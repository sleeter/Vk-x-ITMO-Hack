package vkxitmo.teamalpha.itmokka.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import vkxitmo.teamalpha.itmokka.configuration.mapper.MapstructConfig;
import vkxitmo.teamalpha.itmokka.dto.response.VkUserResponse;
import vkxitmo.teamalpha.itmokka.model.VkUser;

@Mapper(config = MapstructConfig.class)
@Component
public interface VkUserMapper {
    VkUserResponse vkUserToVkUserResponse(VkUser vkUser);
}
