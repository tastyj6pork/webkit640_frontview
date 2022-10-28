let backendHost;

const hostname = window && window.location && window.location.hostname;

console.log("hostname ", hostname);
if(hostname === "localhost") {
    backendHost = "http://192.168.218.228:8080";
}
export const API_BASE_URL = `${backendHost}`;