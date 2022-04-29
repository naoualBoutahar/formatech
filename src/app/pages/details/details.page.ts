import { Component, Input, OnInit } from '@angular/core';
import { Course, DataService } from '../../services/data.service';
import { ModalController, ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input() id: string;
  course: Course = null;
 
  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }
  closeModal() { this.modalCtrl.dismiss(); }
  ngOnInit() {
    this.dataService.getCourseById(this.id).subscribe(res => {
      this.course = res;
    });
  }
 
  
}