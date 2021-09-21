// Code your solution in this file!

const hq = 42
let street 
let street2 

function distanceFromHqInBlocks(street) {
    if (street > hq) {
  return (street - hq)
    }   if (street < hq) {
    return (hq - street)
    }
}    
distanceFromHqInBlocks(43); 

function distanceFromHqInFeet (street) {
    if (street > hq) {
        return ((street - hq)*264)
    }
    if (street < hq) {
        return ((hq - street)*264)
    }
}

distanceFromHqInBlocks(43); 


function distanceTravelledInFeet(street, street2) {
    if (street > street2) {
        return ((street - street2)*264)
    }
    if (street < street2) {
        return ((street2 - street)*264)
    }

}
distanceTravelledInFeet(43, 48); 

function calculatesFarePrice(street, street2) {
let distance = distanceTravelledInFeet(street, street2)
let price 
    if (distance <= 400) {
        price = 0
    } else if (distance > 400 && distance <= 2000) {
        price = ((distance - 400)*0.02)
    } else if (distance > 2000 && distance < 2500) {
        price = 25 
    } else 
        price = 'cannot travel that far'
    }

    







//     if (street > street2) {
//         return distance = (street - street2)*264
//     }
//     if (street < street2) {
//         return distance = (street2 - street)*264
//     }
//     if (distance < 400) {
//         return price = 0
//     }
// }