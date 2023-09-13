
// impact to API return (time)

// let listOfMovies = fetch("movie.com") // e.g: response time 100ms 
// console.log(listOfMovies)
const event = new Promise((resolve, reject) =>{
    var name = "Khoa";
    name = "K"
    if(name == "Khoa"){
        resolve(name); // success
    }else{
        reject("Name was not Khoa"); // on fail 
    }
})

event.then((name) =>{
    console.log(name)
}).catch( (err) =>{
    console.log("err is ", err)
}).finally(() =>{
    console.log("FINALLY ...")
})

console.log("********************")

const axios = require("axios");
let url = "https://cat-fact.herokuapp.com/facts";
// const data = axios.get("https://cat-fact.herokuapp.com/facts");
const data = axios.get(url);
console.log("data ", data)
data.
then((res) => {
    // console.log(res.data)
}).catch((err)=>{
    console.log(err)
}).finally(() =>{
    console.log("FINALLL axios Promiss worked!")
})


// async await work with a function 
console.log("********************")
console.log("********************")

const fetchData = async () => {
    try{
        // const data = await axios.get(url);
        const data = await axios.get(url+'l');
        console.log("data >>>>>")
        console.log(data)
    }
    catch(err){
        console.log("err >>")
        console.log(err)
    }
}

fetchData();