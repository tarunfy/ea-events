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
import { useRef } from "react";
import { GiTicket } from "react-icons/gi";
import { sendEmail } from "../../utils/emailConfig";

const BookTicket = ({ eventData }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ticketRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(eventData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      sendEmail({
        user_email: emailRef.current.value,
        name: nameRef.current.value,
        ticketCount: ticketRef.current.value,
        title: eventData.title,
      });
      alert("mail sent");
      onClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        Book tickets <GiTicket className="ml-2" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{eventData.eventName} Tickets</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody className="space-y-4">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input ref={nameRef} type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input ref={emailRef} type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Number of tickets</FormLabel>
                <Input ref={ticketRef} type="number" />
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
