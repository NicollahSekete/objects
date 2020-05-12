let carArray = [4, 'grey', true];
let carObject = {
	color: ['grey', 'red'],
	doors: {
		material: 'carbon fiber',
		windows: {
			tinted: true,
			typeOfGlass: 'regular'
		}
	},
	convertible: true,
	queryCar() {
		// code to make the car drive
		return this.convertible;
	}
}
let convertible = carObject.queryCar();
const doThing = () => {
	//do something with convertible var
}

carObject.childseat = true;
console.log(carObject);


//notice how its a capital letter, all classes in javascript begin with a capital letter //
class Car {
	constructor(color, doors, convertible){
		this.color = color;
		this.doors = doors;
		this.convertible = convertible;
		this.wheels = true; //so here we are saying all these cars in this class have wheels.
		this.windows = "hopefully"; 
	}
	yearPassed(){
		this.age++;
		console.log("congtatulations on a year");
	}

	takeAwayADoor(){
		this.doors--;
		console.log(`you now have ${this.doors} left`)
	}

}





const KerryCar = new Car("pink", 0, false )
const KaelaCar = new Car ("white", 4, true)
console.log(KerryCar)
console.log(KaelaCar)
KaelaCar.takeAwayADoor();
KaelaCar.yearPassed();
console.table(carObject)



const NikkCar = new Car("grey", 5, false)
const MaryCar = new Car("blue", 4, false)
const SamCar = new Car("green", 3, true)
console.log(NikkCar)
console.log(MaryCar)
console.log(SamCar)

