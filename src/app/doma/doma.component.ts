import { Component, OnInit } from '@angular/core';
import { Doma } from '../models/participantes/doma';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-doma',
  templateUrl: './doma.component.html',
  styleUrls: ['./doma.component.css']
})
export class DomaComponent implements OnInit {
  pdoma: Array<Doma> = []
  domaTmp: any

  constructor(public participanteService: ParticipanteService) { }

  ngOnInit(): void {
  }

  addParticipante(
    id: string,
    nombre: string,
    edad: string,
    nacionalidad: string,
    nivel: string,
    nomCaballo: string,
    raza: string,
    edadCaballo: string,
    cabEstabulado: string,
    parada: string,
    paso: string,
    trote: string,
    galope: string,
    pasoAtras: string,
    transiciones: string,
    cambioDirec: string,
    figuras: string,
    movLateral: string,
    piruetas: string
  ) {
    const idN = Number(id)
    const nombreN = nombre.trim()
    const edadN = Number(edad)
    const nacionalidadN = nacionalidad.trim()
    const nivelN = nivel.trim()
    const nomCaballoN = nomCaballo.trim()
    const razaN = raza.trim()
    const edadCaballoN = Number(edadCaballo)
    const cabEstabuladoN = Boolean(cabEstabulado)
    const paradaN = Number(parada)
    const pasoN = Number(paso)
    const troteN = Number(trote)
    const galopeN = Number(galope)
    const pasoAtrasN = Number(pasoAtras)
    const transicionesN = Number(transiciones)
    const cambioDirecN = Number(cambioDirec)
    const figurasN = Number(figuras)
    const movLateralN = Number(movLateral)
    const piruetasN = Number(piruetas)

    if (
      idN < 0 ||
      edadN < 0 || 
      edadCaballoN < 0 ||
      paradaN < 0 ||
      pasoN <0 ||
      troteN < 0 ||
      galopeN < 0 ||
      pasoAtrasN < 0 ||
      transicionesN < 0 ||
      cambioDirecN < 0 ||
      figurasN < 0 ||
      movLateralN < 0 ||
      piruetasN < 0 
    ) {
      return
    }

    const newParticipante: any = {
      id: idN,
      nombre: nombreN,
      edad: edadN,
      nacionalidad: nacionalidadN,
      nivel: nivelN,
      nomCaballo: nomCaballoN,
      raza: razaN,
      edadCaballo: edadCaballoN,
      cabEstabulado: cabEstabuladoN,
      parada: paradaN,
      paso: pasoN,
      trote: troteN,
      galope: galopeN,
      pasoAtras: pasoAtrasN,
      transiciones: transicionesN,
      cambioDirec: cambioDirecN,
      figuras: figurasN,
      movLateral: movLateralN,
      piruetas: piruetasN,
    }

    this.participanteService.addParticipante(newParticipante).subscribe(n => {
      this.domaTmp = newParticipante;
      this.pdoma.push(this.domaTmp)
    })
  }
}
