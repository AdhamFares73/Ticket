import { Component , ViewChild} from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "إستخدم",
          data: [150, 180, 130, 170, 200, 210, 190, 250, 240, 210, 218, 237]
        }
      ],
      chart: {
        height: 350,
        fontFamily: 'Neo Sans Arabic Regular',
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: true,
          tools: {
            download: false 
          }
        }
      },
      fill: {
        colors: ["#0000ff"],
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          opacityFrom: 0.8,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        row: {
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "يناير",
          "فبراير",
          "مارس",
          "ابريل",
          "مايو",
          "يونيو",
          "يوليو",
          "اغسطس",
          "سبتمبر",
          "اكتوبر",
          "نوفمبر",
          "ديسمبر"
        ],
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    };
  }

    time:any[] = ["سنويا " , "شهريا " , "يوميا"]

    selectedCity = this.time[0];

    ngOnInit() {
       
    }
}
