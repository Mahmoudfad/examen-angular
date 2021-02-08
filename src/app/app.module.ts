import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { RouterModule } from '@angular/router';
import appRoutes from 'routerConfig';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
