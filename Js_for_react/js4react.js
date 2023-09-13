function DoSthN(){

}

const DoSth  = () => {
    console.log('arrow Do Something');
}


// const person = {
//     name: "Khoa",
//     age: 31,
//     isMarried: false
// }

// const {name, age, isMarried } = person;
// console.log(name)

const name = "Khoa";
const age = 31;
const person = {
    name:name,
    age: age,
    isMarried: false
}
console.log(person.name)


// const person_2nd = {... person};
const person_2nd = {...person, name:"Jack", new:'new-val'} 
console.log(person_2nd)

const names = ["Jack", "Cody"];
const names2 = [... names, "Joe"];
console.log(names2)


console.log("************************")
console.log("\n")
console.log("Maping & Filter")

let name_arr = ["Jim", "Joe", "Jack"]
name_arr = name_arr.map((n) => {
    console.log(n)
    return n + "-1"
})

console.log(name_arr)

name_arr = names.filter((n) => {{
    return n != "Jim"
}})


