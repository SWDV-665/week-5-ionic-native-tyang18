import { Component } from '@angular/core';
import { ToastController, NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //New code added:
  title = "Grocery Lists"; //title variable to be used

  

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService, public socialSharing: SocialSharing ) {}

  loadItems(){
    return this.dataService.getItems();
  }

  async removeItem(item, index){
    console.log("Removing Item -", item, index);
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async shareItem(item, index){
    console.log("Sharing Item -", item, index);
    const toast = await this.toastController.create({
      message: 'Sharing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    
    let message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!")
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing ", error)
    });
  }

  addItem(){
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }

  async editItem(item, index){
    console.log("Edit Item -", item, index);
    const toast = await this.toastController.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

}
