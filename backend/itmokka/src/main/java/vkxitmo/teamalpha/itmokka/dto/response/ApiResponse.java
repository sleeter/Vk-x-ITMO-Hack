package vkxitmo.teamalpha.itmokka.dto.response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ApiResponse<D> {

    private D data;

    private List<ApiError> errors = new ArrayList<>();

    public ApiResponse(D data) {
        this.data = data;
    }

    public static <D> ApiResponse<D> success(D data) {
        return new ApiResponse<>(data);
    }

    public static <D> ApiResponse<D> success() {
        return new ApiResponse<>(null);
    }

    public ApiResponse(D data, ApiError... apiErrors) {
        this(data);
        errors.addAll(Arrays.asList(apiErrors));
    }

    public static ApiResponse<?> error(ApiError... errors) {
        return new ApiResponse<>(null, errors);
    }

    public void addError(ApiError apiError) {
        errors.add(apiError);
    }

}


