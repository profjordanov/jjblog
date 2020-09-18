import * as apiClient from "./apiClient";

export function getAll() {
    const url = "https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8";
    return apiClient.get(url);
}
