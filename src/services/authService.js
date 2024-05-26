export async function register(authDetails) {
    const requestOptions = {
        method: "POST",
        headers :{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetails)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions)

    if(!response.ok) {
        //eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();

    if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data;
}

export async function login(authDetails) {
    const requestOptions = {
        method: "POST",
        headers :{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authDetails)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions)

    if(!response.ok) {
        //eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();

    if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data;
}