import axios from "axios";

//const JWT = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNDI4NTUxMmU2ODRmZWY5MjI1ZmI3ZGZkNmVhYiIsIm5iZiI6MTcyMTI2MTYyMi42Mzc3NzQsInN1YiI6IjY2OTg1NWM3NWU5NTgyZmQ2ZDgwNGFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8a8pz3w3K04N536hq1hjVrFHERnhvGL02PC9R5JAbc

async function getMoviesService() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "2",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNDI4NTUxMmU2ODRmZWY5MjI1ZmI3ZGZkNmVhYiIsIm5iZiI6MTcyMTI2MTYyMi42Mzc3NzQsInN1YiI6IjY2OTg1NWM3NWU5NTgyZmQ2ZDgwNGFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8a8pz3w3K04N536hq1hjVrFHERnhvGL02PC9R5JAbc",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export default getMoviesService;
