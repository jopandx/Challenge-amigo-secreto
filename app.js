
const const_lis = [];

function  agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const Nombre_Amigo = inputAmigo.value.trim();
    
    // 
    if (Nombre_Amigo == "") {
        alert("Revisa tu campo porfavor."); // Validad si el campo esta vacio
        return;
    }
    //

    //
    if (const_lis.includes(Nombre_Amigo)) {
        alert(`Este nombre '${Nombre_Amigo}' ya esta registrado!`); // validacion de nombres
        return;
    }
    //
    
    // 
    const_lis.push(Nombre_Amigo); //lista
    atualizarconst_lis();
    //
    // 
    inputAmigo.value = ""; // clear
    //
}

function atualizarconst_lis() {
    const listaAmigosElement = document.getElementById("listaAmigos"); // libera espacio en lista
    listaAmigosElement.innerHTML = ""; 
    
    const_lis.forEach((amigo) => {
        const i = document.createElement("i");
        i.textContent = amigo;
        listaAmigosElement.appendChild(i);
    });
}

function sortearAmigo() {
    if (const_lis.length == 0) {
        alert("No existen datos para poder realizarlo.");
        return;
    }
    
    const sorteo = Math.floor(Math.random() * const_lis.length);
    const amigoSorteado = const_lis[sorteo];
    
    // 
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`; // fin del juego
    //
}