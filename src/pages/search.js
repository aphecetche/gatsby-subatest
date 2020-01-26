import React, { useState, useEffect } from "react"
import SearchForm from "../components/searchForm"
import SearchResults from "../components/searchResults"

export default ({location}) => {
    const [results,setResults]=useState([])
    const searchQuery = new URLSearchParams(location.search).get('keywords') || '';
    useEffect(()=>{
    if (searchQuery && window.__LUNR__) {
        window.__LUNR__.__loaded.then(lunr => {
            // Lunr is loaded here
            const refs = lunr.fr.index.search(searchQuery);
            const posts = refs.map(({ref})=> lunr.fr.store[ref]);
            setResults(posts)
            console.log(posts)
        })
    }},[searchQuery])
    return (
        <>
        <SearchForm query={searchQuery}/>
        <SearchResults results={results} query={searchQuery} />
        </>
    )
}
