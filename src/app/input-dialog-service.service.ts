import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public dataService: GroceriesServiceService, public alertController: AlertController) {
    console.log("Hello InputDialogService Provider");
   }




  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      header: item? 'Edit Item' : 'Add Item',
      message: item? 'Please edit item...' : "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item? item.name : null
        },
        {
          name: 'quantity',
          value: item? item.quantity : null,
          placeholder: 'Quantity'
        }
      ],
      
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined){
              this.dataService.editItem(item, index);
            }
            else{
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
