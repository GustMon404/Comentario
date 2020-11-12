import { Component, OnInit } from '@angular/core';
import { ComentarService } from '../comentar.service';
import { Comentario } from '../comentario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  comentario = null

  editar_comentario: Comentario;
  comentarios= []

  id_coment = 0

  constructor(private comentarioService: ComentarService) {
    this.comentarios = this.comentarioService.todos();
   }

  ngOnInit(): void {
  }



  salvar(){
    const coment = new Comentario(this.id_coment, this.comentario, false)
    this.id_coment ++
    this.comentario = null

    this.comentarios.push(coment)
  }

  like(comentario){
    comentario.like = !comentario.like
  }

}
