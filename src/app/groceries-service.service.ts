import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  constructor() {
    console.log("Hello GroceriesServiceProvider Provider");
  }

  items = [

  ]

  // {
  //   name: "Milk",
  //   quantity: 2
  // },
  // {
  //   name: "Bread",
  //   quantity: 1
  // },
  // {
  //   name: "Banana",
  //   quantity: 3
  // },
  // {
  //   name: "Sugar",
  //   quantity: 1
  // }

  getItems(){
    return this.items;
  }

  removeItem(index){
    this.items.splice(index, 1);
  }


  addItem(item){
    this.items.push(item);
  }


  editItem(item, index){
    this.items[index] = item;
  }
}
