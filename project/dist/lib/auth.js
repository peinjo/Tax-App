// Simplified auth management - enhance this in production
let token = null;
export function setToken(newToken) {
    token = newToken;
    localStorage.setItem('auth_token', newToken);
}
export function getToken() {
    if (!token) {
        token = localStorage.getItem('auth_token');
    }
    return token;
}
export function clearToken() {
    token = null;
    localStorage.removeItem('auth_token');
}
