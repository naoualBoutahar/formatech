import { ChangeDetectorRef, Component ,ViewChild, ElementRef} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Course } from '../../services/data.service';
import {DetailsPage } from '../details/details.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CartService } from '../../services/cart.service';
import { CartModalPage } from '../../pages/cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';
 

 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  courses: Course[] = [];
  cart = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

 
  constructor(private cartService: CartService,private router:Router,private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getCourses().subscribe(res => {
      this.courses = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  async openCart() {
 
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      
    });
    modal.present();
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