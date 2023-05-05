import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Worlds coolest website</title>
        <meta name="description" content="A great website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Wow this website really slaps!!</Heading>
      </Box>
    </>
  );
}
