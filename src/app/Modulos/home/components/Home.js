"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [productsObj, setProductsObj] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const productsArray = await res.json();

      const productsData = {};
      productsArray.forEach(product => {
        productsData[product.id] = {
          nombre: product.title,
          precio: product.price,
          descripcion: product.description,
          categoria: product.category,
          imagen: product.image
        };
      });

      setProductsObj(productsData);
    }

    fetchProducts();
  }, []);
  return (
    <>
      {/* Sección de imágenes principales */}
      <div className="banner">
        <div className="image-container">
          <Image src="/men.jpg" alt="Outfit 1" width={500} height={600} />
          <Image src="/children.jpg" alt="Outfit 2" width={500} height={600} />
          <Image src="/women.jpg" alt="Outfit 3" width={500} height={600} />
        </div>
        <div className="banner-text">
          <h1>CLOTHES</h1>
          <p>Escoge tus prendas a tu estilo con la moda</p>
        </div>
      </div>

      {/* Sección de beneficios */}
      <aside className="order">
        <div className="item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
            </svg>
          </div>
          <h3>Free Shipping</h3>
          <p>Free on orders over $300</p>
        </div>

        <div className="item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-fill-check" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            </svg>
          </div>
          <h3>Security Payment</h3>
          <p>100% security payment</p>
        </div>

        <div className="item" >
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
            </svg>
          </div>
          <h3>30 Day Return</h3>
          <p>30 day money guarantee</p>
        </div>

        <div className="item">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </div>
          <h3>24/7 Support</h3>
          <p>Support every time fast</p>
        </div>
      </aside>

      {/* Productos */}
      <section className="products-section">
        <div className="title-and-buttons">
          <h2>Ropa de Lujo</h2>

          {/* Sección de botones de categorías */}
          <div className="category-buttons">
            <button className="category-button active">All Products</button>
            <button className="category-button">Vestidos</button>
            <button className="category-button">Chompas</button>
            <button className="category-button">Pantalones</button>
            <button className="category-button">Más</button>
          </div>
        </div>

        {/* Productos */}
        <div className="product-grid">
          {Object.keys(productsObj).map(key => (
            <div className="product-card" key={key}>
              <img
                src={productsObj[key].imagen}
                alt={productsObj[key].nombre}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <span className="tag">{productsObj[key].categoria}</span>
              <h3>${productsObj[key].precio}</h3>
              <p>{productsObj[key].nombre}</p>
              <button>Seleccionar opciones</button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="category-section">
        <h2>Categorías</h2>
        <div className="category-cards">
          <div className="category-card">
            <Image src="/women.jpg" alt="Mujer" width={300} height={400} />
            <button>Mujer</button>
          </div>
          <div className="category-card">
            <Image src="/men.jpg" alt="Varón" width={300} height={400} />
            <button>Varón</button>
          </div>
          <div className="category-card">
            <Image src="/children.jpg" alt="Niños" width={300} height={400} />
            <button>Niños</button>
          </div>
        </div>
      </section>

      {/* Sección de productos */}
      <section className="products-section">
        <h2>Mucho más de nuestras prendas</h2>
        <div className="product-grid">
          {Object.keys(productsObj).map(key => (
            <div className="product-card" key={key}>
              <img
                src={productsObj[key].imagen}
                alt={productsObj[key].nombre}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <span className="tag">{productsObj[key].categoria}</span>
              <h3>${productsObj[key].precio}</h3>
              <p>{productsObj[key].nombre}</p>
              <button>Seleccionar opciones</button>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-text">
            <h1>Fresh Exotic Fruits</h1>
            <h3>in Our Store</h3>
            <p>
              The generated Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
            </p>
            <button>BUY</button>
          </div>
          <div className="promo-image">
            <Image src="/women.jpg" alt="Promo" width={250} height={400} />
            <div className="promo-price">
              <span>1</span>
              <small>50$ <br />kg</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}