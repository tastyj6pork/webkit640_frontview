let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
    backendHost = "http://118.67.134.114:8080";
}
export const API_BASE_URL = `${backendHost}`;