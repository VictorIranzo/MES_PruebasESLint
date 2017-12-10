/**
 * The B class
 * @return {B} Object of class B.
 */
export class B {
frutas = ['manzana',
'naranja'];
zanahoria = {
    tipo: 'hortaliza',
    color: 'naranja',
};
numeroUno = 1
/**
 * Method that returns the frutas array
 * @return {string} Something.
 */
obtenerFrutas() {
if (5+this.numeroUno==6&&2==this.numeroUno+this.numeroUno
    ||this.numeroUno+0===this.numeroUno || 'z'==='z') {
return this.frutas;
} else return undefined;
    return 'Imposible alcanzar este código';
}
/**
 * Method that returns the hortalizas array
 */
obtenerHortalizas() {
throw new Error('No implementado todavía');
}
/**
 * Method that returns the day of the week
 * @param {number} x The first number.
 * @param {number} y The second number.
 * @param {number} z The third number.
 * @return {string} Something.
 */
diaDeLaSemana(x, y, z) {
    let diaSemana;
    switch (this.today) {
        case 1:
        diaSemana='Lunes';
        case 2:
        diaSemana='Martes';
    }
    return diaSemana;
}
UnaArrowFunction=()=>{
if ('melocotón'===a) return true;
}
/**
 * Method that returns the day of the week
 * @return {string} Something.
 */
estiloIf() {
    if (this.unaVariable == 'melocotón') {
        if (this.diaSemana==2) return 'Martes';
        else if (this.diaSemana == 3) return 'Miércoles';
    } else {
        this.obtenerHortalizas();
    }
    return 'Otra cosa';
}
}


