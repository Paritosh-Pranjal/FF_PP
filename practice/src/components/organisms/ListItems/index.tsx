import React, { useEffect, useState } from "react";
import TextField from "../../atoms/TextField";
import { Box, List, styled } from "@mui/material";
import fetchJokes from "../../../services";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  width: "100%",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "10px",
});

const ListItems = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [originalJokes, setOriginalJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jokesData = await fetchJokes();
        setOriginalJokes(jokesData);
        setJokes(jokesData);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchField = (e: any) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    const filtered = originalJokes.filter((joke) =>
      joke.setup.toLowerCase().includes(inputValue.toLowerCase())
    );
    setJokes(filtered);
  };

  return (
    <StyledBox>
      <TextField
        type="search"
        placeholder="Search for a joke..."
        value={searchTerm}
        onChange={handleSearchField}
      />

      <List>
        {jokes.map((joke, index) => (
          <div key={index}>
            <b>Id: </b> {joke.id}
            <b> Setup: </b>
            {joke.setup} <b>PunchLine: </b> {joke.punchline}
          </div>
        ))}
      </List>
    </StyledBox>
  );
};

export default ListItems;
