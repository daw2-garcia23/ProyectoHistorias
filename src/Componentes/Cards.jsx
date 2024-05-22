import { useState, useContext } from "react";
import { DataContext } from "./GlobalContext";
import { Carta } from "./Card";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import ModalForm from "./ModalForm";

export function Cartas() {
  const { data, setData } = useContext(DataContext);

  const handleAgregarCarta = () => {
    const nuevaCarta = {
      id: data.length + 1,
      titulo: "Nuevo Título",
      fecha: "Nueva Fecha",
      experiencia: "Nueva Experiencia",
      imagen: "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg",
    };
    setData([...data, nuevaCarta]);
  };

  return (
    <div>
      <h1>Datos importados</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((item) => (
          <div key={item.id} className="mb-4 mr-5">
            <Carta
              titulo={item.titulo}
              fecha={item.fecha}
              experiencia={item.experiencia}
              imagen={item.imagen}
            />
          </div>
        ))}
      </div>
      <div className="bg-success w-[60px] h-[60px] rounded-full fixed bottom-5 right-5 flex items-center justify-center mt-2">
        <Button
          className="text-white text-3xl"
          color="success"
          size="sm"
          onClick={handleAgregarCarta}
          onPress={ModalForm}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
