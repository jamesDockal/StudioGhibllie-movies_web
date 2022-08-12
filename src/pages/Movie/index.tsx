import React, { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { Box, Flex, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import { Movie } from "../../models/movie.model";
import { api } from "../../services/api";
import Pagination from "../../components/Pagination";
import { useParams } from "react-router-dom";

export const MovieDetails: React.FC = () => {
  const params = useParams();

  const [movie, setMovie] = useState<Movie>({} as Movie);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`/movies/${params.id}`).then(({ data }) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <Flex
      minWidth={"100%"}
      minHeight={"100vh"}
      bg="gray.800"
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
    >
      {isLoading ? (
        <Spinner position={"absolute"} top="50%" left={"50%"} />
      ) : (
        <Box maxWidth={500}>
          <Text
            color="pink.500"
            fontSize={36}
            fontWeight={"bolder"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {movie.title}
          </Text>
          <Box color="gray.400" fontSize={16} fontWeight={"500"}>
            {movie.description}
          </Box>

          <Box
            color="gray.500"
            fontSize={16}
            fontWeight={"bolder"}
            display={"flex"}
            mt={4}
          >
            Directed By:&nbsp;
            <Text color="gray.300" fontWeight={"500"}>
              {movie.director}
            </Text>
          </Box>

          <Box
            color="gray.500"
            fontSize={16}
            fontWeight={"bolder"}
            display={"flex"}
            mb={8}
          >
            Producer:&nbsp;
            <Text color="gray.300" fontWeight={"500"}>
              {movie.producer}
            </Text>
          </Box>

          <Image
            src={movie.banner}
            alt={movie.title}
            height={"100%"}
            width={"100%"}
            // onMouseEnter={onOpen}
            // onMouseLeave={onClose}
            // opacity={isOpen ? 0.5 : 1}
            transitionDuration={"0.3s"}
            objectFit="contain"
            borderRadius={8}
          />
        </Box>
      )}
    </Flex>
  );
};
