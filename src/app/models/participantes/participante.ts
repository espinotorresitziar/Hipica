export class Participante {
    public _id: number;
    public _nombre: string;
    public _edad: Number;
    public _nacionalidad: string;
    public _nivel: string;
    public _nomCaballo: string;
    public _raza: string;
    public _edadCaballo: number;
    public _cabEstabulado: boolean;
  
    public constructor(
      id: number,
      nombre: string,
      edad: Number,
      nacionalidad: string,
      nivel: string,
      nomCaballo: string,
      raza: string,
      edadCaballo: number,
      cabEstabulado: boolean
    ) {
      (this._id = id),
        (this._nombre = nombre),
        (this._edad = edad),
        (this._nacionalidad = nacionalidad),
        (this._nivel = nivel),
        (this._nomCaballo = nomCaballo),
        (this._raza = raza),
        (this._edadCaballo = edadCaballo),
        (this._cabEstabulado = cabEstabulado);
    }
  
    get id() {
      return this._id;
    }
    get nombre() {
      return this._nombre;
    }
    get edad() {
      return this._edad;
    }
    get nacionalidad() {
      return this._nacionalidad;
    }
    get nivel() {
      return this._nivel;
    }
    get nomCaballo() {
      return this._nomCaballo;
    }
    get raza() {
      return this._raza;
    }
    get edadCaballo() {
      return this._edadCaballo;
    }
    get cabEstabulado() {
      return this._cabEstabulado;
    }
  }
  