import React, { useState } from 'react';
import styles from './productCSS.css';

export function Product({ productsObj,  numero, pagineitor}) {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calcular los productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Object.keys(productsObj).slice(indexOfFirstProduct, indexOfLastProduct);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(Object.keys(productsObj).length / productsPerPage);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="product-grid">
        {currentProducts.map(key => (
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

      {/* Paginador */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

