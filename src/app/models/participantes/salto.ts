import { Participante } from '../participantes/participante';

export class Salto extends Participante {
  public _totalSaltos: number;
  public _maxAltura: number;
  public _TLimiteS: number;
  public _sPenalizaciones: {
    _derriboS: number;
    _rehusoS: number;
    _caidaS: number;
    _tiempoS: number;
  };

  public constructor(
    id: number,
    nombre: string,
    edad: Number,
    nacionalidad: string,
    nivel: string,
    nomCaballo: string,
    raza: string,
    edadCaballo: number,
    cabEstabulado: boolean,
    totalSaltos: number,
    maxAltura: number,
    TLimiteS: number,
    sPenalizaciones: {
      _derriboS: number;
      _rehusoS: number;
      _caidaS: number;
      _tiempoS: number;
    }
  ) {
    super(
      id,
      nombre,
      edad,
      nacionalidad,
      nivel,
      nomCaballo,
      raza,
      edadCaballo,
      cabEstabulado
    );
    this._totalSaltos = totalSaltos;
    this._maxAltura = maxAltura;
    this._TLimiteS = TLimiteS;
    this._sPenalizaciones = sPenalizaciones;
  }

  get totalSaltos() {
    return this._totalSaltos;
  }
  get maxAltura() {
    return this._maxAltura;
  }
  get TLimiteS() {
    return this._TLimiteS;
  }
  get sPenalizaciones() {
    return this._sPenalizaciones;
  }

  penalizaSalto() {
    return (
      'Derribo: ' + this._sPenalizaciones._derriboS,
      'Rehuso: ' + this._sPenalizaciones._rehusoS,
      'Caida: ' + this._sPenalizaciones._caidaS,
      'Tiempo: ' + this._sPenalizaciones._tiempoS
    );
  }

  derribo() {
    let derribo = 0
    derribo = this._sPenalizaciones._derriboS * 4
    return derribo
  }

  rehuso() {
    let rehuso = 0
    if (this._sPenalizaciones._rehusoS == 1) {
      rehuso = this._sPenalizaciones._rehusoS*3
    } else if (this._sPenalizaciones._rehusoS == 2){
      rehuso = this._sPenalizaciones._rehusoS*6
    } else if (this._sPenalizaciones._rehusoS == 3){
      rehuso = this._sPenalizaciones._rehusoS*9
    }
    return rehuso
  }

  caida() {
    let caida = 0
    if (this._sPenalizaciones._caidaS == 1) {
      caida = this._sPenalizaciones._caidaS*8
    } else if (this._sPenalizaciones._caidaS == 2) {
      caida = this._sPenalizaciones._caidaS*16
    }
    return caida
  }

  tiempo() {
    let tiempo = 0
    if (this._sPenalizaciones._tiempoS > this._TLimiteS ) {
      tiempo = this._sPenalizaciones._tiempoS*1
    }
    return tiempo
  }

  totalPenalizaS() { 
  }
}
