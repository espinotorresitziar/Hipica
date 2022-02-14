import { Participante } from '../participantes/participante';

export class Nivel {
  public _id: number;
  public _tipoNivel: string;
  public _aficionado: boolean;
  public _limiteEdad: number;
  public _inscripcion: number;
  public _participantes: Array<Participante>;

  public constructor(
    id: number,
    tipoNivel: string,
    aficionado: boolean,
    limiteEdad: number,
    inscripcion: number,
    participantes: Array<Participante>
  ) {
    (this._id = id),
      (this._tipoNivel = tipoNivel),
      (this._aficionado = aficionado),
      (this._limiteEdad = limiteEdad),
      (this._inscripcion = inscripcion);
    (this._participantes = participantes);
  }

  get id() {
    return this._id;
  }
  get tipoNivel() {
    return this._tipoNivel;
  }
  get aficionado() {
    return this._aficionado;
  }
  get limiteEdad() {
    return this._limiteEdad;
  }
  get inscripcion() {
    return this._inscripcion;
  }
  get participantes() {
    return this._participantes;
  }

  pago() {
    return this.inscripcion;
  }
}
