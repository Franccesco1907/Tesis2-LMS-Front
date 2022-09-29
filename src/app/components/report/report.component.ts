import { Component, OnInit } from '@angular/core';
import { SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  pieChartLabels: string[];
  pieChartData: SingleDataSet;
  chartType: ChartType = "pie";
  pieChartLegend = true;
  cgpa: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.loggedInUser().position == 'student'){
      //fetch cgpa
      this.cgpa = "18";
      this.pieChartLabels= [ "Cursos","Cuestionarios", "Asignaciones"];
      this.pieChartData = [6, 3, 5];

    }else{
      this.pieChartLabels= [ "Cursos", "Estudiantes", "Cuestionarios", "Asignaciones"];
      this.pieChartData = [3, 10, 23, 10];
    }
  }

  chartHovered( $event): void{

  }

  chartClicked( $event): void{

  }
}
