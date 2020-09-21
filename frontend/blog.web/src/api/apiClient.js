export function get(url) {
    return fetchWrapper(url, "GET");
}

async function fetchWrapper(url, method, body) {
    try {
        let response = await fetch(url, {
            method,
            headers: {
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
    const responseToJson = await response.json();
    return responseToJson;
}

function handleError(error) {
    if (error) {
        console.error(JSON.stringify(error));
    }

    throw error;
}
