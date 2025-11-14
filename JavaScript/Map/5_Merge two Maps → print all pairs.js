///Merge two Maps → print all pairs.
 

let emply1 = new  Map([
    ["name","Gayatri"],
    ["age","19"]
]);

let emply2 = new Map([
     
    ["City","Karad"],
    ["Mob No",1234567894]

]);

let EmployeInfo = new Map([...emply1,...emply2]);

for(let [key , value]of EmployeInfo){
    console.log(key + " => " + value);
}