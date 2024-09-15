"use client";

import React, { useState } from 'react';
import './details.module.css'; 
import { FaWhatsapp } from 'react-icons/fa'; 
import Image from './Modulos/details/images';
import Header from './Modulos/header/Header.js';

const Gallery = () => {
  const [mainImage, setMainImage] = useState('./images/image-product-4.jpg');

  return (
    <article className="gallery">
      <div className="gallery__thumbnails">
        <img className="gallery__thumbnail" src="./images/image-product-1.jpg" alt="thumbnail" onClick={() => setMainImage('./images/image-product-1.jpg')} />
        <img className="gallery__thumbnail" src="./images/image-product-2.jpg" alt="thumbnail" onClick={() => setMainImage('./images/image-product-2.jpg')} />
        <img className="gallery__thumbnail" src="./images/image-product-3.jpg" alt="thumbnail" onClick={() => setMainImage('./images/image-product-3.jpg')} />
      </div>
      <div className="gallery__image-container">
        <img className="gallery__previous" src={mainImage} alt="product" />
      </div>
    </article>
  );
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <article className="details">
      <h2 className="details__title">Tenis Nike_Producto</h2>
      <p className="details__price">Bs 135.00</p>

      <div className="color-options">
        <div className="color-option red"></div>
        <div className="color-option black"></div>
        <div className="color-option purple"></div>
        <div className="color-option gray"></div>
      </div>

      <p>Tallas:</p>
      <div className="details__sizes">
        <button className="details__size-btn">M</button>
        <button className="details__size-btn">L</button>
        <button className="details__size-btn">S</button>
        <button className="details__size-btn">XL</button>
      </div>

      <div className="details__product-quantity">
        <p>Cantidad:</p>
        <div className="input">
          <img src="./images/icon-minus.svg" alt="decrement" onClick={decrement} />
          <input className="input__number" type="number" value={quantity} readOnly />
          <img src="./images/icon-plus.svg" alt="increment" onClick={increment} />
        </div>
      </div>

      <button className="details__button">Agregar al carrito</button>
      <button className="whatsapp-button">
        <FaWhatsapp /> Comprar por WhatsApp
      </button>
    </article>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Ecomerse-Yoryi. Todos los derechos reservados. <a href="#">Política de privacidad</a> | <a href="#">Términos y condiciones</a></p>
    </footer>
  );
};

const DetailsProducts = () => {
  return (
    <div className="ecommerce-page">
      <Header />
      <div className="content">
        <Gallery />
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsProducts;
