import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";

import { Container, Content, Row, Column } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updatedRepos);
  };

  return (
    <Container>
      <Content>
        <img src={gitLogo} width={72} height={72} alt="github logo" />
        <h2>Insira perfil/repositório do github</h2>
        <Row>
          <Input
            value={currentRepo}
            onChange={(e) => setCurrentRepo(e.target.value)}
          />
          <Column>
            <Button onClick={handleSearchRepo} />
          </Column>
        </Row>
        {repos.map((repo) => (
              <ItemRepo
                key={repo.id}
                repo={repo}
                handleRemoveRepo={handleRemoveRepo}
              />
            ))}
      </Content>
    </Container>
  );
}

export default App;
