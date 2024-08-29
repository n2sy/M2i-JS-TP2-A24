let allCourses = [
  {
    titre: "Javascript",
    niveau: "débutant",
    votes: 0,
  },
  {
    titre: "Php",
    niveau: "intermédiaire",
    votes: 0,
  },
];

let codeAinserer = "";

for (const course of allCourses) {
  codeAinserer = codeAinserer.concat(
    `<ul>
        <li>${course.titre}</li>
        <li>${course.niveau}</li>
        <li>${course.votes}</li>
        <button onclick="updateVotes()">👍</button>
        </ul>`
  );
}
document.getElementById("cours").innerHTML = codeAinserer;

function updateVotes() {
  console.log("Vote incrémenté");
}
