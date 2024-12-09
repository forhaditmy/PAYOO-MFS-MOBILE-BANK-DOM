// show the cash out form 
document.getElementById('btn-show-cash-out')
.addEventListener('click', function(){
    
    // sho cast out btn click
    console.log('show cast out button clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');
      
//    hide the add money form
document.getElementById('add-money-form').classList.add('hidden');




})
// show add money form and hite the cash out form
document.getElementById('btn-show-add-money')
.addEventListener('click', function(){
    
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
});
