//ROAD MAP DAY 3 TASK NO : 1
let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};


var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal "+flag);

//ROAD MAP DAY 3 TASK NO : 2

let COUNTRIES = new XMLHttpRequest();{
    COUNTRIES.open("get","https://restcountries.com/v3.1/all")
    COUNTRIES.send();
    COUNTRIES.onload = function(){
        let data  = COUNTRIES.response;
        let Result = JSON.parse(data)
        for ( let i = 0; i<Result.length; i++)
        console.log("countries name:"+" "+Result[i].name.common,"flags:"+" "+Result[i].flags.svg)
    }
}

//ROAD MAP DAY 3 TASK NO : 3

let COUNTRIES1 = new XMLHttpRequest();{
    COUNTRIES1.open("get","https://restcountries.com/v3.1/all")
    COUNTRIES1.send();
    COUNTRIES1.onload = function(){
        let data  = COUNTRIES1.response;
        let Result1 = JSON.parse(data)
        for ( let i = 0; i<Result1.length; i++)
        console.log("countries name:"+" "+Result1[i].name.common,"region:"+" "+Result1[i].region,"sub-region:"+" "+Result1[i].subregion,"population:"+" "+Result1[i].population)
    }
}
