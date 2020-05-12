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