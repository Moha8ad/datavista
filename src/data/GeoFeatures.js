import { useEffect } from "react";

const GeoFeatures = ({ mockGeoData }) => {
  const mockGeoDataUrl =
    "https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(mockGeoDataUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        mockGeoData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default GeoFeatures;
