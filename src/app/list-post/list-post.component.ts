import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  formulaire :any
  constructor() { }

  ngOnInit(): void {
   this.formulaire = JSON.parse(localStorage.getItem('formulaire') || '{}')

  }
  delete (i: any) {
    this.formulaire.splice(i, 1)
    localStorage.setItem('formulaire', JSON.stringify(this.formulaire));

   }


}
