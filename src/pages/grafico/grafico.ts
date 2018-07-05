import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { VariablesProvider } from '../../providers/variables/variables';

@Component({

    selector: 'page-grafico',
    templateUrl: 'grafico.html',
})
export class GraficoPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;


     constructor(public navCtrl: NavController, private vars : VariablesProvider) {

     }

     ionViewDidLoad() {

       this.lineChart = new Chart(this.lineCanvas.nativeElement, {

           type: 'line',
           data: {
               labels: this.vars.fechas,
               datasets: [
                   {
                       label: "Notas totales",
                       fill: false,
                       lineTension: 0.1,
                       backgroundColor: "rgba(75,192,192,0.4)",
                       borderColor: "rgba(75,192,192,1)",
                       borderCapStyle: 'butt',
                       borderDash: [],
                       borderDashOffset: 0.0,
                       borderJoinStyle: 'miter',
                       pointBorderColor: "rgba(75,192,192,1)",
                       pointBackgroundColor: "#fff",
                       pointBorderWidth: 1,
                       pointHoverRadius: 5,
                       pointHoverBackgroundColor: "rgba(75,192,192,1)",
                       pointHoverBorderColor: "rgba(220,220,220,1)",
                       pointHoverBorderWidth: 2,
                       pointRadius: 1,
                       pointHitRadius: 10,
                       data: this.vars.notas,
                       spanGaps: false,
                   }
               ]
           }

       });

       this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

           type: 'doughnut',
           data: {
               labels: this.vars.fechas,
               datasets: [{
                   label: 'Nota obtenida',
                   data: this.vars.notas,
                   backgroundColor: [
                       'rgba(255, 99, 132, 0.2)',
                       'rgba(54, 162, 235, 0.2)',
                       'rgba(255, 206, 86, 0.2)',
                       'rgba(75, 192, 192, 0.2)',
                       'rgba(153, 102, 255, 0.2)',
                       'rgba(255, 159, 64, 0.2)'
                   ],
                   hoverBackgroundColor: [
                       "#FF6384",
                       "#36A2EB",
                       "#FFCE56",
                       "#FF6384",
                       "#36A2EB",
                       "#FFCE56"
                   ]
               }]
           }

       });

       this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: this.vars.fechas,
                datasets: [{
                    label: 'Nota obtenida',
                    data: this.vars.notas,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });

   }





}
