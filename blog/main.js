
let body = document.querySelectorAll(".Wrapper");
let date = [{}];
function GET() {
    let response = fetch("https://gorest.co.in/public-api/posts?page=1", 
    {
        method: "GET",
        headers: {"Content-type": "application/json; charset=UTF-8",}, 
        body: JSON.stringify(),
    })
    let ass = response.json();
    // Получаем object, у которого есть, id, title, body
    return response;
}

function main () {
    let date = GET();
    for (let i = 0; i < date.length; i++) {
        console.log("GNIDA")
    }
}
main();