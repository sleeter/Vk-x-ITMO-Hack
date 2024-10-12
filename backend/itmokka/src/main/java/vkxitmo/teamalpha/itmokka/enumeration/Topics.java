package vkxitmo.teamalpha.itmokka.enumeration;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Topics {
    BEITMO("be ITMO", 1),
    WELLBEINGCHALLANGE("Well-being challenge", 1),
    WORKLIFEBALANCE("Work-life balance", 1),
    BEFRIENDLY("be friendly", 2),
    BEHEALTY("be healthy", 2),
    BEFIT("be fit", 2),
    BEECO("be eco", 2),
    BEOPEN("be open", 2),
    BEPRO("be pro", 2);
    private final String label;
    private final Integer level;
}
