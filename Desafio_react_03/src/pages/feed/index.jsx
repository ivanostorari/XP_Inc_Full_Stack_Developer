import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://sms.dio.me/api/ranking/",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3aEZSNHBRTHdqZEJxZlRtVHBfbjFQXzBfVl9adVpyUFp4R0NPazFHNERVIn0.eyJleHAiOjE3MjcyMjE5MjcsImlhdCI6MTcyNzE3ODcyNywiYXV0aF90aW1lIjoxNzI3MTE0NjkzLCJqdGkiOiIwZjc2MjA0My04NDY4LTQwNDYtYWYwZS0wN2E5NTdiNWU4ZTMiLCJpc3MiOiJodHRwczovL2F1dGguZGlvLm1lL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI4MDg0YTFlMC02M2UwLTQ3OTktODJiOS00MWJjZWJhYmNhMzUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcGEtY29yZS1jbGllbnQiLCJub25jZSI6IjljYjZjOTg5LWNiMGYtNDAwZS04ODgyLTg2MzdmMGNjYzg3YiIsInNlc3Npb25fc3RhdGUiOiJiZmNjM2JjOC1hMDc5LTRmNTEtYWZkZi1jYzJkNmNmZjgxNjMiLCJhY3IiOiIwIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6ImJmY2MzYmM4LWEwNzktNGY1MS1hZmRmLWNjMmQ2Y2ZmODE2MyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQXJ0aHVyIEFuZ2VsbyBMZW1lIFJpY2FyZG8gRGEgU2lsdmEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcnRodXJfYW5nZWxvIiwiZ2l2ZW5fbmFtZSI6IkFydGh1ciIsInV1aWQiOiIwMjYzMjcxYi1iN2U3LTQxYTUtOTI4NC0xOGIxNmY2MGI4OWYiLCJmYW1pbHlfbmFtZSI6IkFuZ2VsbyBMZW1lIFJpY2FyZG8gRGEgU2lsdmEiLCJlbWFpbCI6ImFydGh1ci5hbmdlbG9Ab3V0bG9vay5jb20ifQ.a_cC__-6O_xwd1b0Km0x9W2VhQQ3FAOF8tm9HkuZowQzj9AggB024_XTL-qOnE7MWs0AJgUIEAPY6jLtLdvido432TtXjhXGHWGBzxa1jsztDUrdnkkOkvJcCzgHDEgUqkW_fGwW0H2o-x4s5XpD2ctMl_yqV049XO-EmeW5yf9x0Sh3zbC4TiJ2d1PpoGt7GcTz6gNNrp1nbKNdmWfjCAj6FlnFH9G40rqs-uv3XmytLzsUPlRURLivydj9ZG9fc69ZRYyjBgfRmEtf2OlRt9HAo5k31ldsRYOfr1fgPNU0dxxvSbD6oefhBkj96oB-FlgQMLrUsOzTecYP_30XNw",
        },
      };

      try {
        const response = await axios.request(config);
        console.log(response.data);
        setRanking(response.data.ranking);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          {ranking.length > 0 ? (
            ranking.map((u) => (
              <UserInfo
                key={u.user.id}
                nome={u.user.name}
                image={u.user.photo}
                percentual={(u.user.meta.experience * 100) / ranking[0].user.meta.experience}
              />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
