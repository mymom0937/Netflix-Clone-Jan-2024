import React from 'react'
import Row from '../Row/Row.js'
import requests from '../../../utils/requests.js'

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* // Additional Rows Start */}
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="War" fetchUrl={requests.fetchWar} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      {/* // Additional Rows End */}
    </>
  );
}

export default RowList;
