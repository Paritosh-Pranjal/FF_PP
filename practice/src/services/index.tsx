import axios from "axios";

const fetchJokes = async () => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/jokes/ten");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jokes");
  }
};

export default fetchJokes;
