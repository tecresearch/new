import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }


    addToCartItem=(index)=>{
         const caritem=[...this.state.cart.items];
         const product=[...this.state.products]
          
          
         const itemtobeAdded=product[index];
          
            itemtobeAdded.cartQuantity=1;

          console.log(itemtobeAdded);
          
        this.setState({
              cart:{
                 items:[...caritem,itemtobeAdded]
              }
        })
    }

    increseItem=(id)=>{
         
          const caritem=[...this.state.cart.items];
         

          const updatedItem=caritem.map((item)=>{
                if(item.id===id){
                    item.cartQuantity+=1;
                }

                return item;
          })
           
       this.setState({
                cart:{
                 items:[...updatedItem]
              }
       });    

    }

    decrementItem=(id)=>{
            const caritem=[...this.state.cart.items];
         
           
             let flage=false;
          const updatedItem=caritem.map((item)=>{
                if(item.id===id){

                      if(item.cartQuantity>0)
                        item.cartQuantity-=1;

                     if(item.cartQuantity===0){
                         
                          flage=true;
                     }
                }

                return item;
          })

         
        const data=flage?updatedItem.filter((item)=>item.id!==id):updatedItem;
         
       this.setState({
                cart:{
                 items:[...data]
              }
       });    
    }

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products}
                               addToCartItem={this.addToCartItem}
                               cart={this.state.cart.items}
                               increseItem={this.increseItem}
                               decrementItem={this.decrementItem}
                    />
                    <Cart  cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
