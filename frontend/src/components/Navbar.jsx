import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import meeple from "../assets/meeple.png";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue("darkGreen")} px={6}>
      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo et Nom du site */}
        <Link to="/">
          {/* Remplacez "/" par l'URL de votre page d'accueil */}
          <Box fontSize="xl" fontWeight="bold">
            <Image boxSize="2.5em" src={meeple} alt="logo meeple-troc" />
          </Box>
        </Link>
        <Box fontSize="xl" textColor="white" fontWeight="bold">
          Meeple-Troc {/* Remplacez "Shareandplay" par le nom de votre site */}
        </Box>

        {/* Liens de navigation pour la version desktop */}
        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          width="20%"
          textColor="white"
        >
          <Link to="/link1">Link 1</Link>
          <Link to="/link2">Link 2</Link>
          <Link to="/link3">Link 3</Link>
        </Flex>

        {/* Menu burger pour mobile */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={<HamburgerIcon />}
          aria-label="Menu"
        />
      </Flex>

      {/* Contenu du menu burger pour mobile */}
      {isOpen && (
        <Box pb={4} display={{ base: "block", md: "none" }}>
          {/* Ajoutez ici vos liens de navigation pour la version mobile */}
          <Link to="/link1">Link 1</Link>
          <Link to="/link2">Link 2</Link>
          <Link to="/link3">Link 3</Link>
        </Box>
      )}
    </Box>
  );
}
