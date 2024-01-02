function addUser(){
   jugador1_nombre = document.getElementById("jugador1_entrada").value;
   jugador2_nombre = document.getElementById("jugador2_entrada").value;

   localStorage.setItem("jugador1_nombre");
   localStorage.setItem("jugador2_nombre");
   window.location = "game_page.html";
}
