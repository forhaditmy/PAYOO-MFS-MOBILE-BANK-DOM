document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashout = document.getElementById('input-cash-out').value;
    const cashOutNumber =parseFloat(cashout);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashout, pinNumber)
    // wrong way to verify pin number
    if(pinNumber === '1234'){
    const balance = document.getElementById('account-balance')
    .innerText
    const balanceNumber =parseFloat(balance);
     
    // reduce the balance
    const newBalance = balanceNumber - cashOutNumber;

    // update the UI
    document.getElementById('account-balance').innerText =newBalance;
    }
    else{
        console.log('failed cash out. please try again?')
    }
});