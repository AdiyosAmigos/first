// masala 
// ishxona malumotlar bazasi tuzilsin. bunda 30 ta ishchi xodimning malumotlari bo'lsin
// vazifa: xodimlar ichidan yoshi va jinsi bo'yicha filter dasturi tuzilsin.
// malumotlarda quyidagilar bo'lsin. name, gender, age, millati
const  db = [
    {name: "Ulug`bek", age: 24, gender: "man", country: "Uzbekistan"},
    {name: "Malika", age: 18, gender: "woman", country: "Tadjikistan"},
    {name: "Alex", age: 31, gender: "man", country: "Brasil"},
    {name: "Lina", age: 45, gender: "woman", country: "Spain"},
    {name: "Sunnat", age: 22, gender: "man", country: "Litva"},
    {name: "Jamshid", age: 21, gender: "man", country: "Turkey"},
    {name: "Umid", age: 35, gender: "man", country: "UK"},
    {name: "Muqaddas", age: 20, gender: "woman", country: "USA"},
    {name: "Saboxat", age: 16, gender: "woman", country: "Kanada"},
    {name: "Kamolbek", age: 24, gender: "man", country: "Argentina"},
    {name: "Daston", age: 28, gender: "man", country: "Puerto-Rico"},
    {name: "Мухаммад", age: 25, gender: "man", country: "France"},
    {name: "Щахзад", age: 30, gender: "man", country: "Scodland"},
    {name: "Жасур", age: 25, gender: "man", country: "Sweden"},
    {name: "Манзура", age: 20, gender: "woman", country: "Norway"},
    {name: "Гулноза", age: 17, gender: "woman", country: "Russia"},
    {name: "Наташа", age: 21, gender: "woman", country: "Kazakhstan"},
    {name: "Темур", age: 22, gender: "man", country: "Armenia"},
    {name: "Владик", age: 23, gender: "man", country: "China"},
    {name: "Сурадж", age: 19, gender: "man", country: "Korea"},
    {name: "Отабек", age: 18, gender: "man", country: "Japan"},
    {name: "Вадим", age: 17, gender: "man", country: "Australia"},
    {name: "Javlon", age: 20, gender: "man", country: "India"},
    {name: "Nasiba", age: 25, gender: "woman", country: "Pakistan"},
    {name: "Abrutsi", age: 46, gender: "man", country: "Ruminia"},
    {name: "Sucre", age: 55, gender: "man", country: "Eron"},
    {name: "Michael", age: 24, gender: "man", country: "Denmark"},
    {name: "Monica", age: 24, gender: "woman", country: "German"},
    {name: "Sara", age: 24, gender: "woman", country: "Polsk"},
    {name: "Adrian", age: 44, gender: "man", country: "Ukrain"},
]
let obj = {
    count: 0,
    arr:[]
}
function myFunc(prem, prem2){

    for(let i = 0; i < db.length; i++){
        if(db[i].age < prem && db[i].gender == prem2){
            obj.count += 1
            obj.arr.push(db[i].name)
        }
    }    
    console.log(obj);
} 
myFunc(25,"woman");
