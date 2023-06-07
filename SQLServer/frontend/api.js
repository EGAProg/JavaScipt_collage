const API_HOST = "http://localhost:3306";

export async function getItems() {
    const resp = await fetch(API_HOST);
    return await resp.json();
}

export async function createItem(text) {
    const resp = await fetch(API_HOST, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });

    return await resp.json();
}

export async function deleteItem(id) {
    const resp = await fetch(`${API_HOST}/?id=${id}`, 
        { 
            method: "DELETE" 
        }
    );
    return await resp.json();
}
