import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
    setResults(response.data[0]);    
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001e8ee5d17dc16457b917498562f90b39d";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
    event.preventDefault();
    search();
    }

    function handleKeywordChange(event) {
    setKeyword(event.target.value); 
    }
    function load() {
    setLoaded(true);
    search();
    }

if (loaded) {
    return (
        <div className="Dictionary">
        <section>
            <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..."  />
            </form>
        </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
        );
} else {
    load();
    return "Loading...";
}
}