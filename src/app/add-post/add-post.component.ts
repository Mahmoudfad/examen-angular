import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  formulaire : any[]=[];
  
  constructor() { }

  ngOnInit(): void {
    
  }
  listForm :any= new FormGroup({
    titre: new FormControl('',),
     description: new FormControl('',),
     categorie: new FormControl('',),
     date: new FormControl('',),
     
  
   });

  onSubmit(){

    console.log(this.listForm.value);
    this.formulaire.push(this.listForm.value)
   localStorage.setItem('formulaire', JSON.stringify(this.formulaire));
   }
}
