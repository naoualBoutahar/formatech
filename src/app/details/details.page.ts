import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
courses: Observable<any[]>;
  constructor(private modalController:ModalController, public firestore: AngularFirestore) { 
        this.courses = firestore.collection('courses').valueChanges();
      }

closeModal(){
  this.modalController.dismiss();
}

  ngOnInit() {
  }

}
