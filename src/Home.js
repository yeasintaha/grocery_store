import React from 'react'
import './Home.css';
import ProductList from './ProductList';
import Product from './Product'
import Header from "./Header"
import {all_items} from "./all_items"
import Footer from './Footer';



function Home() {
    return (
    <div>
      <Header/>
      <div className="home">
          <img
            className="home__image"
            src="logo_banner\online_store1.jpg"
          />

          <div className="home__row ">
            <ProductList all_items = {all_items}/>
            {/* <Product
              id="1"
              product_name="Banana"
              price={60}
              unit = {"1 dozen"}
              image = "Images\Banana.png"
            />
            <Product
              id="2"
              product_name="Coke"
              price={70}
              unit = {"1 L"}            
              image = "Images\Coke.png"
            />

            <Product
              id="3"
              product_name="Bringal"
              price = {60}
              unit={"1 kg"}
              image = "Images\Bringal.png"
            />
            <Product
              id="4"
              product_name="Sprite"
              price={65}
              unit={"1 L"}
              image="Images\Sprite.png"
            />
            <Product
              id="5"
              product_name="Egg"
              price={110}
              unit={"1 dozen"}
              image="Images\Egg.png"
            />

            <Product
              id="6"
              product_name="Vegetables"
              price={50}
              unit ={"1 kg"}
              image="Images\vegetables.jpg"
            />
            
            <Product
              id="7"
              product_name="Rupchada Soyabin Oil"
              price={210}
              unit ={"2 L"}
              image="Images\Rupchada Soyabin Oil.png"
            />
            <Product
              id="8"
              product_name="Ginger"
              price={50}
              unit ={"1 kg"}
              image="Images\Ginger.jpg"
            />
            <Product
              id="9"
              product_name="Potato"
              price={50}
              unit ={"1 kg"}
              image="Images\potato.png"
            /><Product
              id="10"
              product_name="Sprite"
              price={110}
              unit ={"2 L"}
              image="Images\Sprite_2L.png"
            /> */}

          </div>

      </div>
        <Footer/>
    </div>
  );
}

export default Home;
