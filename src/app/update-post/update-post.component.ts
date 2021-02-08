import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  formulaire: any;
  titre: string | null | undefined;
  listFormModified: any;
  postModified: any;

  constructor(private route :ActivatedRoute , private service1:UpdateService) { }

  ngOnInit(): void {
    this.formulaire = JSON.parse(localStorage.getItem('formulaire') || '{}')
    this.titre = this.route.snapshot.paramMap.get('titre');

    this.listFormModified = new FormGroup({
      titre: new FormControl(this.formulaire.titre),
       description: new FormControl(this.formulaire.description),
       categorie: new FormControl(this.formulaire.categorie),
       date: new FormControl(this.formulaire.date),
      });

  }
  

  }
 
