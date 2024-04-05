import { FC } from "react";
import Container from "../Components/Container/Container";
import Title from "../Components/Title/Title";
import SearchBar from "../Components/SearchBar/SearchBar";

const Homepage: FC = () => {
  return (
    <div>
      <Container>
        <Title />
        <SearchBar />
      </Container>
    </div>
  );
};
export default Homepage;
