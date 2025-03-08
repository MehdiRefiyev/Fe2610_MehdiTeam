import { newArr, nums, newArray_1, students, alphabet } from "./question.js";

// 1 ci sualin cavabi  

function detector(array) {
    let result = array.find(item => item.name === "Kenan" && item.age === 20);
    if (result) {
        console.log("1 ci sualin cavabi : " + result.id);
    }
}

detector(newArr);

// 2 ci  sualin cavabi

const transformNumbers = (numbers) => {

    const doubledNumbers = numbers.map(num => num * 2);

    const sum = doubledNumbers.reduce((accumulator, current) => accumulator + current, 0);

    return `2-ci sualin cavabi : İki qatına çatdırılmış ədədlərin cəmi: ${sum}`;
};

console.log(transformNumbers(nums));


// 3 cu sualin cavabi 

students.filter((item) => {

    if (item.grade == 'A') {
        newArray_1.A.push(item.name);
    }
    else if (item.grade == 'B') {
        newArray_1.B.push(item.name);
    }
    else {
        newArray_1.C.push(item.name);
    }

    return newArray_1;

});

console.log("3 cu sualin cavabi ", newArray_1);

// 4 cu sualin cavabi

const createLastThreeObjects = (arr) => {

    const lastThree = arr.slice(-3);

    return lastThree.map((item, index) => ({
        id: ++index,
        value: item
    }));
};

console.log("4 cu sualin cavabi " , createLastThreeObjects(alphabet));

console.log("kenan");