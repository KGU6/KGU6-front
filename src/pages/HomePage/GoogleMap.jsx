import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const apiKey="AIzaSyBQRaeCdSMItx7SXGVTrSK_W3InVaFMRug";
// Google Map을 렌더링할 스타일
const mapContainerStyle = {
  width: "300px",
  height: "300px",
};

// 지도 초기 위치 (예: 서울)
const center = {
  lat: 37.5665,
  lng: 126.9780,
};

function App() {
  return (
    <div>
      {/* Google Maps API를 불러올 때 API 키를 여기에 사용 */}
      <LoadScript googleMapsApiKey={apiKey}>
        {/* Google Map을 표시 */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {/* 지도 위에 다양한 데이터를 렌더링할 수 있음 */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
