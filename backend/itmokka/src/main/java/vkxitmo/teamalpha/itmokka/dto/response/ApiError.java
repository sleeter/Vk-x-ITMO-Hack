package vkxitmo.teamalpha.itmokka.dto.response;

public record ApiError(
        String message,
        Integer code
) {
    public ApiError(ApiException exception) {
        this(exception.getMessage(), exception.getErrorCode());
    }
}
