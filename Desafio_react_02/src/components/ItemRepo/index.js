import React from "react";

import { ItemContainer, Row } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <Row>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          Ver repositório
        </a>
        <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>
          Remover
        </a>
      </Row>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
