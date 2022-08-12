import React, { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { Box, Button, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";

import { Movie } from "../../models/movie.model";
import { api } from "../../services/api";
import Pagination from "../../components/Pagination";

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const searchMovies = async () => {
    const { data } = await api.get(`/movies?page=${page}`);
    setMovies(data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    searchMovies();
  }, [page]);

  const updateMovies = async () => {
    setIsLoading(true);

    await api.post(`/movies/save-movies`);
    await searchMovies();
  };

  return (
    <Flex
      minWidth={"100%"}
      minHeight={"100vh"}
      bg="gray.800"
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
    >
      {isLoading ? (
        <Spinner
          position={"absolute"}
          top="50%"
          left={"50%"}
          color="pink.500"
        />
      ) : (
        <>
          <Box display={"flex"} alignItems={"center"} gap={6} mt="8">
            <Pagination
              onPageChange={setPage}
              totalCountOfRegisters={22}
              currentPage={page}
            />

            <Button
              as="a"
              size={"sm"}
              fontSize={"sm"}
              colorScheme={"pink"}
              cursor="pointer"
              onClick={updateMovies}
            >
              Update
            </Button>
          </Box>
          <Box height={"100%"} w="100%">
            <SimpleGrid p="6" flex={"1"} gap={"4"} minChildWidth={"320px"}>
              {movies?.map((movie) => (
                <Card movie={movie} key={movie.id} />
              ))}
            </SimpleGrid>
          </Box>
        </>
      )}
    </Flex>
  );
};
