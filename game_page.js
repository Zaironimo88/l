jugador1_nombre = locationSorge.getItem("jugador1_nombre");
jugador2_nombre = locationSorge.getItem("jugador2_nombre");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_nombre+":";
document.getElementById("player2_name").innerHTML = player2_nombre+":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("jugador_pregunta").innerHTML="Turno de preguntar:"+player1_nombre;
document.getElementById("jugador_respuesta").innerHTML="Turno de respuesta:"+player2_nombre;

function enviar()
{
get_word = document.getElementById("palabra").value;
palabra = get_word.tolowerCase();

chardAt1 = word.chardAt(1);
length_devide_2 = Math.floor(word.length/2);
chardAt2 = word.chardAt(length_devide_2);
length_minus = word.length-1;
charAt3 = word.chardAt(length_minus);

remove_chardAt1 = word.replace(charAt1,"_");
remove_chardAt2 = word.replace(charAt2,"_");
remove_chardAt3 = word.replace(charAt3,"_");
}

