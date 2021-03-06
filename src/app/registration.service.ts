import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie";
import { UserRegistration } from "./user-registration";
@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  private _url: string = "http://localhost:8080/api/v1/getAllMovies";
  private _url1: string = "http://172.23.238.222:8080/api/v1/user";
  private omdbUrl: string = "http://www.omdbapi.com/?s=";
  private apiKey: string = "&apikey=6db283eb";
  private _url2: string = "http://localhost:8080/api/v1/deleteMovie/";
  private _url3:string = "http://www.omdbapi.com/?s=batman&apikey=6db283eb";
  constructor(private http: HttpClient) {}

  saveMovie(user: UserRegistration): Observable<UserRegistration> {
    //let headers = new Headers({ "Content-Type": "application/json" });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<UserRegistration>(this._url1, user);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._url);
  }

  getMovieOmdb(title: string) {
    let url = `${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }

  deleteMovie(id) {
    return this.http.delete(this._url2 + id);
  }

  defaultLoad(){
    return this.http.get(this._url3);
  }
}