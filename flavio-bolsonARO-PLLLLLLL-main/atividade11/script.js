function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();

    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`;

    if(min >= 11 && min <=20){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                            <img src="memelixo.jpeg">`

    }






}