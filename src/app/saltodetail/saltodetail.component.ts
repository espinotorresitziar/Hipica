import { Component, OnInit } from '@angular/core'; import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { Doma } from '../models/participantes/doma';
import { ParticipanteService } from '../participante.service';
import * as Highcharts from "highcharts";
import { Cross } from '../models/participantes/cross';
import { Salto } from '../models/participantes/salto';

@Component({
  selector: 'app-saltodetail',
  templateUrl: './saltodetail.component.html',
  styleUrls: ['./saltodetail.component.css']
})
export class SaltodetailComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    pSalto: Salto [] = []
    saltoApi = null;
    saltoTmp: any;
  
    chartOptions: Highcharts.Options = {
      chart: {
        type: "column",
        backgroundColor: "white",
        borderRadius: 80,
        spacing: [20, 20, 20, 20]
      },
      title: {
        text: "Penalizaciones Salto",
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
          name: "Derribo",
          data: [],
          color: "#38F902"
        },
        {
          type: "column",
          name: "Rehuso",
          data: [],
          color: "#02F9E1"
        },
        {
          type: "column",
          name: "Caida",
          data: [],
          color: "#002CF9"
        },
        {
          type: "column",
          name: "Tiempo",
          data: [],
          color: "#894ACC"
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
        .subscribe(pSalto => {
        this.saltoApi = pSalto;
  
        let grafico = this.pSalto.slice(0, 30);
        /*this.chartOptions.xAxis["categories"] = grafico.map(
          (x: Salto) => x._nombre
        )
  
        this.chartOptions.series[0]["data"] = grafico.map((x: Salto) => x.derribo())
  
        this.chartOptions.series[1]["data"] = grafico.map((x: Salto) => x.rehuso())
  
        this.chartOptions.series[2]["data"] = grafico.map((x: Salto) => x.caida())
  
        this.chartOptions.series[3]["data"] = grafico.map((x: Salto) => x.tiempo())*/
  
        Highcharts.chart("grafico3", this.chartOptions);
      })
    }

}
