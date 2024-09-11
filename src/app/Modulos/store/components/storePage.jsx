"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './sotre.css';




export default function StorePage() {

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
    <div className={styles.container}>
 
      <div name="botones" className={styles.containerbotones}> 
        <button className={styles.button}>HOMBRE</button>
        <button className={styles.button}>MUJER</button>
        <button className={styles.button}>OTROS</button>
      </div>

      <div>


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
              <button  className={styles.postButton}>Seleccionar opciones</button>
            </div>
          ))}
        </div>


      </div>
      



    </div>
  );
}