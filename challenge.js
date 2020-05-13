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

console.table(UserOne);
console.table(UserTwo);




//challenge 2!!!!

class Car{
    constructor(regnum){
        this._regnum = regnum;
        this._hours = 0;
        this._charge = 0.00;
    }
    get regnum(){
        return this._regnum;
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge;
    }
    increaseHours(){
        this._hours++;
        this._charge += 1.50;
    }

}

const pay = (reg, hr) => {
    const car = new Car(reg);
    for(i =0; i<hr; i++){
        car.increaseHours();
    }
    return `you need to pay £ ${car.charge} for ${car.hours} hours.`;
}

const nikk = new Car(pay(1234 , 5));
console.log(nikk);
const ray = new Car(pay(1234 , 9));
console.log(ray);
