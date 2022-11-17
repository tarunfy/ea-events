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

const AddEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Event date</FormLabel>
                <Input type="date" />
              </FormControl>
              <div className="flex items-center space-x-3">
                <FormControl isRequired>
                  <FormLabel>From</FormLabel>
                  <Input type="time" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>To</FormLabel>
                  <Input type="time" />
                </FormControl>
              </div>
              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Enter price" type="number" />
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
