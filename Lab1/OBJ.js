obj1 = [
    {
        surname: "Gvozdev",
        name: "Oleg",
        age: 17
    },
    {
        surname: "Gysev",
        name: "Egor",
        age: 18
    },
    {
        surname: "Gysev",
        name: "Nikita",
        age: 19
    }
];

function retObj(object, _key) {
    for (let i = 0; i < object.length; i++) {
        console.log(object[i][_key]);
    }
}
retObj(obj1, "name");