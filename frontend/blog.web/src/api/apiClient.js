export const BASE_URL = "https://mock-services-dev.apps.dev02-emea.hck8s.me/";

export function get(url) {
    return fetchWrapper(url, "GET");
}

async function fetchWrapper(url, method, body) {
    try {
        let response = await fetch(url, {
            method,
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: body && JSON.stringify(body)
        });
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function handleResponse(response) {
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
        const responseToJson = await response.json();

        if (response.ok) {
            return responseToJson;
        } else {
            throw responseToJson;
        }
    }
}

function handleError(error) {
    if (error) {
        console.error(JSON.stringify(error));
    }

    throw error;
}
