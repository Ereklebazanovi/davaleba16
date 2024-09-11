
question1 = prompt('შეიყვანეთ ამჟამინდელი დრო');
question2 = prompt('AM OR PM?')


function convertTime(){

let timetoNumber = Number(question1)

    if (timetoNumber  && question2 ==='pm' ){

        return `${timetoNumber+12}`

    }
    else if (timetoNumber && question2 ==='am'){

        return timetoNumber
    }
}

console.log(convertTime())