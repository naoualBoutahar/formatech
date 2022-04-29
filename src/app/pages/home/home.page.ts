import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Course } from '../../services/data.service';
import {DetailsPage } from '../details/details.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  courses: Course[] = [];
 
  constructor(private router:Router,private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getCourses().subscribe(res => {
      this.courses = res;
      this.cd.detectChanges();
    });
  }
 
  
 
  async openCourse(course: Course) {
    const modal = await this.modalCtrl.create({
      component: DetailsPage,
      componentProps: { id: course.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
      // this.modalController.create({component:DetailsPage}).then((modalElement)=>{
     // modalElement.present();

    });
 
    await modal.present();
  }



  showProfile(){
    this.router.navigate(['/profile']);

  }
}