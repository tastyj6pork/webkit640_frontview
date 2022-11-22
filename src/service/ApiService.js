import {API_BASE_URL} from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const IS_ADMIN = "IS_ADMIN";
const USER_NAME = "USER_NAME";

export function applyCall(api, method, request) {
    let headers = new Headers({
        "Content-Type":"multipart/form-data; boundary=----WebKitFormBoundarylTMBUUyXqgLqmAdj"
    });

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
        // redirect: 'follow'
    };

    if(request) {
        options.body = request;
    }

    return fetch(options.url, options)
    .then((response) => response.json().then((json) => {
        if(!response.ok) {
            return Promise.reject(json);
        }
        return json;
    })
)
.catch((error) => {
    //console.log(error.status);
    if(error.status === 403) {
        window.location.href = "/login";
    }
    return Promise.reject(error);
    });
}

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    .then((response)=>
        response.json().then((json)=>{
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
    .catch((error)=> {
        //console.log(error.status);
        if(error.status === 403) {
            //window.location.href = "/login";
        }
        return Promise.reject(error);
    });
}

export function login(userDTO) {
    return call("/auth/login", "POST", userDTO)
    .then((response)=>{
        if(response.token !== null) {
            localStorage.setItem(IS_ADMIN, response.data[0]._admin);
            localStorage.setItem(USER_NAME, response.data[0].name);
            localStorage.setItem(ACCESS_TOKEN, response.data[0].token);
            window.location.href="/";
        }
    })
    .catch((error)=>{
        window.location.herf="/login";
        alert("존재하지 않는 아이디거나 비밀번호가 일치하지 않습니다.");
        return Promise.reject(error);
    })
}

export function signup(userDTO){
    return call("/auth/signup", "POST", userDTO)
    .then((response)=> {
        if(response.id){
            window.location.herf="/login";
        }
    })
    .catch((error)=>{
        //console.log(error.state);
        if(error.state === 403) {
            window.location.herf="/auth/signup";
        }
        return Promise.reject(error);
    })
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN,null);
    localStorage.setItem(IS_ADMIN,null);
    localStorage.setItem(USER_NAME,null);
    window.location.href="/";
}