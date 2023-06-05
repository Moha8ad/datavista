import { Header, GeographyChart } from "components";
import { Main, MainWrapper } from "./styles";

const Geography = () => {
  return (
    <MainWrapper>
      <Header title="GEOGRAPHY" subtitle="Sample Geography Chart" />
      <Main>
        <GeographyChart />
      </Main>
    </MainWrapper>
  );
};

export default Geography;
