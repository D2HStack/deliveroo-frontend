import React, { useState, useEffect } from "react";

import axios from "axios";

import "./style.css";

// import components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const URL = "https://deliveroo-backend-hd.herokuapp.com/";
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const fetchData = async URL => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      alert("An error has occurred ! ");
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  // console.log("data.restaurant", data.restaurant);
  // console.log("selectedMeals", selectedMeals);
  return (
    <div>
      {!isLoading ? (
        <>
          <Header restaurant={data.restaurant}></Header>
          <Main
            categories={data.categories}
            selectedMeals={selectedMeals}
            setSelectedMeals={setSelectedMeals}
          ></Main>
        </>
      ) : (
        "Please wait ... "
      )}
    </div>
  );
}

export default App;
