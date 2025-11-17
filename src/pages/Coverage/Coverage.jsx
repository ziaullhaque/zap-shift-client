import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  //   const position = [51.505, -0.09];
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <div className="bg-white rounded-xl p-20 my-10 space-y-8">
      <h1 className="text-5xl font-extrabold text-[#03373d]">
        We are available in 64 districts
      </h1>
      <div>
        {" "}
        <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2">
          <label className="input rounded-full absolute">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="location"
              className="grow "
              type="search"
              placeholder="Search"
            />
          </label>
          <button className="btn bg-[#CAEB66] rounded-full relative left-62">
            Search
            {/* {loading ? "Searching...." : "Search"} */}
          </button>
        </form>
      </div>
      <div className="border-t-1 border border-gray-200"></div>
      <h2 className="font-bold text-xl text-[#03373d]">
        We deliver almost all over Bangladesh
      </h2>
      <div className="border-rounded-xl border-gray-200 rounded-xl w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker
              key={index}
              // position={position}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area :{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
