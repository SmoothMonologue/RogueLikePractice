// var myVar = 'Hello World';
// let myLet = 'Hello World1';
// const myConst = "Hello World2";
// let pokemons = "피카츄, 라이츄, 파이리, 꼬부기";
// let add = function (x, y) {
//     return x + y;
// }

// let re = add(10, 20);
// console.log(add(10, 20));
//명시적 형변환
// let trans = String(undefined);

// console.log(trans, typeof trans);
// console.log(myVar);
// console.log(myLet);
// console.log(myConst);
// //문자열 길이
// console.log(myConst.length);
// //문자열 병합
// console.log(myVar.concat(myLet));
//길이만큼 문자열 추출
// console.log(myVar.substr(6, 5));
// //목표까지 문자열 추출
// console.log(myVar.slice(6, 12));
// //특정 단어가 시작되는 위치
// console.log(myVar.search("World"));
// 문자열 대체
// console.log(myVar.replace("World", "JavaScript"));
//문자열 분할
//console.log(pokemons.split(","));

// let num = 2.5e5;
// // 2.5 x 10^5
// console.log(num);
// console.log(typeof num);

// let num2 = -1 / 0;
// console.log(num2);
// console.log(typeof num2);

// let y;
// let z = y || 20;
// console.log(z);

// for (let i=0; i<10; i++) {
//     console.log(i);
// }

//스프레드 오퍼레이터
let Poke = {
    "이름": "피카츄",
    "도감번호": 25
}

//가변데이터
// let newPoke = Poke;
// newPoke.이름="라이츄";
// console.log(Poke.이름, newPoke.이름);

//얕은 복사
let copyPoke = function (target) {
    let status = [];
    if (typeof target === 'object' && target != null) {
        for (var stat in target) {
            //재귀함수로 해결
            status[stat] = copyPoke(target[stat]);
        }
    }
    else status = target
    return status;
}

let newPoke = copyPoke(Poke);
newPoke.이름 = "라이츄";
console.log(newPoke, Poke);

// let moreInfo = {
//     "타입": "전기"
// }

// let finalPoke = { ...Poke, ...moreInfo };
// console.log(finalPoke);

// let pokemons = ["피카츄", "라이츄", "파이리", "꼬부기"];

// //map
// let mapPoke = pokemons.map(function (poke) {
//     return poke + 1;
// })
// console.log(mapPoke);

// //filter
// let filterPoke = pokemons.filter(function (poke) {
//     return poke == "피카츄";
// })
// console.log(filterPoke);

// //find
// //문자열로 조건을 걸만한 게 있을까?
// let findPoke = pokemons.find(function (poke) {
//     return poke == "피카츄";
// })
// console.log(findPoke);

//1주차 1번
// function compareLetter(s) {
//     let countP = 0, countY = 0;
//     for (let i = 0; i < s.length; i++) {
//         let compare = s.substr(i, 1);
//         if (compare == 'p' || compare == 'P') {
//             countP++;
//         }
//         else if (compare == 'y' || compare == 'Y') {
//             countY++;
//         }
//     }
//     if (countP === countY) return true;
//     else return false;
// }

// console.log(compareLetter("pPoooyY"));
// console.log(compareLetter("Pyy"));

//1주차 2번
// function sumOfArray(absolutes, signs) {
//     let result = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i]) {
//             result += absolutes[i];
//         }
//         else {
//             result -= absolutes[i];
//         }
//     }

//     return result;
// }

// console.log(sumOfArray([4, 7, 12], [true, false, true]));
// console.log(sumOfArray([1, 2, 3], [false, false, true]));

//2주차
function sortingStrings(strings, n) {
    for (let i = 0; i < strings.length - 1; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            let min = strings[i];
            let compare = strings[j];
            if (min[n] == compare[n]) {
                if (min > compare) {
                    strings[i] = compare;
                    strings[j] = min;
                }
            }
            else if (min[n] > compare[n]) {
                strings[i] = compare;
                strings[j] = min;
            }
            //console.log(min[n], compare[n], strings);
        }
    }
    //console.log(`최종: ${strings}`);
    return strings;
}

console.log(sortingStrings(["sun", "bed", "car"], 1));
// console.log(sortingStrings(["abce", "abcd", "cdx"], 2));

