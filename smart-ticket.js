// function getSeatById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]');
//     element.classList.remove('bg-[#F7F8F8]');

// }



// let seatArray = [];
// function selectSeat(elementId){
//     getSeatById(elementId);

//     let selectedSeat = document.getElementById(elementId).innerText;
//     let totalSelectedSeat = selectedSeat + 1;
//     seatArray.push(totalSelectedSeat);



// }

// const totalSeat = getConvertedValue("total-seat");
// const totalSelectedSeat = getConvertedValue("total-selected-seat");


const allSeat = document.getElementsByClassName("click-btn");

for (const seat of allSeat) {
    seat.addEventListener("click", function (event) {
        const seatNumberText = event.target.innerText;
        // console.log(seatNumberText, "Economy class", "500");
        
        const TicketPrice = '550';
        const price = parseInt(TicketPrice);
        // console.log(convertedPrice);

        const selectedSeatContainer = document.getElementById("selected-player-container");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-around");
        
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatNumberText;
        p2.innerText = 'Economy';
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedSeatContainer.appendChild(div);

        updateTotalPrice(price);
    })
}

function updateTotalPrice (value){
    const totalCost = getConvertedValue("total-price");
    const sum = totalCost + value;
    // console.log(totalCost, sum);
    document.getElementById("total-price").innerText = sum;
}










function getConvertedValue(id) {
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element);
    return convertedElement;
}

