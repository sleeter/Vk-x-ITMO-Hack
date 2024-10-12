package vkxitmo.teamalpha.itmokka.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "taked_task")
public class TakedTask {
    @SequenceGenerator(name = "taked_task_id_gen", sequenceName = "task_id_seq", allocationSize = 1)
    @EmbeddedId
    private TakedTaskId id;

    @Column(name = "status", nullable = false, length = 30)
    private String status;

}