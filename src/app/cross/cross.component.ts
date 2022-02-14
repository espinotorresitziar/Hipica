import { Component, OnInit } from '@angular/core';
import { Cross } from '../models/participantes/cross';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.css']
})
export class CrossComponent implements OnInit {
  pcross: Array<Cross> = []
  crossTmp: any

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
    TLimiteC: string,
    rehusoC: string,
    caidaC: string,
    tiempoC: string
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
    const TLimiteCN = Number(TLimiteC)
    const rehusoCN = Number(rehusoC)
    const caidaCN = Number(caidaC)
    const tiempoCN = Number(tiempoC)

    if (
      idN < 0 ||
      edadN < 0 || 
      edadCaballoN < 0 ||
      TLimiteCN < 0 ||
      rehusoCN < 0 ||
      caidaCN < 0 ||
      tiempoCN < 0
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
      TLimiteC: TLimiteCN,
      rehusoC: rehusoCN,
      caidaC: caidaCN,
      tiempoC: TLimiteCN
    }

    this.participanteService.addParticipante(newParticipante).subscribe(n => {
      this.crossTmp = newParticipante;
      this.pcross.push(this.crossTmp)
    })
  }
  

}
