import cookie from 'js-cookie';

export const setCookie = (key, value) => {
    if(window !== "undefined") {
        cookie.set(key, value, {
            expires: 7
        })
    }
}

export const setLocalStorage = (key, value) => {
    if(window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const authenticate = (response, next) => {
    console.log("tokenData", response.data.jwtToken)
    setCookie('jwtToken', response.data.jwtToken)
    setLocalStorage('userInfo', response.data)
    next();
};
