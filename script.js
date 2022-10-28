let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let no_of_clicks = 0;
let score = 0;
let gift = 3,
  bomb = 1;
  miss = 5;

function gameOver(isBomb) {
  box1.removeEventListener("click", clickHandler);
  box1.style.display = "none";

  message = document.createElement("p");
  message.innerHTML = isBomb ? "Better Luck next time!" : "You won";
  clicks = document.createElement("p");
  clicks.innerHTML = `Number of Clicks: ${no_of_clicks}`;
  score = document.createElement("p");
  score.innerHTML = `Your score: ${isBomb ? 0 : 13 - no_of_clicks}/10`;

  button = document.createElement("button");
  button.addEventListener("click", () => location.reload());
  button.innerHTML = "replay game";

  box2.appendChild(clicks);
  box2.appendChild(score);
  box2.appendChild(message);
  box2.appendChild(button);
}

function clickHandler(e) {
  if (gift) {
    if (!e.target.innerHTML) {
      if (gift && Math.floor(Math.random() * 2)) {
        e.target.innerHTML = "🎁";
        e.target.style.fontSize = "9rem";
        gift--;
        if (gift == 0) setTimeout(() => gameOver(), 400);
      } else if (bomb && Math.floor(Math.random() * 2)) {
        e.target.innerHTML = "💣";
        e.target.style.fontSize = "9rem";
        bomb--;
        setTimeout(() => gameOver(true), 400);
      } else if (miss) {
        e.target.innerHTML = "MISS";
        e.target.style.fontSize="2rem";
        miss--;
      } else {
        if (gift) {
          e.target.innerHTML = "🎁";
          e.target.style.fontSize = "8rem";
          gift--;
        } else {
          e.target.innerHTML = "💣";
          e.target.style.fontSize = "8rem";
          bomb--;
        }
      }
      no_of_clicks++;
    } else {
      alert("already clicked!");
    }
  } else {
    gameOver();
  }
}

box1.addEventListener("click", (e) => clickHandler(e));
