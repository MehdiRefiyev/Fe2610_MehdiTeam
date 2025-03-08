// 1-ci sual
// Size newArr verilib bu array icinde objectler. Siz bu object-ler den hansinin hem adi Kenan olan hemde yasi 20 olan hansidisa onun
// ID sayisini console.log() ile console cixartmalisiz
// Sadece bir function istifade ederek bu meseli hel edin (function adi detector olacaq) 

export const newArr = [
    {
        id:1,
        name: "Nicat",
        age: 18,
        isActive: true, 
    },
    {
        id:2,
        name: "Kenan",
        age: 19,
        isActive: false,
    },
    {
        id:3,
        name: "Ibrahim",
        age:19,
        isActive: true,
    },
    {
        id:4,
        name: "Kenan",
        age: 20,
        isActive: false,
    }
]

// 2 - ci sual : Ədədlər Massivinin Çevrilməsi
// `transformNumbers` adlı funksiya yazın, hansı ki, ədədlər massivini qəbul edir və aşağıdakı əməliyyatları yerinə yetirir:
// Massivin hər bir ədədini iki qatıni tapir.  
// İki qati artiqdan sora ise onnarin cemini tapir hesablayır  

// **Tələblər:**  
// Funksiya ox funksiyası (arrow function) şəklində yazılmalıdır.  
// Nəticə çıxarmaq üçün template literals (şablon sətirləri) istifadə edin.  

// Nümunə istifadəsi:
export const nums = [1, 2, 3, 4];


// 3 - cu sual 
// Siz students array icindeki olan objectlerin icerisini yoxluyaraq kim hansi qrupa aid olduqunu tapmalisiz grade-leri esasinda

export const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' }
];
 
export let newArray_1 = {
    A: [],
    B: [],
    C: []
};


// 4 cu sual 
// arraydan son ucundenisi goturun ve onnlar ile yeni bir array icinde objectler yaradan function yazin 
// (ve id olaraq indexler qoyulacaq ama 1 den baslmalidi)

export let alphabet = ["abc","acb","bac","bca","cab","cba"]