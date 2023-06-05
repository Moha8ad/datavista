import { Header, LineChart } from "components";
import { Main, MainWrapper } from "./styles";

const Line = () => {
  return (
    <MainWrapper>
      <Header title="LINE CHART" subtitle="Sample Line Chart" />
      <Main sx={{ minWidth: "150px" }}>
        <LineChart />
      </Main>
    </MainWrapper>
  );
};

export default Line;
