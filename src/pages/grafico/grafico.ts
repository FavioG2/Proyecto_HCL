import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { VariablesProvider } from '../../providers/variables/variables';

@Component({

    selector: 'page-grafico',
    templateUrl: 'grafico.html',
})
export class GraficoPage {

    @ViewChild('lineCanvas') lineCanvas;

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

   }


}
