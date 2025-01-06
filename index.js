// Code your solution in this file!

function distanceFromHqInBlocks(currentBlockNum){
    return Math.abs(currentBlockNum - 42)
}


function distanceFromHqInFeet(currentBlockNumInFeet){
    return Math.abs(currentBlockNumInFeet - 42) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } 
    else if (distance <=2000) {
        let fare = (distance - 400) * 0.02;
        return fare;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

  }