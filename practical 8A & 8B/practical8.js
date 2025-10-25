
const loopParent = document.querySelector('.loop-parent');
const loopChildren = document.querySelectorAll('.Lchild');


const condParent = document.querySelector('.cond-parent');
const condChildren = document.querySelectorAll('.cchild');

const startBtn = document.getElementById('strt');


function hideAll() {
  loopChildren.forEach(btn => btn.style.display = "none");
  condChildren.forEach(btn => btn.style.display = "none");
  startBtn.style.display = "none";
}
hideAll();

function loops() {

  condChildren.forEach(btn => btn.style.display = "none");
  startBtn.style.display = "none";

  loopChildren.forEach(btn => {
    if (btn.style.display === "none") btn.style.display = "block";
    else btn.style.display = "none";
  });
}
function Conditional() {

  loopChildren.forEach(btn => btn.style.display = "none");

  condChildren.forEach(btn => {
    if (btn.style.display === "none") btn.style.display = "block";
    else btn.style.display = "none";
  });

  startBtn.style.display = "block";
}


function forl() {
  let num = parseInt(prompt("Enter a number to display its multiplication table:"));
  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}\n`;
  }

  alert("📘 Multiplication Table using For Loop:\n\n" + result);
}


function whl() {
  let sum = 0;
  let num = parseInt(prompt("Enter a number (enter 0 to stop):"));

  while (num !== 0) {
    if (isNaN(num)) {
      alert("Please enter a valid number.");
    } else {
      sum += num;
    }
    num = parseInt(prompt("Enter another number (0 to stop):"));
  }

  alert("🧮 Total Sum using While Loop: " + sum);
}

function dowhl() {
  const correctPassword = "code123";
  let entered;

  do {
    entered = prompt("Enter the password:");
    if (entered !== correctPassword) {
      alert("❌ Incorrect password! Try again.");
    }
  } while (entered !== correctPassword);

  alert("✅ Access Granted! (Demonstration of Do...While Loop)");
}


function game() {
  let num = Math.floor(Math.random() * 10) + 1;  // hidden number
  let guess = parseInt(prompt("Guess a number between 1 and 10:"));

  while (guess !== num) {
    if (guess < num) {
      guess = parseInt(prompt("Too low! Try a bigger number:"));
    } else if (guess > num) {
      guess = parseInt(prompt("Too high! Try a smaller number:"));
    }

    if (isNaN(guess)) {
      alert("Game ended!");
      return;
    }
  }

  alert("🎉 Correct! You guessed the number " + num + " !");
}

