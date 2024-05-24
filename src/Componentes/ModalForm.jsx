import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { SquarePen, Image, CalendarDays } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "./GlobalContext";


export function Dark() {
  document.documentElement.classList.toggle('dark')
}

export default function ModalForm({ isOpen, onClose }) {
  const { dataHistoria, setDataHistoria, data, setData } = useContext(DataContext);

  const GuardarNuevosDatos = () => {
    const updatedData = data.map((item) =>
      item.id === dataHistoria.id ? dataHistoria : item
    );
    setData(updatedData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center" >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">Editar Historia</ModalHeader>
          <ModalBody>
            <Input
              name="fecha"
              value={dataHistoria?.fecha || ''}
              onChange={(e) => setDataHistoria({ ...dataHistoria, fecha: e.target.value })}
              autoFocus
              endContent={<CalendarDays />}
              label="Fecha"
              placeholder="Ejemplo: 14 Marzo de 2024"
              variant="bordered"
            />
            <Input
              name="titulo"
              value={dataHistoria?.titulo || ''}
              onChange={(e) => setDataHistoria({ ...dataHistoria, titulo: e.target.value })}
              autoFocus
              endContent={<SquarePen />}
              label="Titulo"
              placeholder="Título de la historia"
              variant="bordered"
            />
            <Textarea
              name="experiencia"
              value={dataHistoria?.experiencia || ''}
              onChange={(e) => setDataHistoria({ ...dataHistoria, experiencia: e.target.value })}
              className="h-[120px]"
              autoFocus
              label="Experiencia"
              placeholder="Describe tu experiencia"
              variant="bordered"
            />
            <Textarea
              name="comentario"
              value={dataHistoria?.comentario || ''}
              onChange={(e) => setDataHistoria({ ...dataHistoria, comentario: e.target.value })}
              className="h-[120px]"
              autoFocus
              label="Comentario"
              placeholder="Escribe tu comentario"
              variant="bordered"
            />
            <Input
              name="imagen"
              value={dataHistoria?.imagen || ''}
              onChange={(e) => setDataHistoria({ ...dataHistoria, imagen: e.target.value })}
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
            <Button color="success" onPress={GuardarNuevosDatos}>
              Editar
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
