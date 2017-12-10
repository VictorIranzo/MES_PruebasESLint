export class B{
frutas = ["manzana"
, "naranja"];
zanahoria = {
    tipo: "hortaliza",
    color: 'naranja',
};
numeroUno = 1
obtenerFrutas(){
if(5+this.numeroUno==6&&2==this.numeroUno+this.numeroUno||this.numeroUno+0===this.numeroUno || 'z'==='z')
return this.frutas;
else return undefined;
    return 'Imposible alcanzar este código';
}
obtenerHortalizas(){
throw 'No implementado todavía';
}
diaDeLaSemana(x,y,z){
    let diaSemana;
    switch(this.today){
        case 1:
        diaSemana="Lunes";
        case 2:
        diaSemana="Martes";
    }
    return diaSemana;
}
UnaArrowFunction=()=>{if("melocotón"===this.a) return true}
estiloIf(){
    if(this.unaVariable == "melocotón"){
        if(this.diaSemana==2)return "Martes";
    } 
    else{
        this.obtenerHortalizas();
    }
    return "Otra cosa";
}
}







