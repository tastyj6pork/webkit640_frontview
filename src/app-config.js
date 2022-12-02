let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost" || hostname !== "localhost") {
    //backendHost = "https://www.webkit640.com/api";
    backendHost = "http://192.168.227.163:8080/";
}
export const API_BASE_URL = `${backendHost}`;