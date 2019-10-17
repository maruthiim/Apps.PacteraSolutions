import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "right"
    }
  };
  public pieChartLabels: Label[] = ['Self Creation', 'Created by others'];
  public pieChartData: SingleDataSet = [12, 48];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [{ backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"] }];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: "right"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }]
    }
  };

  public mbarChartLabels: string[] = ['Status'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors = [
    { backgroundColor: ["#e84351"] },
    { backgroundColor: ["#434a54"] },
    { backgroundColor: ["#3ebf9b"] },
    { backgroundColor: ["#4d86dc"] },
    { backgroundColor: ["#f3af37"] }
  ];
  public barChartData: any[] = [
    { data: [15], label: 'Initial Draft' },
    { data: [25], label: 'Initial Review' },
    { data: [40], label: 'Review Solution' },
    { data: [45], label: 'Proposal Review' },
    { data: [35], label: 'Delivery' },
  ];

  public chartType: string = 'doughnut';
  public chartLabels: Array<string> = ['Jan', 'Feb', 'Mar'];
  public chartData: Array<number> = [1, 1, 1];
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "right"
    }
  };
  public chartColors: Array<any> = [{ backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"] }];

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Success Proposals' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "right"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 20
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'lightgray',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  

  constructor() { }

  ngOnInit() {
  }

}
