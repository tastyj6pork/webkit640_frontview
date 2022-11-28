let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost" || hostname !== "localhost") {
    backendHost = "https://www.webkit640.com/api";
}
export const API_BASE_URL = `${backendHost}`;