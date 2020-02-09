
import React from "react";
import useFetch from "react-fetch-hook";

const Component = () => {
    const { isLoading, data } = useFetch("https://goofy-albattani-17085e.netlify.com/search_index.json")

    console.log(isLoading, data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
      <div>
          <h2>Data is loaded </h2>
          <p>{data && data.fr.index.fields}</p>
      </div>
  );
};

export default Component;
