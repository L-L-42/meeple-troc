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
import account from "../assets/landing_page/account.jpg";
import toyBox from "../assets/landing_page/toyBox.jpg";
import arrowTransaction from "../assets/landing_page/arrow_transaction.jpg";
import familyPlaying from "../assets/landing_page/family_playing.jpg";

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
          Gérez votre ludothèque et/ou coffre à jouet avant de les échanger
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
          <Box w="100%" bg="middleGreen" h="16rem" rounded="2xl">
            <Flex alignItems="center" flexDirection="column" m="3rem">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={account}
                alt="girl create account"
              />
              <Text pt="2" color="white">
                Créez un compte gratuit
              </Text>
            </Flex>
          </Box>

          <Box w="100%" bg="lightOrange" h="16rem" rounded="2xl">
            <Flex alignItems="center" flexDirection="column" m="1.5rem">
              <Image
                borderRadius="3.5"
                boxSize="150px"
                src={toyBox}
                alt="coffre à jouet"
              />
              <Text pt="2" color="white">
                ajoutez vos jeux, vos jouets
                <br />
                que vous souhaitez échanger
              </Text>
            </Flex>
          </Box>
          <Box w="100%" bg="sandBeige" h="16rem" rounded="2xl">
            <Flex flexDirection="column" alignItems="center" m="1.5rem">
              <Image
                borderRadius="3.5"
                boxSize="150px"
                src={arrowTransaction}
                alt="flèches représentant un échange"
              />
              <Text pt="2">
                Echangez avec
                <br />
                les autres Meeples
              </Text>
            </Flex>
          </Box>
          <Box w="100%" bg="#bee3f8" h="16rem" rounded="2xl">
            <Flex flexDir="column" alignItems="center" m="1.5rem">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={familyPlaying}
                alt="famille qui joue à un jeu de société"
              />
              <Text pt="2">
                jouez avec
                <br /> vos trouvailles !
              </Text>
            </Flex>
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
          <Text fontSize={{ base: "13" }}>2023 © Meeple-Troc</Text>
          <Text fontSize={{ base: "13" }} ml={{ base: "5rem" }}>
            Créé et développé par Luc Lefebure
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
