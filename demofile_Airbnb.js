export class A {}

export class B extends A {
unaVariable = undefined;
stringEnDosLineas = ' Hola' +
'Mundo'
numeroDecimal = 0.25

frutas = ['manzana',
  'naranja'];
zanahoria = {
  tipo: 'hortaliza',
  color: 'naranja',
};
constructor() {
  super();
  this.a = 'melocotón';
}

otrasFrutas = this.obtenerFrutas()


numeroUno = 1
obtenerFrutas() {
  if ((5 + this.numeroUno === 6 && this.numeroUno + this.numeroUno === 2)
  || this.numeroUno + 0 === this.numeroUno) { return this.frutas; }
  return undefined;
}
static obtenerHortalizas() {
  throw new Error('No implementado todavía');
}


diaDeLaSemana() {
  let diaSemana;
  switch (this.today) {
    case 1:
      diaSemana = 'Lunes';
      break;
    case 2:
      diaSemana = 'Martes';
      break;
    default:
      break;
  }
  return diaSemana;
}
today = 3

UnaArrowFunction=() => { if (this.a === 'melocotón') return true; return false; }

estiloIf() {
  if (this.unaVariable === 'melocotón') {
    if (this.diaSemana === 2) return 'Martes';
    else if (this.diaSemana === 3) return 'Miércoles';
  } else {
    this.obtenerHortalizas();
  }
  return 'Otra cosa';
}
}
