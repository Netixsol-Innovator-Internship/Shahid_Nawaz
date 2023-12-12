<h2 align="center"><b>Time Complexity and Algorithms in JavaScript</b></h2>
<h3 align="center"><b>Week#3 Day#1</b></h3>
<h4 align="center"><b>Assignment:</b> Calculate the time complexities of algorithms used in previous JavaScript Assignments.</h4>

<h3><b>Time Complexity:</b></h3>
<p>The time taken by an algorithm to execute and how the size of the input affects the execution time of the algorithm is known as Time Complexity.<p>

<p>Everything we measure in real-world has some unit of measurement in which we measure that entity. In Data Structures, We have Big O Notation, Big Omega Notation and Big Theta Notation to show the time complexity. In Simple, these are basically the units of time complexity in which we calculate the time complexity of an algorithm.<p>

<h3><b>Big O Notation:<b></h3>
<p>It gives us an Upper Bound. In basically tells us the maximum time taken by an algorithm to execute. In Simple, it tells us the time taken by an Algorithm in worst case.</p>

<h3><b>Big Theta Notation:</b></h3>
<p>It gives us an average case complexity. It basically tells us the average time taken by an algorithm to execute. In Simple, it tells us the time taken by an Algorithm in average case.</p>

<h3><b>Big Omega Notation:</b></h3>
<p>It gives us lower bound complexity. It basically tells us the minimum taken by an algorithm to execute. In Simple, it tells us the time taken by an Algorithm in best case.</p>

<p>In our Assignment, we use Big O Notation to calculate the time complexity of an Algorithm.</p>
<p><b>Some common time complexities and their correspondind Big O Notation includes:</b></p>

<h3><b>1- Constant Time Complexity: O(1)</b></h3>
<p>If the time taken by an algorithm to execute does not increases by the size of the input, then the corresponding algorithm has Constant Time Complexity and it is written as O(1).</p>

<h3><b>2- Linear Time Complexity: O(n)</b></h3>
<p>If the time taken by an algorithm to execute increases as the size of the input increases, then the corresponding algorithm has Linear Time Complexity and it is written as O(n).</p>

<h3><b>3- Quadratic Time Complexity: O(n^2)</b></h3>
<p>If the time complexity of an algorithm is quadratic, it means that the time taken by an algorithm to execute is directly proportional to the square of the size of the input and it is written as O(n^2).</p>

<h3><b>4- Cubic Time Complexity: O(n^3)</b></h3>
<p>If the time complexity of an algorithm is quadratic, it means that the time taken by an algorithm to execute is directly proportional to the cube of the size of the input and it is written as O(n^3).</p>

<h3><b>5- Logarithmic Time Complexity: O(log n)</b></h3>
<p>An algorithm is said to have a logarithmic time complexity when it reduces the size of the input data in each step by 50 percent or the number of operations gets reduced by 50 percent as the input size increases and it is written as O(log n).</p>

<h3><b>6- Exponential Time Complexity: O(2^n)</b></h3>
<p>When we see exponential growth in the number of operations performed by the algorithm with the increase in the size of the input, we can say that that algorithm has exponential time complexity and it is written as O(2^n).</p>

<h3><b>Trick to find the Time Complexity: </b></h3>
<p>1- Break the code into fragments.</p>
<p>2- Drop the non-dominant term.</p>
<p>3- Drop the constant term.</p>

<p><b>Now we move on to our Week-3 Day-1 Task. Bascially, our Week-3 Day-1 task is to calculate the time complexities of the Algorithms used in the Week-2 Tasks (JavaScript Assignments).</b></p>

<h3><b>Week#2 Day#1</b></h5>
<h4><b>Algorithm: </b></h4>
<code>
arrowKey1.addEventListener("click", () => {
  let startTime = performance.now();
  let day1 = days.value;
  let month1 = months.value;
  let year1 = years.value;

    if (day1 == "") {
    valid1.innerText = "Date is required.";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
    } else if (day1 < 1 || day1 > 31) {
    valid1.innerText = "Not a valid date!";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
    } else {
    validday.style.color = "gray";
    valid1.style.visibility = "hidden";
    }

    if (month1 == "") {
    valid2.innerText = "Month is required.";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
    } else if (month1 < 1 || month1 > 12) {
    valid2.innerText = "Not a valid month!";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
    } else {
    validmonth.style.color = "gray";
    valid2.style.visibility = "hidden";
    }

    if (year1 == "") {
    valid3.innerText = "Year is required.";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
    } else if (year1.length < 4 || year1.length > 4 || year1 > getYear) {
    valid3.innerText = "Not a valid year!";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
    } else {
    validyear.style.color = "gray";
    valid3.style.visibility = "hidden";
    }
    if (day1 && month1 && year1) {
    const birthDate = new Date(year1, month1 - 1, day1);
    const getDays = (new Date() - birthDate) / (1000 _ 60 _ 60 \* 24);
    let remainingDays = getDays % 365.25;
    let ageYears = Math.floor(getDays / 365.25);
    let ageMonths = Math.floor(remainingDays / 30);
    let ageDay = Math.floor(remainingDays % 30);
    document.getElementById("year2").innerHTML = ageYears;
    document.getElementById("month2").innerHTML = ageMonths;
    document.getElementById("day2").innerHTML = ageDay;
    }
    let endTime = performance.now();
    console.log(`Time Taken: ${endTime - startTime}`);

});
</code>

