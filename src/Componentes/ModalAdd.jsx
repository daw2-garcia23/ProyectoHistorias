import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { SquarePen, Image, CalendarDays } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "./GlobalContext";

export function Dark() {
  document.documentElement.classList.toggle('dark');
}

export default function ModalFormAdd({ isOpen, onClose }) {
  const { dataHistoria, setDataHistoria, data, setData } = useContext(DataContext);

  const AgregarCarta = () => {
    const nuevaCarta = {
      id: data.length + 1,
      titulo: dataHistoria.titulo || "Nuevo Título",
      fecha: dataHistoria.fecha || "Nueva Fecha",
      experiencia: dataHistoria.experiencia || "Nueva Experiencia",
      imagen: dataHistoria.imagen || "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg",
    };

    console.log("Valores de los inputs:", dataHistoria);

    setData([...data, nuevaCarta]);
    onClose();
  };

  const controladorFormHistoria = (e) => {
    const { name, value } = e.target;
    setDataHistoria((prevDataHistoria) => ({
      ...prevDataHistoria,
      [name]: value
    }));
  };

  const controladorActualizaHistorias = () => {
    console.log("ID:", dataHistoria.id);
    console.log("Información de la historia:", dataHistoria);
    // Aquí se puede añadir la lógica para actualizar el elemento en la base de datos
  };

  const GuardarNuevosDatos = () => {
    const updatedData = data.map((item) =>
      item.id === dataHistoria.id ? dataHistoria : item
    );
    setData(updatedData);
    onClose();
  };

  const Actualizar = () => {
    controladorActualizaHistorias();
    GuardarNuevosDatos();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">Editar Historia</ModalHeader>
          <ModalBody>
            <Input
              name="fecha"
              value={dataHistoria?.fecha || ''}
              onChange={controladorFormHistoria}
              autoFocus
              endContent={<CalendarDays />}
              label="Fecha"
              placeholder="Ejemplo: 14 Marzo de 2024"
              variant="bordered"
            />
            <Input
              name="titulo"
              value={dataHistoria?.titulo || ''}
              onChange={controladorFormHistoria}
              autoFocus
              endContent={<SquarePen />}
              label="Titulo"
              placeholder="Título de la historia"
              variant="bordered"
            />
            <Textarea
              name="experiencia"
              value={dataHistoria?.experiencia || ''}
              onChange={controladorFormHistoria}
              className="h-[120px]"
              autoFocus
              label="Experiencia"
              placeholder="Describe tu experiencia"
              variant="bordered"
            />
            <Textarea
              name="comentario"
              value={dataHistoria?.comentario || ''}
              onChange={controladorFormHistoria}
              className="h-[120px]"
              autoFocus
              label="Comentario"
              placeholder="Escribe tu comentario"
              variant="bordered"
            />
            <Input
              name="imagen"
              value={dataHistoria?.imagen || ''}
              onChange={controladorFormHistoria}
              autoFocus
              endContent={<Image />}
              label="Imagen"
              variant="bordered"
            />
          </ModalBody>
          <ModalFooter>
            <button onClick={Dark}>Dark Mode</button>
            <Button color="danger" variant="flat" onPress={onClose}>
              Cerrar
            </Button>
            <Button color="success" onPress={AgregarCarta}>
              Añadir
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
