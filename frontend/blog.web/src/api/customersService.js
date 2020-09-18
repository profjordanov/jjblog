import * as apiClient from "./apiClient";

export function getAll() {
    const url = "https://mock-services-dev.apps.dev02-emea.hck8s.me/api/customers";
    return apiClient.get(url);
}