<h4>In the above code, I have added a click event handler on a button, so when we click on that button, it calculates us the total years, months and days since we born. In this algorithm, the time taken by an algorithm to execute does not increases with the size of the input.
No matter what the size of the input is, the algorithm execution time remains almost the same. So, the time complexity of this algorithm is Constant and it is denoted as O(1).</h5>
<h4><b>Time Complexity: Constant Time Complexity O(1)</b></h4>
<h4><b>Time Taken: 0.20000004768371582 ms</h4></p>

<h3><b>Week#2 Day#2</b></h3>
<h4><b>Algorithm: </b></h4>
<code>

function renderNotifications() {
let startTime = performance.now();
notificationList.innerHTML = Notification.map((notification, i) => {
return ` <div
id="backGroundColor"
class="w-full h-auto col-span-2 cursor-pointer px-4 clicking"

>

    <div
      class="w-full h-full px-4 py-4 flex items-center justify-start rounded-md ${
        !notification.Read ? `bg-slate-200` : ""
      }"
    >
      <div class="flex items-start justify-center gap-3">
        <div class="w-10 h-10 shrink-0">
          <img class="object-cover" src="${notification.image}" alt="${
      notification.imagealt
    }" />
        </div>
        <div class="flex flex-col items-start justify-center">
          <div class="text-sm">
            <span class="font-bold">${notification.name}</span> ${
      notification.action
    }
            <span class="font-bold text-black opacity-60"
              >${notification.actionName}</span
            >
            <span
              id="dot"
              class="w-3 h-3 bg-red-700 rounded-full ${
                !notification.Read ? `inline-block` : `hidden`
              }"
            ></span>
          </div>
          <div class="text-gray-500 font-semibold text-sm ${
            notification.messageId ? `mb-2` : `mb-0`
          }">${notification.time}</div>
          <div
            class="w-[95%] px-4 py-4 border border-gray-300 rounded-sm text-gray-600 font-medium text-sm ${
              notification.messageId ? `block` : `hidden`
            }"
          >
          ${notification.message}
          </div>
        </div>
      </div>
    </div>

  </div>`;
  });
  let endTime = performance.now();
  console.log(`Time Taken: ${endTime - startTime}`);
}
</code>
<h4>In the above code, I have used a function rendernotifications() which uses a map method to iterate over an array of objects. So, assume notifications as n. So the if the number of objects in the array increases the time complexity increases, the number of iterations increases linearly.</h4>
<h4><b>Time Complexity: Linear Time Complexity O(n)</b></h4>
<h4><b>Time Taken: 5.100000023841858 ms</h4></p>

<h3><b>Week#2 Day#3</b></h3>
<h4><b>Algorithm: </b></h4>
<code>
 buttons.addEventListener("click", (e) => {
    let startTime = performance.now();
    if (e.currentTarget.innerText == "SUBMIT REVIEW") {
      if (ratingvalue) {
        let a1 = document.getElementById("image1").classList.add("hidden");
        let a2 = document.getElementById("image2").classList.remove("hidden");
        // a1.classList.add("hidden");
        let b1 = document.getElementById("heading1").classList.add("hidden");
        let b2 = document.getElementById("heading2").classList.remove("hidden");
        let c1 = document.getElementById("msg1").classList.add("hidden");
        let c2 = document.getElementById("msg2").classList.remove("hidden");
        let d1 = document.getElementById("block1").classList.add("hidden");
        let d2 = document.getElementById("block2").classList.remove("hidden");
        let values = (document.getElementById("valofrate").innerHTML =
          ratingvalue);
        let e1 = document.getElementById("button1").classList.add("hidden");
        let e2 = document.getElementById("button2").classList.remove("hidden");
        let a = document.getElementById("selectRating");
        a.classList.add("invisible");
        a.classList.remove("visible");
        gsap.from("#mainbox", {
          scale: 0,
          opacity: 0,
          duration: 1.3,
          rotate: 360,
        });
      } else {
        let a = document.getElementById("selectRating");
        a.classList.add("visible");
        a.classList.remove("invisible");
        setTimeout(function () {
          a.classList.remove("visible");
          a.classList.add("invisible");
        }, 1000);
      }
    } else {
      location.reload();
    }
    let endTime = performance.now();
    console.log(`Time Taken: ${endTime - startTime}`);
  });
