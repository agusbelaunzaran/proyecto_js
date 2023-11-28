const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    
    let respuesta = prompt (pregunta)
    
    while ( respuesta !== "verdadero" && respuesta !== "falso"){
        alert("Respuesta no valida, debe contestar verdadero o falso!");
        respuesta = prompt(pregunta)
    }
    if(respuesta === respuestaCorrecta){
        alert("Respuesta correcta");
    } else{
        alert("Respuesta incorrecta");
    }
}
for (let i= 0; i<= 3; i++) {
    let pregunta;
    let respuestaCorrecta;
   
    switch (i){
        case 1: 
        pregunta ="Responde verdadero o falso... En casa es aconsejable colocar cinco cestos para separar basura.";
        respuestaCorrecta = "verdadero"
        chequeoRespuesta (respuestaCorrecta, pregunta)
        break;
        case 2: 
        pregunta ="Responde verdadero o falso... Las lamparitas, los vidrios rotos y los espejos se pueden reciclar.";
        respuestaCorrecta = "falso"
         chequeoRespuesta (respuestaCorrecta, pregunta)
        
        break;
        case 3: 
        pregunta ="Responde verdadero o falso... En las bolsas negras va la basura reciclable, en las verdes, orgánica";
        respuestaCorrecta = "falso"
          chequeoRespuesta (respuestaCorrecta, pregunta)
        break;
        default: alert("Preguntas de verfadero o falso sobre el reciclaje!")
    }
}