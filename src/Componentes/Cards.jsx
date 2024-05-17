import { useContext } from "react";
import { DataContext } from "./GlobalContext";
import { Carta } from "./Card";


export function Cartas(){
    const { data } = useContext(DataContext);
    console.log('data',data)
    return (
        <div>
          <h1>Datos importados</h1>
          {data.map((item) => (
            <Carta 
            key={item.id}
            titulo={item.titulo}
            fecha={item.fecha}
            experiencia={item.experiencia}
            imagen={item.imagen}
            />
          ))}

        </div>
      );
}