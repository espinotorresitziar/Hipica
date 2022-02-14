import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nivel-detail',
  templateUrl: './niveldetail.component.html',
  styleUrls: ['./niveldetail.component.css'],
})
export class NivelDetailComponent implements OnInit {
  nivel: any
  nivelApi = null;
  nivelTmp: any

  constructor(
    private route: ActivatedRoute,
    public nivelService: NivelService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getNivel();
  }

  getNivel(): void {
    const tipoNivel = this.route.snapshot.paramMap.get('_tipoNivel')!;
    this.nivelService.getNivel(tipoNivel).subscribe(n => {
      this.nivelTmp = n;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.nivelService.updateNivel(this.nivelTmp).subscribe(() => this.goBack());
  }
}

