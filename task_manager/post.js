export async function fetchPost(obj = {}) {
    const response = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(obj),
    });
    return await response.json();
}

