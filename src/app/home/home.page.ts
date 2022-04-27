import { DetailsPage } from './../details/details.page';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { ModalController } from '@ionic/angular';
import { DetailsPageModule } from '../details/details.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  courses: Observable<any[]>;
    constructor(public firestore: AngularFirestore ,private modalController: ModalController) {
      this.courses = firestore.collection('courses').valueChanges();
    }
  
  openModal(){
    this.modalController.create({component:DetailsPage}).then((modalElement)=>{
      modalElement.present();
  })

  }

  ngOnInit() {
  }

}
