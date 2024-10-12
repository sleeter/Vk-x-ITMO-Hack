package vkxitmo.teamalpha.itmokka.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "vk_user")
public class VkUser {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "points")
    private Integer points;

}