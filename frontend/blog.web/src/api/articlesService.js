import * as apiClient from "./apiClient";

const url = "https://localhost:9001/api/articles";
export function get() {
    return apiClient.get(url);
}

export function save(article) {
    return apiClient.post(url, article);
}
