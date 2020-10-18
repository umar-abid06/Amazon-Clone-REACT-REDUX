import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* Product id,title,price,rating,image */}
            <div className="home__row">

            <Product
            id="12321341" 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SY445_QL70_ML2_.jpg"
            />
             <Product
            id="123765341" 
            title="Google Pixel 4"
            price={56.86}
            rating={4}
            image=" https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4-r1.jpg"
            />
            </div>
            <div className="home__row">

<Product
id="92321341" 
title="Smart watch"
price={25.25}
rating={4}
image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
/>
 <Product
id="67321222" 
title="Alexa AI speaker"
price={110.99}
rating={3}
image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
/>
<Product
id="4455341" 
title="Black T-shirt with blue spiderman logo"
price={4}
rating={5}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1rr7-LdgTxdL_1ICzlD1lMwHLgLSgxl3PgQ&usqp=CAU"
/>
</div>
  <div className="home__row">
  <Product
id="12320987" 
title="Apple Macbook"
price={1006}
rating={5}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzccRR_zAHF7y-eJlYFS5msnWI7pOkn68MCw&usqp=CAU"
/>
</div>
            {/* Product */}
        </div>
    )
}

export default Home

