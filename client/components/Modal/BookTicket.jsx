import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { GiTicket } from "react-icons/gi";

const BookTicket = ({ eventName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        Book tickets <GiTicket className="ml-2" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{eventName} Tickets</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody className="space-y-4">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Number of tickets</FormLabel>
                <Input type="number" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={onClose}
                mr={3}
              >
                Close
              </Button>
              <Button type="submit" colorScheme="blue">
                Book
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookTicket;
