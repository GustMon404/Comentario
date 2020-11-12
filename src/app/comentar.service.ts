import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from './comentario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarService {
  private comentarios = null;
  private novoId = 1;
  
  constructor(private http: HttpClient) {
   }

   carregarDados(callback){
     this.http.get('https://lpweb-microblog.herokuapp.com/api/textos/')
     .subscribe(comentarios => this.comentarios = comentarios).add(callback);
   }

   todos(): Array<Comentario>{
     return this.comentarios;
   }

   /*salvar(id: number, comentario:string){
     if(id){
       let comentario
     }
   }*/
}
