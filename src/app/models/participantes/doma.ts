import { Participante } from '../participantes/participante';

export class Doma extends Participante {
  public _dPuntuaciones: {
    _parada: number;
    _paso: number;
    _trote: number;
    _galope: number;
    _pasoAtras: number;
    _transiciones: number;
    _cambioDirec: number;
    _figuras: number;
    _movLateral: number;
    _piruetas: number;
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
    dPuntuaciones: {
      _parada: number;
      _paso: number;
      _trote: number;
      _galope: number;
      _pasoAtras: number;
      _transiciones: number;
      _cambioDirec: number;
      _figuras: number;
      _movLateral: number;
      _piruetas: number;
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
    this._dPuntuaciones = dPuntuaciones;
  }

  get dPuntuaciones() {
    return this._dPuntuaciones;
  }

  parada() {
    return this._dPuntuaciones._parada
  }
  paso() {
    return this._dPuntuaciones._paso
  }
  trote() {
    return this._dPuntuaciones._trote
  }
  galope() {
    return this._dPuntuaciones._galope
  }
  pasoAtras() {
    return this._dPuntuaciones._pasoAtras
  }
  transiciones() {
    return this._dPuntuaciones._transiciones
  }
  cambioDirec() {
    return this._dPuntuaciones._cambioDirec
  }
  figuras() {
    return this._dPuntuaciones._figuras
  }
  movLateral() {
    return this._dPuntuaciones._movLateral
  }
  piruetas() {
    return this._dPuntuaciones._piruetas
  }

  puntuacionDoma() {
    'Parada: ' + this._dPuntuaciones._parada,
      'Paso: ' + this._dPuntuaciones._paso,
      'Trote: ' + this._dPuntuaciones._trote,
      'Galope: ' + this._dPuntuaciones._galope,
      'Paso Atrás: ' + this._dPuntuaciones._pasoAtras,
      'Transiciones: ' + this._dPuntuaciones._transiciones,
      'Cambio Dirección: ' + this._dPuntuaciones._cambioDirec,
      'Figuras: ' + this._dPuntuaciones._figuras,
      'Movimiento Lateral: ' + this._dPuntuaciones._movLateral,
      'Piruetas: ' + this._dPuntuaciones._piruetas;
  }

  totalPuntuaD() {
    let totPunD = 0;
    totPunD =
      this._dPuntuaciones._parada +
      this._dPuntuaciones._paso +
      this._dPuntuaciones._trote +
      this._dPuntuaciones._galope +
      this._dPuntuaciones._pasoAtras +
      this._dPuntuaciones._transiciones +
      this._dPuntuaciones._cambioDirec +
      this._dPuntuaciones._figuras +
      this._dPuntuaciones._movLateral +
      this._dPuntuaciones._piruetas;
    return totPunD;
  }

  totalPenalizaD() {
    let totPenD = 100;
  }
}
