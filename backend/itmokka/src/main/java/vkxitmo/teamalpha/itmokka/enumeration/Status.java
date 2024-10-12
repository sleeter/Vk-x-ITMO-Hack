package vkxitmo.teamalpha.itmokka.enumeration;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Status {
    INPROCCES("in procces"),
    COMPLETED("completed");
    private final String label;
}
