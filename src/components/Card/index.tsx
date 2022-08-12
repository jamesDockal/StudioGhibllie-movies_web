import React from "react";

import { Box, Image, useDisclosure } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { Movie } from "../../models/movie.model";

type Props = {
  movie: Movie;
};

export const Card: React.FC<Props> = ({ movie }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`/movie/${movie.id}`);
  };

  return (
    <Box
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      justifyContent={"center"}
      cursor={"pointer"}
      height={250}
      position="relative"
      transitionDuration={"0.1s"}
      borderRadius={8}
      onClick={handleClick}
    >
      <Box
        fontWeight="bold"
        as="h1"
        display={isOpen ? "flex" : "none"}
        alignItems="center"
        justifyContent={"center"}
        py="4"
        color="pink.500"
        bg={"gray.800"}
        width="100%"
        position="absolute"
        zIndex={3}
        top="50%"
        left="50%"
        transform={"auto"}
        translateX={"-50%"}
        translateY={"-50%"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        opacity={1}
        transitionDuration={"0.3s"}
      >
        {movie.title}
      </Box>

      <Image
        src={movie.banner}
        alt={movie.title}
        height={"100%"}
        width={"100%"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        opacity={isOpen ? 0.5 : 1}
        transitionDuration={"0.3s"}
        objectFit="contain"
        borderRadius={8}
      />
    </Box>
  );
};
