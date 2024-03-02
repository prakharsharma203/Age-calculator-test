const input = document.getElementById("dob");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener( 'click',function(){
    let date = new Date(input.value);
    let currentDate = new Date();
    
    let year = currentDate.getFullYear() - date.getFullYear();
    console.log(year);
    
    const month = currentDate.getMonth() - date.getMonth();
    
    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < date.getDate())
        ) {
            year--;
        }
        result.innerText = `You are ${year} year old`;
    })