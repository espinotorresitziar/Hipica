import { Participante } from '../participantes/participante';

export class Cross extends Participante {
  public _TLimiteC: number;
  public _cPenalizaciones: {
    _rehusoC: number;
    _caidaC: number;
    _tiempoC: number;
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
    TLimiteC: number,
    cPenalizaciones: {
      _rehusoC: number;
      _caidaC: number;
      _tiempoC: number;
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
    this._TLimiteC = TLimiteC;
    this._cPenalizaciones = cPenalizaciones;
  }

  get TLimiteC() {
    return this._TLimiteC;
  }
  get cPenalizaciones() {
    return this._cPenalizaciones;
  }

  penalizaCross() {
    'Rehuso: ' + this._cPenalizaciones._rehusoC,
      'Caida: ' + this._cPenalizaciones._caidaC,
      'Tiempo: ' + this._cPenalizaciones._tiempoC;
  }

  rehuso() {
    let rehuso = 0
    if (this._cPenalizaciones._rehusoC == 1) {
      rehuso = this._cPenalizaciones._rehusoC*10
    } else if (this._cPenalizaciones._rehusoC == 2){
      rehuso = this._cPenalizaciones._rehusoC*20
    } else if (this._cPenalizaciones._rehusoC == 3){
      rehuso = this._cPenalizaciones._rehusoC*30
    }
    return rehuso
  }

  caida() {
    let caida = 0
    if (this._cPenalizaciones._caidaC == 1) {
      caida = this._cPenalizaciones._caidaC*30
    } else if (this._cPenalizaciones._caidaC == 2) {
      caida = this._cPenalizaciones._caidaC*60
    }
    return caida
  }

  tiempo() {
    let tiempo = 0
    if (this._cPenalizaciones._tiempoC > this._TLimiteC ) {
      tiempo = this._cPenalizaciones._tiempoC*1
    }
    return tiempo
  }

  totalPenalizaS() {
  }
}
