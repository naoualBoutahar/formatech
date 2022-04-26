import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  courses: Observable<any[]>;
    constructor(public firestore: AngularFirestore) {
      this.courses = firestore.collection('courses').valueChanges();
    }
  
  ngOnInit() {
  }

}
