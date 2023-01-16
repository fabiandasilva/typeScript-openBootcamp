//Esto es un comentario en TS

console.log("Esto es un segundo comentario")

// Declaración de Variables:
let nombre: string ="Fabián"
let email: string ="fabian.da.silva@hotmail.com"

console.log("Hola "+ nombre+ " tu correo es " + email);

const PI: number = 3.1416

let apellidos: string = "Da Silva"
 
let error: boolean = false

error =  true
console.log(error)

//Instaciación múltiple de variables
let a:string, b:boolean,c:number;
a= "Saludos"
b=true
c= 23

console.log(a,b,c)

//Types: number, string, boolean, void, null y undefined

//Tipos más complejos
//Lista de cadenas de texto
let listaTareas: string[]=["tarea 1","tarea 2"];

//Combinación de tipos en listas
let valores: (string | number | boolean)[] =[false, "Hola", true, 56]

//Enumerados
enum Estados{
    "completado" = "C",
    "incompleto" = "I",
    "pendiente" = "P"
}

enum PuestoCarrera{
    "Primero"=1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.completado
let puestoMaraton = PuestoCarrera.Segundo

//Interfaces 
interface Tarea{
nombre:string,
estado:Estados,
urgencia:number
}

//Podemos crear variables que sigan la interface tarea

let tarea1:Tarea={
    nombre:"tarea1",
    estado:Estados.pendiente,
    urgencia:10
}

//Types de TypeCript

type Producto = {
    precio: number,
    nombre: string,
    año: number
}

let coche: Producto ={
    nombre:"Audi",
    precio:400, 
    año: 2012
}

console.log(coche.año <2010 ? `${coche.nombre} es viejo`:`${coche.nombre} es nuevo`)