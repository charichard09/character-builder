window.addEventListener("load", function() {
  const form = document.getElementById("character-name");
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    let name = document.getElementById("input-name").value;
    let class1 = document.querySelector("input[name='class']:checked").value;
    /*let classTxt = document.getElementsByName("class").value;*/
    document.getElementById("name").innerText = name; 
    document.getElementById("charClass").innerText = class1; 
    roll();

  });
});

function roll() {
  document.getElementById("strVal").innerHTML = Math.floor(Math.random() * 21);
  document.getElementById("chVal").innerHTML = Math.floor(Math.random() * 21);
  document.getElementById("intVal").innerHTML = Math.floor(Math.random() * 21);
}
