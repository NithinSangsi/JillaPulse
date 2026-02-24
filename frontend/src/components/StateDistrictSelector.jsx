import { useState } from "react";
import { indiaData } from "../data/indiaData";

function StateDistrictSelector({ onSearch }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleSubmit = () => {
    if (selectedDistrict) {
      onSearch(selectedDistrict);
    }
  };

  return (
    <div className="selector">
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select State</option>
        {Object.keys(indiaData).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <select onChange={(e) => setSelectedDistrict(e.target.value)}>
          <option value="">Select District</option>
          {indiaData[selectedState].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      )}

      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default StateDistrictSelector;