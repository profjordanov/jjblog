import * as apiClient from "./apiClient";

export function get() {
    return apiClient.get("https://localhost:9001/api/articles");
}
