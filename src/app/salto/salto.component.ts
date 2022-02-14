import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participante } from '../models/participantes/participante';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-salto',
  templateUrl: './salto.component.html',
  styleUrls: ['./salto.component.css']
})
export class SaltoComponent implements OnInit {
  pSalto: Array<Participante> = []
  saltoTmp: any

  constructor(
    public participanteService: ParticipanteService
  ) {}

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
    TLimiteS: string,
    derriboS: string,
    rehusoS: string,
    caidaS: string,
    tiempoS: string
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
    const TLimiteSN = Number(TLimiteS)
    const derriboSN = Number(derriboS)
    const rehusoSN = Number(rehusoS)
    const caidaSN = Number(caidaS)
    const tiempoSN = Number(tiempoS)

    if (
      idN < 0 ||
      edadN < 0 || 
      edadCaballoN < 0 ||
      TLimiteSN < 0 ||
      derriboSN <0 ||
      rehusoSN < 0 ||
      caidaSN < 0 ||
      tiempoSN < 0
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
      TLimiteS: TLimiteSN,
      derriboS: derriboSN,
      rehusoS: rehusoSN,
      caidaS: caidaSN,
      tiempoS: TLimiteSN
    }

    this.participanteService.addParticipante(newParticipante).subscribe(n => {
      this.saltoTmp = newParticipante;
      this.pSalto.push(this.saltoTmp)
    })
  }

}
