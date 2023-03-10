import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setDetailsModalStatus } from "../redux/users/countriesSlice";
import Details from "./Details";

export default function CountryDetailModal(props) {
  const { isOpen, onOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Country Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Details />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
