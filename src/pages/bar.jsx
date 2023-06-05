import { Header, BarChart } from "components";
import { Main, MainWrapper } from "./styles";

const Bar = () => {
  return (
    <MainWrapper>
      <Header title="BAR CHART" subtitle="Sample Bar Chart" />
      <Main>
        <BarChart />
      </Main>
    </MainWrapper>
  );
};

export default Bar;
