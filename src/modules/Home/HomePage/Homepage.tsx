import { FC } from "react";
import Container from "../Components/Container/Container";
import Title from "../Components/Title/Title";
import SearchBar from "../Components/SearchBar/SearchBar";
import { AppProvider } from "../../../Context/Context";
const Homepage: FC = () => {
  return (
    <AppProvider>
      <Container>
        <Title />
        <SearchBar />
      </Container>
    </AppProvider>
  );
};
export default Homepage;
