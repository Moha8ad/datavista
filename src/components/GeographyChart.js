import { useState } from "react";

import { mockGeographyData as data } from "data/mockData";
import GeoFeatures from "data/GeoFeatures";

import { tokens } from "theme";
import { ResponsiveChoropleth } from "@nivo/geo";
import { CircularProgress, useTheme } from "@mui/material";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [mockGeoData, setMockGeoData] = useState([]);
  const handleDataReceived = (data) => {
    setMockGeoData(data);
  };

  return (
    <>
      {!!mockGeoData.features ? (
        <ResponsiveChoropleth
          data={data}
          features={mockGeoData.features}
          margin={{ top: -10, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={isDashboard ? 45 : 90}
          projectionTranslation={isDashboard ? [0.5, 0.6] : [0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1}
          borderColor="#ffffff"
          legends={
            !isDashboard
              ? [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: colors.gray[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: colors.greenAccent[100],
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
              : undefined
          }
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.gray[100],
                },
              },
              legend: {
                text: {
                  fill: colors.gray[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.gray[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.gray[100],
                },
              },
            },
            legend: {
              text: {
                fill: colors.gray[100],
              },
            },
          }}
        />
      ) : (
        <CircularProgress />
      )}
      <GeoFeatures mockGeoData={(data) => handleDataReceived(data)} />
    </>
  );
};

export default GeographyChart;
