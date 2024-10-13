package vkxitmo.teamalpha.itmokka.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkxitmo.teamalpha.itmokka.model.TakedTask;
import vkxitmo.teamalpha.itmokka.model.TakedTaskId;

import java.util.List;
import java.util.Optional;

@Repository
public interface TakedTaskRepository extends CrudRepository<TakedTask, TakedTaskId> {
    @Override
    List<TakedTask> findAll();
}
