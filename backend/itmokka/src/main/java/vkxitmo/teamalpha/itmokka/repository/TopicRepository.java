package vkxitmo.teamalpha.itmokka.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkxitmo.teamalpha.itmokka.model.Topic;

import java.util.Optional;

@Repository
public interface TopicRepository extends CrudRepository<Topic, Long> {
    Optional<Topic> findByName(String name);
}
