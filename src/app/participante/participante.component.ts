import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participantes/participante';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {
  participante: Array<Participante> = []
  participanteTmp: any

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
    cabEstabulado: string
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

    if (
      idN < 0 ||
      edadN < 0 || 
      edadCaballoN < 0 
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
      cabEstabulado: cabEstabuladoN
    }

    this.participanteService.addParticipante(newParticipante).subscribe(n => {
      this.participanteTmp = newParticipante;
      this.participante.push(this.participanteTmp)
    })
  }
}
