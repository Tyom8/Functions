x();
y();
z();
c();
fn();
fibonachi();
fibonachiX2();
fibonachiLog();
zuygNum();



//  Armen is 20 years old,Anna is 14 years old,their father age is theirs combined and + 6 year.How old is their father?
function x(armen = 20, anna = 14, c = 6) {
    return alert(`Task 1 - Father is ${armen + anna + c} years old.`);
};

//John has 5 apples,Adam has five times more apples than John,how many apples do they have together?
function y (johnApples = 5, adamsApple = johnApples * 5, allApples = johnApples + adamsApple) {
    return alert(`Task 2 - All Apples are ${allApples} piece.`);
};

//You have 1000$.The restaurant cost two times little than your all money.The hotel cost 100$ little than restaurant.Hotel breakfast cost 10 times little than hotel.
//How much is restaurant,hotel and breakfast?
function z (allmoney = 1000,restaurant = allmoney / 2,hotel = restaurant - 100,hotelBreakfast = hotel / 10) {
    return alert(`Task 3 - The restaurant cost ${restaurant}$.The hotel cost ${hotel}$.Hotel Breakfast cost ${hotelBreakfast}$.`);
};

// Avtomeqenan arajin orn ancav 240km,vory 3 angam aveli er erkrord orva ancacic:Vorqan e arajin ev erkrord orva ancac chanaparhneri tarberutyuny?
function c(a = 240,b = a / 3,c = a - b,) {
    return alert(`Task 4 - Chanaparhneri tarberutyuny ${c}km e:`)
};

// Js-i mijocov vorosheq ays havasarumneric voronq en chisht:8*5+25/5 < 6*5+35/5 ; 5 * 3 + 14 > 2 * 3 + 14 ; 28/4-30/5 < 28/2-15/5;
function fn(boleanone = 8 * 5 + 25 / 5 < 6 * 5 + 35 / 5,boleantwo = 5 * 3 + 14 > 2 * 3 + 14,boleanthree =  28 / 4 - 30 / 5 < 28 / 2 - 15 / 5) {
    return alert(`Task 5 - 8 * 5 + 25 / 5 < 6 * 5 + 35 / 5 = ${boleanone}, 5 * 3 + 14 > 2 * 3 + 14 = ${boleantwo}, 28 / 4 - 30 / 5 < 28 / 2 - 15 / 5 = ${boleanthree}.`);
};

//Fibonachi
function fibonachi(num) {
    num = +prompt("Greq vor errord tivn eq uzum tesnel Fibonachii axusyakic: ");
while (!num && num!=0) {
    num = +prompt("Greq anpayman tiv: ");
}
    if(num<2) return alert(num);
    else {
    let firstnum = 0,
        secondnum = 1;
    for (let i = 2; i <= num; i++) {
        let threetnum = secondnum + firstnum;
        firstnum = secondnum;
        secondnum = threetnum;
    }
    return alert(secondnum);}
};

// Amen 3 tiv havasar e naxord 2 tveri gumary bacmapatkac 2 ov:
function fibonachiX2(numX) {
    numX = +prompt ("Greq vor errord tivn eq uzum tesnel");
    while (!numX && numX!=0) {
        numX = +prompt ("Greq miayn tiv:")
    }
    if (numX < 2) {
    return   alert(numX);
    } else {
        let arajinTiv = 0,
           erkrordTiv = 1;
        for (let q = 2; q <= numX; q++) {
            let errordTiv = (arajinTiv + erkrordTiv) * 2;
               arajinTiv = erkrordTiv;
               erkrordTiv = errordTiv;
        }  
        return alert (erkrordTiv); 
    }
};

// Fibonachi minchev 100 erord tvery Logum:
function fibonachiLog(num2) {
    num2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
        51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    let tiv1 = 0,
        tiv2 = 1;
        console.log(tiv1);
        console.log(tiv2);
        for (w = 0; w < num2.length; w++) {
            let tiv3 = tiv1 + tiv2;
                tiv1 = tiv2;
                tiv2 = tiv3;
                console.log(tiv3);
        }
};

// Gtnel 0-100 zuyg tvery:
function zuygNum() {
    let t = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
        51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    for (k = 0; k < t.length; k++) {
        if (t[k] % 2 === 0) {
            console.log(t[k]);
        }
    }
};


