function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("24/11", "Quinta", createGame("switzerland", "07:00", "cameroon"))
