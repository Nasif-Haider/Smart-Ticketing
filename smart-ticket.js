function seeAllOffers (){
    document.getElementById("transitTrove-section").scrollIntoView({behavior: 'smooth'});
}


const allSeat = document.getElementsByClassName("click-btn");


for (const seat of allSeat) {
    seat.addEventListener("click", function (event) {
        const seatNumberText = event.target.innerText;
        console.log(seatNumberText);

        const TicketPrice = '550';
        const price = parseInt(TicketPrice);

        const selectedSeatContainer = document.getElementById("selected-seat-container");

        // event.target.setAttribute("disabled", false);        

        const seatCount = getConvertedValue("total-selected-seat");
        if (seatCount + 1 > 4) {
            alert("You can't buy more than 4 tickets at a time.");
            return;
        }

        const element = document.getElementById(seatNumberText);
        element.classList.add('bg-[#1DD100]');
        element.classList.remove('bg-[#F7F8F8]');
        
        event.target.setAttribute("disabled", false);  

        // Update seat left
        const seatLeft = getConvertedValue("total-seat");
        document.getElementById("total-seat").innerText = seatLeft - 1;

        // Update selected seat 
        const selectSeat = getConvertedValue("total-selected-seat");
        document.getElementById("total-selected-seat").innerText = selectSeat + 1;


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

        updateGrandTotal();
    })
}


function updateGrandTotal(status) {
    const totalPrice = getConvertedValue("total-price");
    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalPrice;
    }
    else {
        const couponCode01 = document.getElementById("first-coupon").innerText;
        const couponCode02 = document.getElementById("second-coupon").innerText;
        const userInputCoupon = document.getElementById("userInput-coupon").value;
        if (couponCode01 == userInputCoupon) {
            const discount = totalPrice * 0.15;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        }
        else if (couponCode02 == userInputCoupon) {
            const discount = totalPrice * 0.2;
            document.getElementById("grand-total").innerText = totalPrice - discount;
        }
        else {
            alert("Please enter valid coupon code");
        }
    }

}


function updateTotalPrice(value) {
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

