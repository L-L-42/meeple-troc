import {
  Flex,
  Text,
  Stack,
  Container,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import natureMorteBoardgame from "../assets/landing_page/nature_morte_boardgame.jpg";
import toyDonation from "../assets/landing_page/toy_donation.jpg";

export default function LandingPage() {
  return (
    <Stack>
      <Container maxWidth={{ md: "6xl" }} mt="16">
        <Flex>
          <Text fontSize={{ base: "4xl", md: "6xl" }} mb="4">
            Meeple-Troc
          </Text>
        </Flex>
        <Flex justifyContent={{ base: "none", md: "space-between" }}>
          <Flex wrap="wrap">
            <Text>Il n'a jamais été aussi facile de partager !</Text>
          </Flex>
          <Flex display={{ base: "none", md: "flex" }} mt="-8rem">
            <Image
              boxSize="400px"
              src={natureMorteBoardgame}
              alt="nature morte jeux de société"
            />
          </Flex>
        </Flex>
      </Container>

      <Container
        maxWidth="90%"
        bg="sandBeige"
        rounded="2xl"
        mt={{ base: "4rem" }}
      >
        <Flex
          wrap={{ base: "wrap" }}
          justifyContent={{ base: "none", md: "space-around" }}
        >
          <Image
            borderRadius="full"
            pt="16px"
            boxSize="400px"
            src={toyDonation}
            alt="donation"
          />
          <Box wrap="wrap" maxW="lg" mr={{ md: "10" }}>
            <Box>
              <Text
                justifyContent="center"
                textAlign={{ base: "center" }}
                mt="10"
                fontSize="2xl"
              >
                Le partage des jeux de société ou des jouets en toute
                simplicité.
              </Text>
            </Box>
            <Flex>
              <Text mt="50" mb={{ base: "4rem" }}>
                Avec les milliers de jeux, de jouets développés chaque année,
                nous achetons boîte après boîte, jouet après jouet qui iront un
                peu trop vite prendre la poussière sur nos étagères, dans nos
                armoires.
                <br />
                Meeple-Troc a une solution: <strong>le PARTAGE</strong>.<br />
                Prêter, emprunter, donner, faire confiance à des inconnus: ces
                idées oubliées reprennent du sens de nos jours. <br />
                Vous allez trouver un grand plaisir et des avantages à jouer
                avec les jeux, les jouets des autres et à offrir les vôtres.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth="5xl">
        <Text fontSize="3xl" mt="2rem" textAlign="center">
          Equipez vous du logiciel de gestion de place d’accueil de jeunes
          enfants le plus complet
        </Text>
      </Container>
      <Flex
        justifyContent="center"
        mt="3rem"
        fontSize={{ base: "lg", md: "xl" }}
      >
        <SimpleGrid
          columns={{ base: "1", md: "2" }}
          spacing="10rem"
          textAlign="center"
        >
          <Box w="100%" bg="#FED7E2" h="16rem" rounded="2xl">
            <Flex m="3rem">
              {/* <img src={imageCle} alt="drawing of someone with a key" /> */}
            </Flex>
            <Text>Communiquez avec les parents</Text>
          </Box>

          <Box w="100%" bg="#E9D8FD" h="16rem" rounded="2xl">
            <Flex m="3rem">
              {/* <img src={imageTemps} alt="drawing of someone with a laptop" /> */}
            </Flex>
            <Text mt="4rem">Soyez alertés</Text>
          </Box>
          <Box w="100%" bg="#C6F6D5" h="16rem" rounded="2xl">
            <Flex m="3rem">
              {/* <img src={imageImprime} alt="drawing of a printer" /> */}
            </Flex>
            <Text mt="4rem">Présentez votre crèche</Text>
          </Box>
          <Box w="100%" bg="#bee3f8" h="16rem" rounded="2xl">
            <Flex m="2rem">
              {/* <img
                src={imageLoupe}
                alt="drawing of someone with a magnifying glass"
              /> */}
            </Flex>
            <Text mt="3rem">Améliorez votre visibilité</Text>
          </Box>
        </SimpleGrid>
      </Flex>

      <Flex
        direction="column"
        justifyContent="flex-end"
        position="relative"
        mt="10rem"
      >
        <Flex justifyContent="space-between">
          <Text fontSize={{ base: "13" }}>2023 © Babyplace</Text>
          <Text fontSize={{ base: "13" }} ml={{ base: "5rem" }}>
            Créé avec Wild Code School x Babyplace
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
