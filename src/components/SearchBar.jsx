import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from '@mui/icons-material/Mic';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconButton>
        <MicIcon sx={{ color: 'black' }} />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
