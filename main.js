function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="">
    <strong>${hour}</strong>
    <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="">
  </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                   ${games}
                </ul>
            </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="logo">
  </header>
  <main id="cards">
    ${createCard(
      "24/11",
      "Quinta",
      createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
    )}
  </main>
`
