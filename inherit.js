//lets learn how to use inheritance 


class CodeNation {
    constructor(name, age, role){
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

const Jacob = new CodeNation("Jacob" , 45, "instructor");
console.log(Jacob)

///
class Student extends CodeNation{
    constructor(name, age, role, status){
        super(name, age, role) //this is inheriting the parameters for line 5, thats the constructor of CodeNation
        this.status = status;

    }
}

const Nikk = new Student("Nikk", 23, "apprentice", "employed")
console.table(Nikk)


///

class Staff extends CodeNation{
    constructor(name, age, role, employeeNumber){
        super(name, age, role)
        this.employeeNumber = employeeNumber
    }
}

const Gerry = new Staff("Gerry", 56, "manager", 12355);
console.table(Gerry)