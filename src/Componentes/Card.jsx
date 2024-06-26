import { useState, useContext } from "react";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import { DataContext } from "./GlobalContext";
import ModalForm from "./ModalForm"; // Importa el componente ModalForm

export function Carta({ id, titulo, fecha, experiencia, imagen }) {
  const [ModalAbierto, setAbierto] = useState(false);
  const { setDataHistoria, data, setData } = useContext(DataContext);

  const abrirModal = () => setAbierto(true);
  const cerrarModal = () => setAbierto(false);

  const controladorEditarHistoria = () => {
    setDataHistoria({ id, titulo, fecha, experiencia, imagen });
    abrirModal();
  };

  const controladorBorrarHistoria = async () => {
    try {
      const response = await fetch(`https://json-server-historias.vercel.app/historias/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la historia');
      }

      console.log('Has eliminado esta historia:', id);

      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error al eliminar la historia:', error);
    }
  };

  return (
    <div className="mx-3 mb-4 mr-4">
      <Card isFooterBlurred className="h-[280px] w-[380px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{titulo}</p>
          <h4 className="text-white/90 font-medium text-xl">{fecha}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={imagen}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{experiencia}</p>
            </div>
          </div>
          <Button
            className="text-tiny bg-black/20 mx-1"
            color="success"
            variant="bordered"
            radius="lg"
            size="sm"
            onPress={controladorEditarHistoria}
          >
            <Pencil />
          </Button>
          <ModalForm isOpen={ModalAbierto} onClose={cerrarModal} /> 
          <Button
            className="bg-black/20 mx-1"
            color="danger"
            variant="bordered"
            radius="lg"
            size="sm"
            onPress={controladorBorrarHistoria}
          >
            <Trash2 />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
