import React, { useState } from "react";
import Routes from "./Routes";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Items from "./Items";
import axios from "axios";

const features = {
  Primary_Offence: "THEFT UNDER",
  Occurrence_Year: 2020,
  Occurrence_Month: "September",
  Occurrence_DayOfWeek: "Friday",
  Occurrence_DayOfMonth: 18,
  Occurrence_Hour: 16,
  Report_Year: 2020,
  Report_Month: "September",
  Report_DayOfWeek: "Monday",
  Report_DayOfMonth: 21,
  Report_Hour: 17,
  Division: "D14",
  City: "Toronto",
  Hood_ID: 82,
  NeighbourhoodName: "Niagara",
  Location_Type: "Streets, Roads, Highways (Bicycle Path, Privat...",
  Premises_Type: "Outside",
  Bike_Make: "UK",
  Bike_Type: "RC",
  Bike_Speed: 12,
  Bike_Colour: "WHI",
  Cost_of_Bike: 350.0,
  Longitude: -79.414979,
  Latitude: 43.641436,
  ro_delta: 3,
};

const App = () => {
  const [result, setResult] = useState(null);
  console.log({ result });

  const getPrediction = () => {
    return axios
      .get(`http://localhost:12345/predict/multi-layer-perceptron`, features)
      .then((r) => setResult(r))
      .catch((e) => {
        console.log("error", e);
      });
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "center",
        justifyContent: "center",
      }}
    >
      <Routes>
        <Drawer />
        <Dialog />
        <button onClick={getPrediction}>predict</button>
      </Routes>
    </div>
  );
};

export default App;
