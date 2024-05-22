import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, DatePicker } from "@nextui-org/react";
import { SquarePen, Image } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "./GlobalContext";


export default function ModalForm({ isOpen, onClose }) {
  const {dataHistoria, setDataHistoria} = useContext(DataContext)

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Editar Historia</ModalHeader>
            <ModalBody>
              <Input
                value={dataHistoria.fecha}
                autoFocus
                endContent={<DatePicker aria-label="Select Date" />}
                label="Fecha"
                placeholder="Ejemplo: 14 Marzo de 2024"
                variant="bordered"
              />
              <Input
                autoFocus
                endContent={<SquarePen />}
                label="Titulo"
                placeholder="Título de la historia"
                variant="bordered"
              />
              <Textarea
                className="h-[120px]"
                autoFocus
                label="Experiencia"
                placeholder="Describe tu experiencia"
                variant="bordered"
                defaultValue=""
              />
              <Textarea
                className="h-[120px]"
                autoFocus
                label="Comentario"
                placeholder="Escribe tu comentario"
                variant="bordered"
              />
              <Input
                autoFocus
                endContent={<Image />}
                label="Imagen"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="success" onPress={onClose}>
                Editar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
