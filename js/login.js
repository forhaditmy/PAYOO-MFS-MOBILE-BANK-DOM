// console.log('java ')
// document.getelement
// document.getElementById('btn-login').addEventListener('click', function(){
    
// })

// search: form submit reloading the page
// step 1---- set event handeler
// document.getElementById('btn-login')
// .addEventListener('click', function(event){
//     // step 2---prevent default behavior(reloading browser)
//     event.preventDefault();  //---------vejal to begainers
//     console.log('login button clicked')
//     // setp 3---get the phone number and thi pin number
//     const phoneNumber = document.getElementById('phone-number').value
//     const pinNumber = document.getElementById('pin-number').value
//     console.log(phoneNumber, pinNumber);
//     // step-4--validate phone and pin
//     // This is temporary, you should do like this.
//     if(phoneNumber=== '50' && pinNumber=== '1234'){
//         console.log('you are the logged in');

//         // step-5 allow user to use the website
//     }
//     else{
//         alert('wrong phone number or pin');
//     }
     
// });
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    // console.log(phoneNumber, pinNumber);
  
//   bad way to valid
// Check if the phone number and pin match the expected values
if (phoneNumber === '5' && pinNumber === '1234') {
    console.log('validation the id');
    window.location.href ='/home.html';
} else {
    alert('wrong phone number or pin');
}
});