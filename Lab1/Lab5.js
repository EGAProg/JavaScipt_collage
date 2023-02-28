"use strict";
////////////////////////////////
function filter(mails, blackMails) {
    let whiteList = [];
    for (let i = 0; i < mails.length; i++) {
        if (!(blackMails.indexOf(mails[i]) != -1)) {
            whiteList.push(mails[i]);
        }
    }
    return whiteList;
}

let mailList = ["gameswithiy@gmail.com", "max.utkin91@mail.ru", "da_du_91@mail.ru", "e-gysev@mail.ru"];
let blackList = ["da_du_91@mail.ru", "e-gysev@mail.ru"];

console.log(`Mails white list: ${filter(mailList, blackList)}`);
////////////////////////////////

function calculate(sum, stuffCount, promo = null) {
    let persent;
    let meh;
    if (promo === "ДАРИМ300") {
        if(sum <= 300) sum = 0;
        else sum -= 300;
    }
    if (stuffCount >= 10) {
        // 5% OFF
        persent = (sum * 5) / 100;
        sum -= persent;
    }
    if (sum > 50000) {
        meh = sum - 50000;
        // 20% OFF
        persent = (meh * 20) / 100;
        sum -= persent;
    }
    if (sum >= 20000 && promo === "СКИДКА15") {
        // 15% OFF
        persent = (sum * 15) / 100;
        sum -= persent;
    }

    return sum;
}
console.log(`${calculate(40000, 12, "СКИДКА15")}`);

