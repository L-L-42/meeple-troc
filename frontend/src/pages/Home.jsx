import { Stack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <Stack bgGradient="linear-gradient(#F6FAFD 0%, #FFFFFF 19.4%)">
      <Navbar />
      <LandingPage />
    </Stack>
  );
}
