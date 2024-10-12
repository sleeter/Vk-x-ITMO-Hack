package vkxitmo.teamalpha.itmokka.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkxitmo.teamalpha.itmokka.model.VkUser;

@Repository
public interface VkUserRepository extends CrudRepository<VkUser, Long> {
}
