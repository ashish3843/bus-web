function ticketHandeler(totalTicket, ticketType) {
    const ticketNumber = document.getElementById(ticketType + '-ticket');
    const ticketInNumber = parseInt(ticketNumber.value);
    let numberOfTicket = ticketInNumber
    if (totalTicket == true) {
        numberOfTicket = ticketInNumber + 1;
    }
    if (totalTicket == false && ticketInNumber >0 ) {
        numberOfTicket = ticketInNumber - 1;
    }
    ticketNumber.value = numberOfTicket;
    let tickerCost = 0;
    if (ticketType == 'First' ) {
        tickerCost = numberOfTicket * 150;
    }
    if (ticketType == 'economy') {
        tickerCost = numberOfTicket * 100;
    }
    document.getElementById(ticketType +'-cost').innerText = tickerCost;
    totalCalculation()
}; 
function totalCalculation() {
    const firstAmount = document.getElementById('First-ticket');
    const firstAmountNum = parseInt (firstAmount.value);

    const economyAmount = document.getElementById('economy-ticket');
    const economyAmountNum = parseFloat (economyAmount.value);

    const subTotalAmount = firstAmountNum * 150 + economyAmountNum * 100;
    document.getElementById('sub-total').innerText = subTotalAmount;

    const totalTax = subTotalAmount * .10;
    document.getElementById('tax').innerText = totalTax;
    const grandTotal = subTotalAmount + totalTax;
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('confirm-bill').innerText = grandTotal;
};
 
document.getElementById('booking-btn').addEventListener('click', function () {
    document.getElementById('main-page').style.display = 'none';   
    document.getElementById('confirmation').style.display = 'block';
})


