/**add money to the account
 * s1----add event handler prevent page reload after the form.
 * step 2--get money to be added to the account blance get 
   the pin Number.
   s-3---varify the pin number

 */


// step1---add an event handler to the add button inside the form

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // prevent page reload after form
        event.preventDefault();
        //  step2---get money be added to the account
        const addMoney = document.getElementById('input-add-money').value
        console.log(addMoney)
        // get the pin number provided
        const inputPinNumber = document.getElementById('input-pin-number').value
        console.log(inputPinNumber);
        // step3----varify pin number wrong way
        if(inputPinNumber === '1234'){
            console.log('adding money to your account');

            // step4---- get the current balance
            const balance =document
            .getElementById('account-balance').innerText;
            console.log(balance);

            // step 5 add addmoneyinput with balance
            const addMoneyNumber = parseFloat(addMoney);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber  + balanceNumber;
            //  step 6 --- update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
            
        }
        else{
            alert('failed to add money! please try again');
        }
    });