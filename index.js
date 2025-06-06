// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

console.log(selectingDrivers[o](drivers));
console.log(selectingDrivers[1](drivers));

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

function fareDoubler(fare) {
return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}

 
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);


const returnLastTwoDrivers = drivers => drivers.slice(-2);


const selectDifferentDrivers = (drivers, fn) => fn(drivers);


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']
