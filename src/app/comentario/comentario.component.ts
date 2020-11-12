import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() comentarios= []

  @Output() like_comentario = new EventEmitter<any>();

  like(comentario){
    this.like_comentario.emit(comentario)
  }
}
