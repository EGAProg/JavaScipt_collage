function AfterMax(){
    let str = String("У лукоморья дуб зеленый, золотая цепь на дубе том. И днем и ночью кот ученый все ходит по цепи кругом");
    const maxLength = 25;

    if (str.length > maxLength) {
        string = str.slice(0, maxLength);
        output = string + "...";
    }
    console.log(output);
}

function UpFirst(){
    let string = "hello world";
    string = String(string[0].toUpperCase()) + String(string.slice(1));
    console.log(string)
}
AfterMax();
UpFirst();