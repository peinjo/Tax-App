// Simplified auth management - enhance this in production
let token: string | null = null;

export function setToken(newToken: string) {
  token = newToken;
  localStorage.setItem('auth_token', newToken);
}

export function getToken(): string | null {
  if (!token) {
    token = localStorage.getItem('auth_token');
  }
  return token;
}

export function clearToken() {
  token = null;
  localStorage.removeItem('auth_token');
}