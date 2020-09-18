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
        console.log(response);
        return await handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function handleResponse(response) {
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.indexOf("application/json") !== -1) {
        const responseToJson = await response.json();
        console.log(response);

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
