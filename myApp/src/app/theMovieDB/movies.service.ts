import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private chave="942e4e208b7ed39802b653d17b029a95";
  private caminhoPadrao ="https://api.themoviedb.org/3";

  constructor(public http: HttpClient) { }

  public getPopularMovies(page=1, language="pt"){
    let filmes=`${this.caminhoPadrao}/movie/popular?page=${page}&language=${language}&api_key=${this.chave}`
   console.log(filmes);
    return this.http.get(filmes);
  }
}
