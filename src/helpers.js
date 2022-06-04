export async function backendGet(path) {
  const API_URL = 'http://138.197.159.196:3000';
  return fetch(`${API_URL}/${path}`);
}
export default backendGet;
