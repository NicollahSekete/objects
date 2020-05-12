//create class with name, password age etc some using constructor some Not. 


class Website {
    constructor(name, age, password){
        this.name = name;
        this.age = age;
        this.password = password;
        this.admin = false;
        this.visibleProfile = true;
        this.showAge = true;
    }

}

const UserOne = new Website("Nicollah", 23, "love")
console.log(UserOne)
const UserTwo = new Website("Adam", 35, "golfer23")
console.log(UserTwo)

console.table(UserOne)
console.table(UserTwo)




//challenge 2!!!!
class Car{
    constructor(regNum){
        this.regNum = regNum;
        this.hoursParked = 0;
        this.AmntCharged = 0.00;
    }
    get regNum(){
        return this.regNum;
    }
    get hoursParked(){
        return this.hoursParked;
    }
    get AmntCharged(){
        return this.AmntCharged
    }
    increaseHours(){
        this.hoursParked++;
        this.AmntCharged +=1.50
    }

}


const pay = (reg, hr) =>{
    const car = new Car(reg);
    for (i = 0; 1<hr; i++){
        car.increaseHours();
    }
    return `You need to pay ${car.AmntCharged} for ${car.hoursParked} hours.`
}

console.log(pay("56NIKK22", 5));



