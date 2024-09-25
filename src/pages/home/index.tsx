import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../Layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
  Stack,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width={1}>
            <Stack spacing={4}>
              <Box width={1}>
                <Box
                  sx={{
                    gap: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography variant="h5" component="h1" fontWeight="bold">
                    Recommended For You
                  </Typography>
                  <Paper
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "default",
                      p: 1,
                      backgroundColor: "secondary.dark",
                      border: "none",
                      maxWidth: "150px",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      placeholder="Search"
                      sx={{
                        ml: 1,
                        color: "white",
                        border: "none",
                        maxWidth: "100%",
                      }}
                      value={search}
                      onChange={handleSearch}
                      startAdornment={
                        <InputAdornment position="start">
                          <img
                            src={SearchIcon}
                            alt="search icon"
                            width={20}
                            height={20}
                          />
                        </InputAdornment>
                      }
                    />
                  </Paper>
                </Box>
                <MovieList recommendList={recommendList} />
              </Box>
            </Stack>
          </Box>
        ) : (
          <Box width={1}>
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
