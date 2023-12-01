
const billInput=document.querySelector('.bill-input')
const peopleInput=document.querySelector('.people-input')
let tipPerPerson=document.getElementById('tip-amount')
let totalPerPerson=document.getElementById('total-amount')
const tips=document.querySelectorAll('.tips')
const tipCustom=document.querySelector(".tip-custom")
const resetBtn=document.querySelector('.reset')
const error=document.querySelector('.error')

billInput.addEventListener("input",billInputFunction)
peopleInput.addEventListener("input",peopleInputFunction)
tipCustom.addEventListener("input",tipCustomFunction)
resetBtn.addEventListener("click", reset)


tips.forEach(function(value){
    value.addEventListener("click",handleClick)
})

billInput.value='0.0';
peopleInput.value='1';
tipPerPerson.innerHTML="$"+(0.0).toFixed(2);
totalPerPerson.innerHTML="$"+(0.0).toFixed(2);
let billValue=0.0;
let peopleValue=1;
// let tipValue=0.15;

function billInputFunction(){
  billValue=parseFloat(billInput.value)
  calculateTip();
}
function peopleInputFunction(){
    peopleValue=parseFloat(peopleInput.value)
  calculateTip();
  if(peopleValue<1){
    error.style.display='none'

  }
}
function tipCustomFunction(){
    tipValue=parseFloat(tipCustom.value/100)
    tips.forEach(function(val){
        val.classList.remove('active-tip')
    })
    calculateTip()
}
function handleClick(event){
tips.forEach(function(val){
    val.classList.remove('active-tip')
    if(event.target.innerHTML==val.innerHTML){
        val.classList.add('active-tip')
        tipValue=parseFloat(val.innerHTML)/100;
        tipCustom.value="";
    }
})
calculateTip();
}
function calculateTip(){
    if(peopleValue >=1){
        let tipAmount=(billValue*tipValue)/peopleValue
        let total=(peopleValue*tipAmount )
        let totalAmaount=(total+billValue )/peopleValue
        tipPerPerson.innerHTML="$"+tipAmount.toFixed(2)
        totalPerPerson.innerHTML="$"+totalAmaount.toFixed(2);
    }
}
function reset(){
    billInput.value='0.0';
    billInputFunction()
    peopleInput.value='1';
     peopleInputFunction
     tipCustom.value="";
}



document.addEventListener('DOMContentLoaded', function () {
    // Get the text content of the element
    var text = document.getElementById('typewriter').textContent;
    // Set the element content to an empty string
    document.getElementById('typewriter').textContent = '';

    // Function to animate the typewriter effect
    function typeWriter(text, i) {
      if (i < text.length) {
        document.getElementById('typewriter').textContent += text.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, i);
        }, 300); // Adjust the timeout for the typing speed
      } else {
        // After typing is complete, start the erasing process
        eraseText(text, text.length - 1);
      }
    }

    // Function to erase the text
    function eraseText(text, i) {
      if (i >= 0) {
        document.getElementById('typewriter').textContent = text.substring(0, i);
        i--;
        setTimeout(function () {
          eraseText(text, i);
        }, 50); // Adjust the timeout for the erasing speed
      } else {
        // After erasing is complete, you can add a delay before typing again
        setTimeout(function () {
          typeWriter(text, 0);
        }, 1000); // Adjust the delay before typing again
      }
    }

    // Start the typing animation
    typeWriter(text, 0);
  });

// let Amount = 100
// let Tip = 5
// let people = 5


// let totaltip = (100 * 5 )/100//5
// let perpersonbill = Amount / people//20
// let tiperperson = totaltip / people//1
// let totalbillperperson = perpersonbill + tipPerPerson//21
// console.log("total bill perperson",totalbillperperson,"totaltip",totaltip)