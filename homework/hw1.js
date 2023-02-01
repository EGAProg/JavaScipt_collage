"Use strict";
function FirstWork() {
    console.log("...Первое задание...")
    const fString = "robin_singh@example.com";
    let sString = fString.search("@");
    let tString = fString.slice(0, sString);
    let finString = tString.slice(sString, 0) + fString.slice(sString);
    let test = fString.search("_");
    let secondTest = fString.slice(0, test);
    console.log(secondTest, "...", finString,"\n");
}
function SecondWork() {
    console.log("...Второе задание...")
    const str = "JavaScript Exercises"; // Смотрел ТЗ
    let std = str.replace(" ", "");
    let string = std.replace("Java", "java");
    console.log(string,"\n");
}

function ThirdWork() {
    console.log("...Третье задание...")
    let str = "У лукоморья дуб зеленый, золотая цепь на дубе том. И днем и ночью кот ученый все ходит по цепи кругом";
    const maxLength = 25;

    if (str.length > maxLength) {
        string = str.slice(0, maxLength);
        output = string + "...";
    }
    else {
        output = string;
    }
    console.log(output);
}

FirstWork();
SecondWork();
ThirdWork();