</code>
<h4>In the above code, I have added a click event handler on a submit button, so when we click on that button, it takes the rating value if it is true and moves to next page rendered through JavaScript where it shows the rating value we selected out of total rating value. If the rating value is false means if rating not selected by the user, then it displays an error message that please select a rating first to continue. In this algorithm, the time taken by an algorithm to execute does not increases with the size of the input (How much rating we selected). No matter what the size of the input is, the algorithm execution time remains almost the same. So, the time complexity of this algorithm is Constant and it is denoted as O(1).</h4>
<h4><b>Time Complexity: Constant Time Complexity O(1)</b></h4>
<h4><b>Time Taken: Time Taken: 4.399999976158142 ms</h4></p>

<h3><b>Week#2 Day#4</b></h3>
<h4><b>Algorithm: </b></h4>
<code>
inputField2.addEventListener("input", () => {
  let startTime = performance.now();
  errorMsg.innerHTML = "";
  if (inputField2.value < 0 || inputField2.value == 0) {
    inputField2.style.outlineColor = "red";
    errorMsg.innerHTML = "Set Persons Correctly!";
  } else if (
    (checkTarget != "" || inputField3.value != "") &&
    inputField1.value != "" &&
    inputField2.value != ""
  ) {
    inputField2.style.outlineColor = "hsl(172, 67%, 45%)";
    if (inputField3.value == "") {
      let tipAmount =
        ((inputField1.value / inputField2.value) * checkTarget) / 100;
      Tip.innerHTML = tipAmount.toFixed(2);
      let totalamount =
        (tipAmount * +inputField2.value + +inputField1.value) /
        inputField2.value;
      TotalAmount.innerHTML = totalamount.toFixed(2);
    } else {
      let tipAmount =
        ((inputField1.value / inputField2.value) *
          parseInt(inputField3.value)) /
        100;
      Tip.innerHTML = tipAmount.toFixed(2);
      let totalamount =
        (tipAmount * +inputField2.value + +inputField1.value) /
        inputField2.value;
      TotalAmount.innerHTML = totalamount.toFixed(2);
    }
  }
  let endTime = performance.now();
  console.log(`Time Taken: ${endTime - startTime}`);
});
</code>
<h4>In the above code, I have added an input event handler on a Number of People input field, so when we write total number of people in that input field, it gives us the result in the form of Tip Amount per person and Total Amount per person to be payed. So, the time taken by this algorithm to execute does not increases with the size of the input (Number of people) So, it means the time complexity of this algorithm is Constant and it is denoted as O(1).</h4>
<h4><b>Time Complexity: Constant Time Complexity O(1)</b></h4>
<h4><b>Time Taken: 0.19999992847442627 ms</h4></p>

<h3><b>Week#2 Day#5 & Day#6</b></h3>
<h4><b>Algorithm: </b></h4>
<code>
document.getElementById("markx").addEventListener("click", () => {
  let startTime = performance.now();
  document.getElementById("mainsidebar").classList.toggle("hidden");
  document.getElementById("mainsidebar").classList.toggle("-right-[20rem]");
  document.getElementById("mainsidebar").classList.toggle("right-0");
  document.getElementById("hamberg").classList.toggle("hidden");
  let endTime = performance.now();
  console.log(`Time Taken: ${endTime - startTime}`);
});
</code>
<h4>Day#5 and Day#6 Algorithms have Constant Time Complexities as they have no loops, no mapping, no if-else statements in their Algorithms. In the above code, I have added a click event handler on the cross icon in the hamberg. When we clicks on that icon, it closes the hamberg. So, the time taken by this algorithm to execute does not increases with the size of the input. So, it means the time complexity of this algorithm is Constant and it is denoted as O(1).</h4>
<h4><b>Time Complexity: Constant Time Complexity O(1)</b></h4>
<h4><b>Time Taken: 0.09999990463256836 ms</h4></p>
