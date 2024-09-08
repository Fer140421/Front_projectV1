import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
      <html >
        <body >

          <div className={styles.containerlayout}>

          <div className={styles.div1layout}>
            

            <div  className={styles.div3layout}>
              <h2>Categorias</h2>
              <h3>Mujer</h3>
              <ul>
          
              <li>
                  <input type="checkbox" /> vestidos
              </li>
              <li>
                  <input type="checkbox" /> vestidos
              </li>
              <li>
                  <input type="checkbox" /> vestidos
              </li>
              </ul>
          
           
        

              <h3>Hombre</h3>
              <ul>
              <li>
                  <input type="checkbox" /> camisas
              </li>
              <li>
                  <input type="checkbox" /> camisas
              </li>
              <li>
                  <input type="checkbox" /> camisas
              </li>

              </ul>

        
            
            </div>
            
          </div>
      

      
          <div className={styles.div2layout}>
  
          {children}
       
          </div>


          </div>
          
       
          </body>
      </html>
    );
  }
  