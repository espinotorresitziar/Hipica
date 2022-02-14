import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { Doma } from '../models/participantes/doma';
import { Salto } from '../models/participantes/salto';
import { Cross } from '../models/participantes/cross';
import { ParticipanteService } from '../participante.service';


@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  doma: Doma[] = []
  salto: Salto[] = []
  cross: Cross[] = []

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'container'
    },

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        type: 'bar',
        name: 'Doma',
        data: []
    }, {
      type: 'bar',
      name: 'Cross',
      data: []
    }, {
      type: 'bar',
      name: 'Salto',
      data: []
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};

  constructor() { }

  ngOnInit(): void {
  }
}
