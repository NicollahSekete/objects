
//cafe challange
let offer = "node";
let time = 1200;

const cafe = {
    name: "whitesheep",
    hasOffers: true,
    drinks: ["tea", "coffee"],
    breakfastOffer: "free croissant",
    LunchOffer: "free drink",
    noOffer: "sorry no offer",

    //using functiond with objects
    openCafe:()=>{
        return "come on in";
    },
    closeCafe: ()=>{
        return "we care closed"
    }

};
console.log(cafe.openCafe());
console.log(cafe.closeCafe());
//
if(time <1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
}else if (time < 1500){
    offer = cafe.LunchOffer;
    console.log(cafe.LunchOffer);
}



//objects, unlike array, use {} instead of []

//let carObjects = {
   // doors: 4,
 //   color: 'grey',
 //   convertible: true
//}
//to serparate key-value pairs you use ',' . that is necessary!


let shoeSize = '';
let TrueSize = 4;

const nikk = {
    age: 23,
    heightInCM: 158 ,
    eyeColour: 'brown',
    Female: true,
    shoeOffer: 'Go to kids section',
    ShoeOfferTwo: 'womens section'
};

if(TrueSize <= 4){
    shoeSize = nikk.shoeOffer;
    console.log(nikk.shoeOffer);
} else if (TrueSize < 6){
    shoeSize = nikk.ShoeOfferTwo;
    console.log(nikk.ShoeOfferTwo);
}

//activity 2 Alarm

let day = 'saturday';
let Alarm = 'none';

let wakeUp = {
    weekendAlarm: 'no alarm',
    weekdayAlarm: 'get up at 7am'

}

if(day = 'saturday'){
    Alarm = wakeUp.weekendAlarm;
    console.log(wakeUp.weekendAlarm);
}else if(day = 'Monday'){
    Alarm = wakeUp.weekdayAlarm;
    console.log(wakeUp.weekdayAlarm);
}


// accessing stuff

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
    queryCar(){
        return ;

    }
}
//we dont have to console.log to access drive//pay attention to where it is here.
//carObject.drive();

//if we change the console.log of vroom to a return, you do
//console.log(carObject.drive());
//pay attention to how many brackets are required here.


