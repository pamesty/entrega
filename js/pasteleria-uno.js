/*
El cliente tiene una empresa de pastelería y quiere contar con una herramienta para mandar saludos. 
Dependiendo de la empresa que le compra al cliente, él les manda una carta de agradecimiento; sin 
embargo, hay empresas que son muy formales y otras donde la formalidad está visto como algo obsoleto. 
Entonces necesita saber, teniendo el nombre de la empresa,qué frase tiene que utilizar.
Requerimientos

*Hacer un programa que tenga precargados hasta 3 nombres y saludos de empresas y en base 
a un nombre que ingrese el usuario, elija el saludo correspondiente y lo devuelva por el 
navegador.
  
*En el caso de que el usuario ingrese el nombre de una empresa que no exista, se debe 
pedir una confirmación para verificar si ese nombre realmente existe o no. Si el nombre 
es correcto, se debe devolver un saludo genérico, y en caso de que sea incorrecto, volver 
a pedirlo.  


Tips
-Para preguntar al usuario una pregunta de sí o no, como en una confirmación, podemos 
utilizar confirm() que activa una ventana en el navegador con las opciones "Aceptar" 
o "Cancelar".Cuando el usuario responde, confirm() devolverá un booleano con el valor 
correspondiente: false si respondió cancelar y true si se aceptó la pregunta.Toma 
como primer parámetro la pregunta que queremos hacer al usuario.

Ejemplo
let userConfirm = confirm("Are you sure?");
console.log(userConfirm);
*/


// Si el nombre de la empresa es Empresa formal (empresa === "EMPRESA FORMAL") el saludo debe ser formal
// Si el nombre de la empresa es Empresa Semiformal (empresa === "EMPRESA SEMIFORMAL") el saludo no será muy formal
// Si el nombre de la empresa es Empresa Informal ((empresa === "EMPRESA INFORMAL") el saludo será informal

let empresaBandera = false;
let empresa = prompt(`Hola, indique el nombre de su empresa`);

empresa = empresa.trim();
empresa = empresa.toUpperCase();

do {
    switch (empresa) {
        case "EMPRESA FORMAL":
            alert(`Saludos cordiales ${empresa}, gracias por adquirir nuestros productos.`);
            empresaBandera = true;
            break;
            
        case "EMPRESA SEMIFORMAL":
            alert(`Hola, gracias confiable cliente de ${empresa}, por visitarnos esperemos verte de nuevo muy pronto`);
            empresaBandera = true;
            break;
        
        case "EMPRESA INFORMAL":
            alert(`Hola, que bueno tenerte de vuelta ${empresa}, gracias a vos por siempre apoyarnos`);
            empresaBandera = true;
            break;
        
        default:
            empresaBandera = false;
            break;
        }
    
    
    if (empresaBandera === false) {
        let existe = confirm(`Disculpe, está seguro que el nombre de ${empresa} existe?`);
    
        if (existe === true) {
            alert (`Por favor diríjase al counter para ser agregado a nuestra lista de clientes`);
            empresaBandera = true;
        } else {
            empresa = prompt(`Hola, indique el nombre de su empresa`);
        }
    }
    
} while (empresaBandera === false)