// import logo from './logo.svg';
import './App.css';
import './style.css'
import FlurOutfittersSmallWeb from './assets/img/FlurOutfittersSmallWeb.png'


function App() {
  return (
    <div>
    <head>
  <link rel="stylesheet" href="style.css" />
  <title>Ecommerce Website</title>
</head>

<body>
  <div class="header">
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <a href="index.html"><img src={FlurOutfittersSmallWeb} alt="FLURStore" width="125px" /></a>
        </div>
        <nav>
          
          <ul id="MenuItems">
            <li><a class="hvr-outline-out" href="index.html">Home</a></li>
            <li><a class="hvr-outline-out"href="product.html">Products</a></li>
           <li><a class="hvr-outline-out"href="/">About</a></li>
            <li><a class="hvr-outline-out"href="/">Contact</a></li>
            <li><a class="hvr-outline-out"href="account.html">Account</a></li>

          </ul>
         
        </nav>
        <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
        <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" class="menu-icon" onclick="menutoggle()" />
      </div>
      <div class="row">
        <div class="col-2">
          <h1>
            Give Your Workout <br />
            A New Style!
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency.
            Consistent <br />hard work gains success. Greatness will come.
          </p>
          <a href="/" target="_blank" rel="noopener noreferrer" class="btn">Explore Now &#8594;</a>
        </div>
        <div class="col-2">
          <img src="https://i.ibb.co/QpTmdX5/image1.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Featured categories --> */}
  <div class="categories">
    <div class="small-container">
      <div class="row">
        <div class="col-3">
          <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt="" />
        </div>
        <div class="col-3">
          <img src="https://i.ibb.co/GCJLQRQ/category-2.jpg" alt="" />
        </div>
        <div class="col-3">
          <img src="https://i.ibb.co/wYsXqP5/category-3.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Featured products --> */}
  <div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" /></a>
        <a href="product_details.html">
          <h4>Puma Printed T-shirt</h4>
        </a>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$50.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" /></a>
        <h4>Athletic Running Shoes</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$100.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" /></a>
        <h4>Athletic Jogger Pants</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <p>$50.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" /></a>
        <h4>Puma Athletic Polo</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$500.00</p>
      </div>
    </div>
    <h2 id="latest" class="title">Latest Products</h2>
    <div class="row">
      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt="" /></a>
        <h4>High-top Sneakers</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$120.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt="" /></a>
        <h4>Puma Logo T-shirt</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$50.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="" /></a>
        <h4>3 pack Ankle High Socks</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <p>$30.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt="" /></a>
        <h4>Anniversary Fossil Fashion Watch</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$300.00</p>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt="" /></a>
        <h4>Casual Roadster Watch</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$250.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt="" /></a>
        <h4>Puma Top Gear Running Shoes</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$130.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt="" /></a>
        <h4>Puma Slip-on Shoes</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <p>$500.00</p>
      </div>

      <div class="col-4">
        <a href="product_details.html"><img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt="" /></a>
        <h4>Nike Flex Running Jogger Pants</h4>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>$500.00</p>
      </div>
    </div>
  </div>
  {/* <!-- offer --> */}
  <div class="offer">
    <div class="small-container">
      <div class="row">
        <div class="col-2">
          <img src="https://i.ibb.co/HF5TncZ/exclusive.png" alt="" class="offer-img" />
        </div>
        <div class="col-2">
          <p>Exclusively Available on FLURStore</p>
          <h1>Smart Band 4</h1>
          <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
            AMOLED color full-touch display with adjustable brightness, so
            everything is clear as can be.</small>
          <br />
          <a href="/" class="btn">Buy Now &#8594;</a>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Testimonial --> */}
  <div class="testimonial">
    <div class="small-container">
      <div class="row">
        <div class="col-3">
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quae molestias error id est voluptatibus quos amet
            numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
            eaque soluta quas modi.
          </p>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <img src="https://i.ibb.co/zfXD2Tx/user-1.png" alt="" />
          <h3>Marta W.</h3>
        </div>

        <div class="col-3">
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quae molestias error id est voluptatibus quos amet
            numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
            eaque soluta quas modi.
          </p>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <img src="https://i.ibb.co/FVyK1KM/user-2.png" alt="" />
          <h3>Rula P.</h3>
        </div>

        <div class="col-3">
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quae molestias error id est voluptatibus quos amet
            numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
            eaque soluta quas modi.
          </p>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <img src="https://i.ibb.co/jZ3tQqK/user-3.png" alt="" />
          <h3>Vika Z.</h3>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- brands --> */}
  <div class="brands">
    <div class="small-container">
      <div class="row">
        <div class="col-5">
          <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt="" />
        </div>

        <div class="col-5">
          <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt="" />
        </div>

        <div class="col-5">
          <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt="" />
        </div>

        <div class="col-5">
          <img src="https://i.ibb.co/7Wt343W/logo-paypal.png" alt="" />
        </div>

        <div class="col-5">
          <img src="https://i.ibb.co/GVSNwJD/logo-philips.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Footer --> */}
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col-1">
          <h3>Download Our App</h3>
          <p>Download App for Android and iso mobile phone.</p>
          <div class="app-logo">
            <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
            <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
          </div>
        </div>

        <div class="footer-col-2">
          <img src={FlurOutfittersSmallWeb} alt="" />
          <p>
            Our Purpose Is To Sustainably Make the Pleasure and Benefits of
            Sports Accessible to the Many.
          </p>
        </div>

        <div class="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>

        <div class="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="copyright">Copyright &copy; 2021 - FLUR Store</p>
    </div>
  </div>

  {/* <!-- js for toggle menu --> */}
   <script src="index.js"></script>
</body>
</div>
  );
}

export default App;
