let select = document.getElementById("country");
let inp = document.getElementById("capital");

let paysMap = new Map();
paysMap.set("France", "Paris");
paysMap.set("Japon", "Tokyo");
paysMap.set("Allemagne", "Berlin");

select.addEventListener("change", () => {
  if (!paysMap.has(select.value)) inp.value = "Aucune...";
  else {
    let capitale = paysMap.get(select.value);
    inp.value = capitale;
  }
});
