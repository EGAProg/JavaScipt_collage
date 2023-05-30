export async function fetchGet(obj = {}) {
    const response = await fetch("http://localhost:3000/api/todos");
    return await response.json();
}