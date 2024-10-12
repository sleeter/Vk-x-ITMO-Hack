package vkxitmo.teamalpha.itmokka.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkxitmo.teamalpha.itmokka.model.TakedTask;
import vkxitmo.teamalpha.itmokka.model.TakedTaskId;

@Repository
public interface TakedTaskRepository extends CrudRepository<TakedTask, TakedTaskId> {
}
