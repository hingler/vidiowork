(function() {

  window.addEventListener("load", main);

  let studentNames = [
    "Petra Chaney",
    "Agnes Macdonald",
    "Jerry Oneill",
    "Titus Lam",
    "Colette Houston",
    "Jarrod Trevino",
    "Joann Love",
    "Aron Jenkins",
    "Alexandra Kelley",
    "Mervin Rivas",
    "Becky Burton",
    "Ryan Fitzgerald",
    "Muriel Lucero",
    "Lina Zavala",
    "Cassie Davies",
    "Linda Leonard",
    "Mindy Suarez",
    "Willy Beard",
    "Lou Mcgee",
    "Darrick Cooke",
    "Darlene Whitney",
    "Chas Carey",
    "Kaitlin Livingston",
    "Valarie Hull",
    "Natasha Jensen",
    "Iris Mitchell",
    "Manuela Hines",
    "Shayne Cuevas",
    "Laverne Pugh",
    "Tobias Prince",
    "Jacob Russo",
    "Cheryl Kirk",
    "Edison Mendez",
    "Angelica Benson",
    "Quinton Dyer",
    "Norma Landry",
    "Felix Oconnell",
    "Malinda Burns",
    "Michel Harper",
    "Dewayne Mccann",
    "Jaclyn Fleming",
    "Marcie Dean",
    "Mauricio Newton",
    "Cliff Sandoval",
    "Marquis Salinas",
    "Valentin Short",
    "Otto Wise",
    "Goldie Bender",
    "Arlene Khan",
    "Maynard Stokes"
  ]

  const WITHDRAWN_NAMES = [
    "Milana Landino",
    "Jeron Farhart",
    "Hugh Davies",
    "Alicia Vandenberg",
    "Willow Nyman"
  ]

  function main() {
    studentNames.push(...WITHDRAWN_NAMES);
    // shuffles are bad
    studentNames = studentNames.sort((a, b) => Math.random() >= 0.5);
    studentNames = studentNames.sort((a, b) => Math.random() >= 0.5);
    studentNames = studentNames.sort((a, b) => Math.random() >= 0.5);
    let studentList = document.getElementById("students-list");
    for (let name of studentNames) {
      let splitName = name.split(' ');
      let commaName = splitName[1] + ", " + splitName[0];
      let studentId = Math.floor(Math.random() * 900000) + 100000;
      let studentGrade = (Math.floor(Math.pow(Math.random(), 0.6) * 3000 + 7000) / 100).toPrecision(4);

      let tableRow = document.createElement("tr");
      
      let nameCell = document.createElement("td");
      let idCell = document.createElement("td");
      let gradeCell = document.createElement("td");
      let enrollCell = document.createElement("td");

      nameCell.textContent = commaName;
      idCell.textContent = studentId.toString(10);
      gradeCell.textContent = studentGrade;
      if (WITHDRAWN_NAMES.includes(name)) {
        enrollCell.textContent = "WITHDRAWN";
        enrollCell.classList.add("student-withdrawn");
        let button = document.createElement("button");
        button.textContent = "More Info";
        enrollCell.appendChild(button);
        button.addEventListener("click", buttonClick);
      } else {
        enrollCell.textContent = "ENROLLED";
        enrollCell.classList.add("student-enrolled");
      }
      tableRow.appendChild(nameCell);
      tableRow.appendChild(idCell);
      tableRow.appendChild(gradeCell);
      tableRow.appendChild(enrollCell);

      studentList.appendChild(tableRow);
    }
  }

  function buttonClick() {
    alert("Further information not available.");
  }

})();