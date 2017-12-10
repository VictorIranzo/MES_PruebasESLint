export class A{}

export class B extends A{
unaVariable = undefined;
stringEnDosLineas = " Hola \
Mundo"
numeroDecimal = .25

frutas = ["manzana"
, "naranja"];
zanahoria = {
    tipo: "hortaliza",
    color: 'naranja',
};
constructor(){
    super();
    this.a = 'melocotón'
}

otrasFrutas = this.obtenerFrutas()


numeroUno = 1
obtenerFrutas(){
if(5+this.numeroUno==6&&2==this.numeroUno+this.numeroUno||this.numeroUno+0===this.numeroUno || 'z'==='z')
return this.frutas;
else return undefined;
}
obtenerHortalizas(){
throw 'No implementado todavía';
}



diaDeLaSemana(){
    let diaSemana;
    switch(this.today){
        case 1:
        diaSemana="Lunes";
        break;
        case 2:
        diaSemana="Martes";
    }
    return diaSemana;
}
today = 3

UnaArrowFunction=()=>{if("melocotón"===this.a) return true}

estiloIf(){
    if(this.unaVariable == "melocotón"){
        if(this.diaSemana==2)return "Martes";
        else if(this.diaSemana == 3) return "Miércoles";
    } 
    else{
        this.obtenerHortalizas();
    }
    return "Otra cosa";
}
}







