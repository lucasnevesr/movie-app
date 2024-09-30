import axios from "axios";

//const JWT = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNDI4NTUxMmU2ODRmZWY5MjI1ZmI3ZGZkNmVhYiIsIm5iZiI6MTcyMTI2MTYyMi42Mzc3NzQsInN1YiI6IjY2OTg1NWM3NWU5NTgyZmQ2ZDgwNGFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8a8pz3w3K04N536hq1hjVrFHERnhvGL02PC9R5JAbc

async function getMoviesService(pageNumber) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: pageNumber.toString(),
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNDI4NTUxMmU2ODRmZWY5MjI1ZmI3ZGZkNmVhYiIsIm5iZiI6MTcyMTI2MTYyMi42Mzc3NzQsInN1YiI6IjY2OTg1NWM3NWU5NTgyZmQ2ZDgwNGFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8a8pz3w3K04N536hq1hjVrFHERnhvGL02PC9R5JAbc",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export default getMoviesService;
