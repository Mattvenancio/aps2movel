import { MoviesService } from './../theMovieDB/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MoviesService]
})
export class Tab2Page {

  constructor(public movieService:MoviesService){}
  
  public lista_filmes = new Array<any>();

ionViewDidEnter() {
  this.carregaPagina();
}

  carregaPagina () {
    this.movieService.getPopularMovies(1, 'pt').subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = this.lista_filmes.concat(response.results);
        console.log(this.lista_filmes);
      },
      error => {
        console.log(error);
      }
    )
  }

}
