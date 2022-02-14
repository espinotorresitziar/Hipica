import { Component, OnInit } from '@angular/core';
  import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
  import { Doma } from '../models/participantes/doma';
  import { ParticipanteService } from '../participante.service';
  import * as Highcharts from "highcharts";
import { Cross } from '../models/participantes/cross';

@Component({
  selector: 'app-crossdetail',
  templateUrl: './crossdetail.component.html',
  styleUrls: ['./crossdetail.component.css']
})
export class CrossdetailComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    pCross: Cross [] = []
    crossApi = null;
    crosTmp: any;
  
    chartOptions: Highcharts.Options = {
      chart: {
        type: "column",
        backgroundColor: "white",
        borderRadius: 80,
        spacing: [20, 20, 20, 20]
      },
      title: {
        text: "Penalizaciones Cross",
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
          name: "Rehuso",
          data: [],
          color: "#38F902"
        },
        {
          type: "column",
          name: "Caida",
          data: [],
          color: "#02F9E1"
        },
        {
          type: "column",
          name: "Tiempo",
          data: [],
          color: "#002CF9"
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
        .subscribe(pCross => {
        this.crossApi = pCross;
  
        let grafico = this.pCross.slice(0, 30);
        /*this.chartOptions.xAxis["categories"] = grafico.map(
          (x: Cross) => x._nombre
        )
  
        this.chartOptions.series[0]["data"] = grafico.map((x: Cross) => x.rehuso())
  
        this.chartOptions.series[1]["data"] = grafico.map((x: Cross) => x.caida())
  
        this.chartOptions.series[2]["data"] = grafico.map((x: Cross) => x.tiempo())*/
  
        Highcharts.chart("grafico2", this.chartOptions);
      })
    }
  }