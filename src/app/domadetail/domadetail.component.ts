import { Component, OnInit } from '@angular/core';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { Doma } from '../models/participantes/doma';
import { ParticipanteService } from '../participante.service';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-domadetail',
  templateUrl: './domadetail.component.html',
  styleUrls: ['./domadetail.component.css']
})
export class DomadetailComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pDoma: Doma [] = []
  domaApi = null;
  domaTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "white",
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: "Puntuaciones Doma",
      style: {
        fontFamily: "Cambria",
        fontSize: "30px",
        color: "black"
      }
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: "cantidad"
      }
    },

    series: [
      {
        type: "column",
        name: "Parada",
        data: [],
        color: "#38F902"
      },
      {
        type: "column",
        name: "Paso",
        data: [],
        color: "#02F9E1"
      },
      {
        type: "column",
        name: "trote",
        data: [],
        color: "#002CF9"
      },
      {
        type: "column",
        name: "Galope",
        data: [],
        color: "#894ACC"
      },
      {
        type: "column",
        name: "PasoAtras",
        data: [],
        color: "#F900DE"
      },
      {
        type: "column",
        name: "Transiciones",
        data: [],
        color: "#F90202"
      },
      {
        type: "column",
        name: "Direccion",
        data: [],
        color: "#F90202"
      },
      {
        type: "column",
        name: "Figuras",
        data: [],
        color: "#F90202"
      },
      {
        type: "column",
        name: "Mov.Lateral",
        data: [],
        color: "#F90202"
      },
      {
        type: "column",
        name: "Piruetas",
        data: [],
        color: "#F90202"
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "white"
      }
    }
  };

  constructor(public participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes(): void {
    this.participanteService
      .getParticipantes()
      .subscribe(pDoma => {
      this.domaApi = pDoma;

      let grafico = this.pDoma.slice(0, 30);
      /*this.chartOptions.xAxis["categories"] = grafico.map(
        (x: Doma) => x._nombre
      )

      this.chartOptions.series[0]["data"] = grafico.map((x: Doma) => x.parada())

      this.chartOptions.series[1]["data"] = grafico.map((x: Doma) => x.paso())

      this.chartOptions.series[2]["data"] = grafico.map((x: Doma) => x.trote())

      this.chartOptions.series[3]["data"] = grafico.map((x: Doma) => x.galope())

      this.chartOptions.series[4]["data"] = grafico.map((x: Doma) => x.pasoAtras())

      this.chartOptions.series[5]["data"] = grafico.map((x: Doma) => x.transiciones())

      this.chartOptions.series[6]["data"] = grafico.map((x: Doma) => x.cambioDirec())

      this.chartOptions.series[7]["data"] = grafico.map((x: Doma) => x.figuras())

      this.chartOptions.series[8]["data"] = grafico.map((x: Doma) => x.movLateral())

      this.chartOptions.series[9]["data"] = grafico.map((x: Doma) => x.piruetas())*/

      Highcharts.chart("grafico", this.chartOptions);
    })
  }
}
