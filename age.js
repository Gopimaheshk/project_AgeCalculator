const btn1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1= document.getElementById("result");
function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if(birthdayValue ===""){
        alert("please select your birthday");
    }
    else{
        const age = getAge(birthdayValue);
        resultE1.innerText=`your age is ${age} ${age>1 ? "years":"year"} old`;
    }
}
function getAge(birthdayValue){
    const currDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currDate.getFullYear()-birthdayDate.getFullYear();
    const month = currDate.getMonth()-birthdayDate.getMonth();

    if( month<0 || (month === 0 && currDate.getDate()<birthdayDate.getDate()) ){
        age--;
    }
    return age;
}
   
btn1.addEventListener("click",calculateAge);
