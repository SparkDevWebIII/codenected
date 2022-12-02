import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const SearchBar = ({ query, setQuery }) => {
  return (
    <FormControl fullWidth sx={{ my: 1, mx: "auto", width: "100%", }}>
      {/* <InputLabel htmlFor="outlined-adornment-search">search</InputLabel> */}
      <OutlinedInput
        id="outlined-adornment-search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        startAdornment={<SearchIcon/>}
        // label="search"
      />
    </FormControl>
  );
};

export default SearchBar;
