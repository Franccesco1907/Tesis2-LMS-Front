import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as Materialize from '../../../assets/js/materialize.min.js';
import { News } from '../../model/news';
import { NewsDialogComponent } from '../dialog/news/news.component';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];
  options:Object;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.options = {
      padding: 10,
      numVisible: 5,
      fullWidth: true
    };

    this.news = [
      { 
        title: "Se creo un curso nuevo de seguridad y salud en el trabajo", 
        body: `Es deber de los empleadores velar por la seguridad y la salud de sus trabajadores mediante la prevención de riesgos laborales, evitando que se produzcan enfermedades, incidentes o accidentes de trabajo que afecten la vida o integridad de los trabajadores.`,
        date: new Date().toLocaleString(),
        category: "news"
      },
      { 
        title: "Uso de equipos de protección personal", 
        body: `El Equipo de Protección Personal o EPP son equipos, piezas o dispositivos que evitan que una persona tenga contacto directo con los peligros de ambientes riesgosos, los cuales pueden generar lesiones y enfermedades.`,
        date: new Date().toLocaleString(),
        category: "news"
      },
      { 
        title: "Elizabeth Warren after TMZ catches her sprinting to catch train: 'Try and keep up'", 
        body: `Senate Majority Leader Mitch McConnell (R-Ky.) on Monday blocked a resolution calling for special counsel Robert Mueller's report to be released publicly. 

        Senate Minority Leader Charles Schumer (D-N.Y.) asked for unanimous consent for the nonbinding resolution, which cleared the House 420-0, to be passed by the Senate following Mueller's submission of his final report on Friday. `,
        date: new Date().toLocaleString(),
        category: "news"
      }
    ]
    
  
  }

  ngAfterViewInit(){
    const elems = document.querySelectorAll('.carousel');
    const instances = Materialize.Carousel.init(elems, this.options);

    // const indicators= document.querySelector(".indicators");
    // indicators.setAttribute('class', 'indicators');

    // console.log(indicators)
  }

  popup(news: News){
    const dialogRef = this.dialog.open(NewsDialogComponent, {
      width: '80%',
      data: news
    });
  }


}
