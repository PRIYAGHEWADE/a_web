import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

//foodDetails

foodDetails = [
  {
    id:1,
    foodName:"Paneer Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer.",
    foodPrice:200,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
  },
  {
    id:2,
    foodName:"Veggie Supreme",
    foodDetails:"Onion| Green Capsicum|Mushroom |Black olies , Sweet corn, Red Paprika topped with Cheese",
    foodPrice:200,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
  },
  {
    id:3,
    foodName:"Paneer Burger",
    foodDetails:" paneer.",
    foodPrice:149,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
  },
  {
    id:4,
    foodName:"Veg Masala RollIn Naan",
    foodDetails:"A homely mix of mashed potato and veggies, seasoned with India spices. A filling sure to take you back to mom's kitchen.",
    foodPrice:140,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
  },
  {
    id:5,
    foodName:"Indulgence Brownie",
    foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love anf topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    foodPrice:105,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
  },
  {
    id:6,
    foodName:"Oreo cheesecake Ice Cream",
    foodDetails:"Oreo ice cream.",
    foodPrice:219,
    foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
  }

]


}
