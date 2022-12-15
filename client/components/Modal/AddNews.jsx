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
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import router from "next/router";

const AddNews = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);
  const imgUrlRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useContext(AuthContext);

  const handleCreateNews = async (e) => {
    e.preventDefault();

    const newsData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value,
      imgUrl: imgUrlRef.current.value,
      createdAt: new Date(),
    };

    try {
      await fetch("http://localhost:4000/api/news/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      });
      router.reload(window.location.pathname);
    } catch (err) {
      console.log(err.message);
    }
    onClose();
  };
  return (
    <>
      <Button disabled={!user} onClick={onOpen}>
        Create news
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a news</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody className="space-y-4">
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input ref={titleRef} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea ref={contentRef} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Author name</FormLabel>
                <Input ref={authorRef} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Image url</FormLabel>
                <Input ref={imgUrlRef} />
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
                onClick={handleCreateNews}
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

export default AddNews;
