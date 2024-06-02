import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { SquarePen, Image, CalendarDays } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./GlobalContext";

export function Dark() {
  document.documentElement.classList.toggle('dark');
}

export default function ModalForm({ isOpen, onClose }) {
  const { dataHistoria, setDataHistoria, data, setData } = useContext(DataContext);
  const [historiaLocal, setHistoriaLocal] = useState(dataHistoria);

  useEffect(() => {
    if (isOpen) {
      setHistoriaLocal(dataHistoria);
    }
  }, [isOpen, dataHistoria]);

  const controladorFormHistoria = (e) => {
    const { name, value } = e.target;
    setHistoriaLocal((prevHistoria) => ({
      ...prevHistoria,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item.id === historiaLocal.id ? historiaLocal : item
    );

    setData(updatedData);
    setDataHistoria(historiaLocal);
    console.log("Datos de la historia actualizada:", historiaLocal);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">Editar Historia</ModalHeader>
          <ModalBody>
            <Input
              name="fecha"
              value={historiaLocal?.fecha || ''}
              onChange={controladorFormHistoria}
              autoFocus
              endContent={<CalendarDays />}
              label="Fecha"
              placeholder="Ejemplo: 14 Marzo de 2024"
              variant="bordered"
            />
            <Input
              name="titulo"
              value={historiaLocal?.titulo || ''}
              onChange={controladorFormHistoria}
              autoFocus
              endContent={<SquarePen />}
              label="Titulo"
              placeholder="Título de la historia"
              variant="bordered"
            />
            <Textarea
              name="experiencia"
              value={historiaLocal?.experiencia || ''}
              onChange={controladorFormHistoria}
              className="h-[120px]"
              autoFocus
              label="Experiencia"
              placeholder="Describe tu experiencia"
              variant="bordered"
            />
            <Textarea
              name="comentario"
              value={historiaLocal?.comentario || ''}
              onChange={controladorFormHistoria}
              className="h-[120px]"
              autoFocus
              label="Comentario"
              placeholder="Escribe tu comentario"
              variant="bordered"
            />
            <Input
              name="imagen"
              value={historiaLocal?.imagen || ''}
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
            <Button color="success" onPress={handleSave}>
              Guardar
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
