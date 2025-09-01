package com.coaching.dto.request;

public record CustomerRequest(
        int height,
        int weight,
        Long coach_id
) {
}
