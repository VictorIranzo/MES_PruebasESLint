export class B {
  frutas = ['manzana',
    'naranja'];
  zanahoria = {
    tipo: 'hortaliza',
    color: 'naranja'
  };
  numeroUno = 1
  obtenerFrutas () {
    if ((5 + this.numeroUno === 6 && this.numeroUno + this.numeroUno === 2) || this.numeroUno + 0 === this.numeroUno) { return this.frutas } else return undefined
  }
  obtenerHortalizas () {
    throw new Error('No implementado todavía')
  }
  diaDeLaSemana (x, y, z) {
    let diaSemana
    switch (this.today) {
      case 1:
        diaSemana = 'Lunes'
        break
      case 2:
        diaSemana = 'Martes'
    }
    return diaSemana
  }
  UnaArrowFunction=() => { if (this.a === 'melocotón') return true }
  estiloIf () {
    if (this.unaVariable == 'melocotón') {
      if (this.diaSemana == 2) return 'Martes'
    } else {
      this.obtenerHortalizas()
    }
    return 'Otra cosa'
  }
}
