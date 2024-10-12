package vkxitmo.teamalpha.itmokka.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkxitmo.teamalpha.itmokka.model.Task;
import vkxitmo.teamalpha.itmokka.model.Topic;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
    List<Task> findAllByTopic(Topic topic);
}
