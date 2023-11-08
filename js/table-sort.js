// locate the table:
const tab = document.querySelector("#bhangra");


populateTable(arr = artists);




const nameButton = document.querySelector("#name-button");
const birthButton = document.querySelector("#date-button");
const randomizeButton = document.querySelector("#random-button");


nameButton.addEventListener("click", sortByName);
birthButton.addEventListener("click", sortByBirthYear);
randomizeButton.addEventListener("click", randomizeOrder);


function sortByName() {
  let sortedArray = arr.sort((a, b) => a.name > b.name ? 1 : -1);
  populateTable(sortedArray);
}


function sortByBirthYear() {
  let sortedArray = arr.sort((a, b) => a.birthYear - b.birthYear);
  populateTable(sortedArray);
}


function randomizeOrder() {
  let shuffledArray = arr.sort(() => Math.random() - 0.5);
  populateTable(shuffledArray);
}


function populateTable(arr) {
  let contents = "<tbody>";
  contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;
  arr.forEach(artist => {
    contents += "<tr>";
    contents += `<td>${artist.name}</td>`;
    contents += `<td>${artist.birthYear}</td>`;
    contents += `<td><a href="${artist.link}" target="_blank">${artist.link}</a></td>`;
    contents += "</tr>";
  });
  contents += "</tbody>";
  tab.innerHTML = contents;
}
