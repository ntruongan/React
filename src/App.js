import React, {Component} from 'react';
import Header from './components/header.js'
import Dial from './components/dial_pad.js'
import Product from './components/product.js'
class Demo extends Component{

  onAddProduct = () => {
    alert(this.refs.name.value);
    console.log(this.refs.name.value);
  };

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + '-' +
          this.s4() + '-' +
          this.s4() + '-' +
          this.s4();
  }




  render(){
    localStorage.setItem('id', this.generateID());
    var products = [
      {
        id : 1,
        name : 'IP',
        price : '12 000 000',
        status : true,
        img : "https://cdn.fptshop.com.vn/Uploads/Originals/2020/12/17/637437951489370946_samsung-a12-xanh-dd.png"
      },
      {
        id : 2,
        name : 'SS1',
        price : '12 000 000',
        status : true,
        img : "https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg"
      },
      {
        id : 3,
        name : 'SS3',
        price : '12 000 000',
        status : true,
        img : "https://didongviet.vn/pub/media/catalog/product//v/s/vsmart-joy-4-4gb-64gb_1.jpg"
      },
      {
        id : 4,
        name : 'SS4',
        price : '12 200 000',
        status : false,
        img : "https://didongviet.vn/pub/media/catalog/product//v/s/vsmart-joy-4-4gb-64gb_1.jpg"
      }
    ]

    let elements = products.map((products, index) => {
        let result = ''
        if (products.status){
                  result =  <Product 
                            key = { products.id }
                            name = { products.name }
                            img = { products.img }
                            price = { products.price }
                          >
                          </Product>
        }
        return result

    });

    return(
        <div>
          <Header/>
          <div>
            <Dial></Dial>>
          </div>
          
        </div>  
      );
  }
}


export default Demo;
