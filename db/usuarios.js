/* Inicializacion de Base de Datos de Usuarios */

export const usuarios = [{id:1, user: "Franco", pass:"123456", admin:true,},];

JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios" , JSON.stringify(usuarios));
