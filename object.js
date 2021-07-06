// const person = {
//     name = Vinny,
//     age = 28
// };
// console.log(Object)

let offer = "true";
let time = 1710;

const cafe = {
    name: "whitesheep",
    seatingCapacity: 100,
    hasSpecielOffers: true,
    drinks: ["capachino", "Filter coffee", "tea", "coffee"],
    breakfastOffer: "free crossant with any purchased coffee",
    lunchOffer: "free drink of your choice with any sandwich purchased",
    noOffer: "sorry you have missed the offers for today the last offer of the day ends at",
};
if (time < 1200) {
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time >= 1200) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
} else if (time < 1500) {
    console.log(cafe.noOffer);
} else {
    console.log(cafe.noOffer);
}


let favDrinks = ["Coffee", "Tea", "Pepsi", "Coke"]

for (let i = 4; i > favDrinks; i) {
    console.log(favDrinks[i])
}