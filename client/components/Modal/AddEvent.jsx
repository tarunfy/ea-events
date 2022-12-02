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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const AddEvent = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const priceRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    const eventData = {
      title: titleRef.current.value,
      description: descRef.current.value,
      event_date: dateRef.current.value,
      event_from: fromRef.current.value,
      event_to: toRef.current.value,
      price: +priceRef.current.value,
    };

    try {
      const res = await fetch("http://localhost:4000/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const data = await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Create event</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new event</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody className="space-y-4">
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input ref={titleRef} type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea ref={descRef} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Event date</FormLabel>
                <Input ref={dateRef} type="date" />
              </FormControl>
              <div className="flex items-center space-x-3">
                <FormControl isRequired>
                  <FormLabel>From</FormLabel>
                  <Input ref={fromRef} type="time" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>To</FormLabel>
                  <Input ref={toRef} type="time" />
                </FormControl>
              </div>
              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input ref={priceRef} placeholder="Enter price" type="number" />
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
              <Button
                onClick={handleCreateEvent}
                type="submit"
                colorScheme="blue"
              >
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddEvent;
