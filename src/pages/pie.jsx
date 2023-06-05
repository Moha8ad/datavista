import { Header, PieChart } from "components";
import { Main, MainWrapper } from "./styles";

const Pie = () => {
  return (
    <MainWrapper>
      <Header title="PIE CHART" subtitle="Sample Pie Chart" />
      <Main>
        <PieChart />
      </Main>
    </MainWrapper>
  );
};

export default Pie;
