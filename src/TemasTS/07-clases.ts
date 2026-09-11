class Persona {
    edad:number
    nombre:string

    constructor(nombre:string, edad:number){
        this.nombre=nombre
        this.edad=edad
    }

    imprimir (){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}
let persona:persona
persona=new Persona("Mario", 22)
persona.imprimir()
