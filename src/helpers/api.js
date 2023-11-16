function request(url, method, endpoint) {
    const config = {
        baseUrl: 'test',
        headers: {
            authorization: 'test',
            'Content-Type': 'application/json'
        },
        method: method,
        body: endpoint
    }
    return fetch(`${config.baseUrl}${url}`, config).then(checkResponse)
}

function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

export default function postUserInfo(email, password) {
    return request(`/test`,
        'POST',
        JSON.stringify({
            email,
            password
        }))
}