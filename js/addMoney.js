/***
 * 1.add event listener to the add money button(form submit)
 * make sure to preventDefault so that page dose not reload
 * 2--get the money user want to add also,get the pin number provided
 * 3.verify the pin number .for, wrong fin numcber ==> failed to add
 * for right pin number , allow to add the number to the account balance 
 * 
 * 4---get the current balance 
 * 5--add money to be added with the current balance 
 * 6--display / update the balance in the DOM/UI
 * 
 */


document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('added the event handeler');

        //   get money and the pin  number

        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;

        //   console.log(addMoney, pinNumber);
        if (pinNumber === '1234') {
            //    add money to account 
            const balance = document.getElementById('account-balance')
                .innerText
            const balanceNumber = parseFloat(balance);

            // update balance
            const newBalance = balanceNumber + addMoneyNumber
            // update the dom 
            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert('failed to added money .please try again!');
        }

    })