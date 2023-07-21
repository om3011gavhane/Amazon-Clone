import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/Herotator-22/Kitchen_3000x1200_PC-citi-July._CB634387124_.jpg"/>
            <div className='home__row'>
              <Product title="Kore PVC 10-40 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories" price={1299} image="https://m.media-amazon.com/images/I/81XNzjmXi+L._SX679_.jpg" rating={3}/>
              <Product title="MuscleBlaze 100% Whey Protein, Ultra Premium Whey Blend (Rich Milk Chocolate, 1 kg / 2.2 lb, 30 Servings)" price={2699} image="https://m.media-amazon.com/images/I/612Cs7-cFTL._SX679_.jpg" rating={4}/> 
            </div>

            <div className='home__row'>
              <Product title="Apple iPhone 13 (128GB) - Midnight" price={72990} image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg" rating={5}/>
              <Product title="Apple iPhone 13 (128GB) - Starlight" price={72990} image="https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg" rating={5}/>
              <Product title="Apple iPhone 13 (128GB) - Blue" price={72990} image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg" rating={4}/>
            </div>

            <div className='home__row'>
              <Product title="Aparios Decorative Hexagonal MDF Floating Wall Shelves/Wall Shelf /Wall Shelf for Home Decor/for Kitchen/for Living Room/Home Decoration/Wall Decoration/Wall Decor/Book Shelf/Set of 6 (Orange Brown) Original by APARIOS®" price={1899} image="https://m.media-amazon.com/images/I/71CKU16foLL._SX679_.jpg" rating={4}/>
              <Product title="BM Wood Furniture™ Solid Sheesham Wood U Shaped Wall Shelves Floating Racks for Living Room | Wooden Wall Shelves for Bedroom | Solid Wood Wall Shelves | (Brown) |" price={1149} image="https://m.media-amazon.com/images/I/81zzoWGt+qL._SX679_.jpg" rating={4}/>
            </div>

            <div className='home__row'>
              <Product title="Puma RS-Z Multi FS" price={9990} image="https://m.media-amazon.com/images/I/51R4rCjKI4L._UY695_.jpg" rating={5}/>
              <Product title="Puma Unisex-Adult Ralph Sampson Vulc Sneakers Leather" price={2150} image="https://m.media-amazon.com/images/I/71BAFKLhfeL._UX695_.jpg" rating={4}/>
              <Product title="Adidas Men's Cricup 21 Shoes" price={2565} image="https://m.media-amazon.com/images/I/715sVMlOFuL._UX695_.jpg" rating={4}/>
              <Product title="Puma Unisex-Adult Rs-Fast Neon Sneaker" price={3854} image="https://m.media-amazon.com/images/I/71pb+MMyEPL._UX695_.jpg" rating={5}/>
            </div>

            <div className='home__row'>
              <Product title="Bellaxia Highball Glasses Tall Drinking Glasses 350ML Cocktail Glass Set Lead-Free Crystal Glassware." price={199} image="https://m.media-amazon.com/images/I/31OrhlKPTmL.jpg" rating={1}/>
              <Product title="ATC Enterprise Wine Decanter - 1500 ml Hand Blown Lead-Free Crystal Glass - Red Wine Carafe - Wine Gift - Wine Accessories" price={999} image="https://m.media-amazon.com/images/I/51QaedulJxL.jpg" rating={3}/>
              <Product title="VIMICI Crystal Tall Highball Glasses Set for Drinking Water, Soda , Fresh Juice, Beer, Wine, Whiskey. Crystal Highball Glass" price={296} image="https://m.media-amazon.com/images/I/71F+Yls8enL._SX679_.jpg" rating={2}/>
              <Product title="JASMEY Homes | Ceramic Coffee Mugs Set | Floral Motif Design, 300 ml, Microwave Dishawasher Safe" price={299} image="https://m.media-amazon.com/images/I/71-zuOGQDAL._SL1500_.jpg" rating={4}/>
              <Product title="Seedlings India Stoneware Dinner Set - Set of 12, Multicolour" price={3599} image="https://m.media-amazon.com/images/I/51zTn5mJIOL.jpg" rating={5}/>
            </div>
        </div>
    </div>
  );
};

export default Home