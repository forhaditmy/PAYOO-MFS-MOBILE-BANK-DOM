// console.log('java ')
// document.getelement
// document.getElementById('btn-login').addEventListener('click', function(){
    
// })

// search: form submit reloading the page
// step 1---- set event handeler
document.getElementById('btn-login')
.addEventListener('click', function(event){
    // step 2---prevent default behavior(reloading browser)
    event.preventDefault();  //---------vejal to begainers
    console.log('login button clicked')
    // setp 3---get the phone number
    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber);
     
});
