import { useState } from 'react';
import imglist from "../images.json";

function getImgUrl(name) {
  
  return new URL('../assets/img/' + name, import.meta.url).href;
}

export default function Carousel() {
  const [activeElement, setActiveElement] = useState(0);

  // Funzione per passare all'elemento successivo
function nextElement() {
    setActiveElement((prevIndex) => {
        // Calcola il prossimo indice aumentando l'indice attuale di 1
      const nextIndex = prevIndex + 1;
       // Se il prossimo indice è all'interno dei limiti dell'array, restituisci il prossimo indice, altrimenti torna all'inizio dell'array (indice 0)
      return nextIndex < imglist.length ? nextIndex : 0;
    });
  }
  
  // Funzione per tornare all'elemento precedente
  function prevElement() {
    setActiveElement((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      // Se l'indice precedente è maggiore o uguale a zero, restituisci l'indice precedente, altrimenti vai alla fine dell'array (ultimo indice)
    return prevIndexAdjusted >= 0 ? prevIndexAdjusted : imglist.length - 1;
    });
  }
  

  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-4 ">
        <div className="flex items-center justify-between my-8 ">

          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full" onClick={prevElement}>Previous</button>

          <div className="w-full mx-8">
            {imglist.map((img, i) => (
                <div>
                <img key={i} className={i === activeElement ? "block" : "hidden"} src={getImgUrl(img.img)} alt="" />
              <h2 className={`bg-gray-800 text-white text-center ${i === activeElement ? "block" : "hidden"}`}>
                {img.title}
                </h2>
                </div>
           
            ))}
         
          </div>

          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full" onClick={nextElement}>Next</button>

        </div>
      </div>
    </section>
  );
}
