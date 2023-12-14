

let userId = 1;
let usuarios = []

class usuario{
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre
        this.apellido = apellido 
        this.edad = edad
        this.email = email
        this.id = userId
    }
}
const agregarUsuario = (usuario) => {
    usuarios.push (usuario);
    userId++
};
const eliminarUsuario =(id) => {
    let existe = usuarios.some (usuario => usuario.id === id);
    
    if (existe) {
        usuarios =usuarios.filter (usuario => usuario.id !== id);
    }else{
        alert("no existe ningun usuario con este ID")
    }
    
};
const mostarUsuarios = () => {
    let nombreUsuarios = usuarios.map (usuario => `ID:${usuario.id} - nombre:${usuario.nombre}`);
    if(usuarios.length > 0){
        alert(nombreUsuarios.join("\n"));
    } else{
        alert("no hay usuarios registrados");
    }
};

const menuUsuarios = () => {
    let encendido = true;
    while (encendido) {
        
     let opcion = parseInt(
        prompt(
            `
            Bienvenidos al menu de usuarios!
            1-mostrar los usuarios
            2- agregar usuario
            3- eliminar usuario
            4-volver
            `
        )
      );
     switch (opcion) {
        case 1:
            mostarUsuarios();
            break;
        case 2:
            let nombre = prompt("Ingrese el nombre del usuario");
            let apellido = prompt ("Ingrese el apellido del ususario");
            let edad = prompt ("Ingrese la edad del usuario");
            let email = prompt ("Ingrese el email del ususario");

            let nuevoUsuario = {
                nombre:nombre,
                apellido:apellido,
                edad:edad,
                email:email,
                id:userId,
            };
            agregarUsuario (nuevoUsuario);
            break;
        case 3:
        let idUsuario=parseInt(prompt("ingrese el id del usuario a eliminar"))
            eliminarUsuario(idUsuario)
            break;
        case 4:
            encendido = false;
            menuPrincipal();
            break;
    
        default:
            alert("ingrese una ocpcion valida");
            break;
        }
    }
}
let encendido =true
const menuPrincipal =() => {

    

    while (encendido){
        let opcion=parseInt (
            prompt(
                `
                Bienvenido, registrate aqui!
                1-opcion usuario
                2-opcion salir
    
                `
            )

        );
        switch(opcion) {
            case 1:
            menuUsuarios();
                break;
            case 2:
                encendido = false;
                break;           
        
            default:
                alert("ingrese una ocpcion valida");
                break;
        }
    }
}

menuPrincipal ()


