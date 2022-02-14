import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
  niveles: Array<Nivel> = []
  nivelTmp: any

  constructor(public nivelService: NivelService) { }

  ngOnInit(): void {
  }

  addNivel(
    id: string,
    tipoNivel: string,
    aficionado: string,
    limiteEdad: string,
    inscripcion: string
  ) {
    const idN = Number(id)
    const tipoNivelN = tipoNivel.trim()
    const aficionadoN = Boolean(aficionado)
    const limiteEdadN = Number(limiteEdad)
    const inscripcionN = Number(inscripcion)
  
    if (
      idN < 0 ||
      limiteEdadN < 0 ||
      inscripcionN < 0 
    ) {
      return
    }

    const newNivel: any = {
      id: idN,
      tipoNivel: tipoNivelN,
      aficionado: aficionadoN,
      limiteEdad: limiteEdadN,
      inscripcion: inscripcionN
    }

    this.nivelService.addNivel(newNivel).subscribe(n => {
      this.nivelTmp = newNivel;
      this.niveles.push(this.nivelTmp)
    })
  }
}
