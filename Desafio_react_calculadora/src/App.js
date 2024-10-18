import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row, Column } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [operation, setOperation] = useState("");

  // Função para adicionar números e operadores à operação
  const handleAddInput = (value) => {
    setOperation((prev) => prev + value);
    setCurrentNumber((prev) => prev + value);
  };

  // Função para limpar o campo
  const handleOnClear = () => {
    setCurrentNumber("");
    setOperation("");
  };

  // Função para calcular o resultado da operação
  const handleEquals = () => {
    try {
      const result = calculateExpression(operation);
      setCurrentNumber(result.toString());
      setOperation(result.toString());
    } catch (error) {
      setCurrentNumber("Erro");
      setOperation("");
    }
  };

  // Função para calcular raiz quadrada
  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(parseFloat(currentNumber));
      setCurrentNumber(result.toString());
      setOperation(result.toString());
    } catch (error) {
      setCurrentNumber("Erro");
      setOperation("");
    }
  };

  // Função que realiza o parse manual e calcula a operação
  const calculateExpression = (expression) => {
    const operators = expression.split(/([+\-*%/])/);
    let result = parseFloat(operators[0]);
    let operator = null;

    // Iterar sobre o array até o operador de porcentagem
    for (let i = 0; i < operators.length; i++) {
      const item = operators[i];

      if (!isNaN(item) && item !== "") {
        // Converter para número
        const valor = parseFloat(item);

        if (operator === null) {
          // Se não há operador, definir o valor inicial
          result = valor;
        } else {
          // Executar a operação anterior
          if (operator === "+") {
            result += valor;
          } else if (operator === "-") {
            result -= valor;
          } else if (operator === "*") {
            result *= valor;
          } else if (operator === "/") {
            result /= valor;
          }
        }
      } else if (item === "+" || item === "-" || item === "*" || item === "/") {
        // Guardar o operador
        operator = item;
      } else if (item === "%") {
        // Aplicar a porcentagem sobre o valor anterior
        const valorPorcentagem = parseFloat(operators[i - 1]);
        if (operator === "+") {
          result -= valorPorcentagem; // Remover o valor anterior
          result += (valorPorcentagem * result) / 100; // Adicionar a porcentagem correta
        } else if (operator === "-") {
          result += valorPorcentagem; // Reverter a subtração do valor anterior
          result -= (valorPorcentagem * result) / 100; // Subtrair a porcentagem correta
        } else if (operator === "*") {
          result /= valorPorcentagem; // Reverter a multiplicação do valor anterior
          result *= valorPorcentagem / 100; // multiplica a porcentagem correta
        } else if (operator === "/") {
          result *= valorPorcentagem; // Reverter a divisão do valor anterior
          result /= valorPorcentagem / 100; // divide a porcentagem correta
        }
      }
    }

    return result;
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} readOnly />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="√" onClick={() => handleSquareRoot()} />
          <Button label="%" onClick={() => handleAddInput("%")} />
          <Button label="/" onClick={() => handleAddInput("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddInput("7")} />
          <Button label="8" onClick={() => handleAddInput("8")} />
          <Button label="9" onClick={() => handleAddInput("9")} />
          <Button label="x" onClick={() => handleAddInput("*")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddInput("4")} />
          <Button label="5" onClick={() => handleAddInput("5")} />
          <Button label="6" onClick={() => handleAddInput("6")} />
          <Button label="-" onClick={() => handleAddInput("-")} />
        </Row>
        <Row>
          <Column>
            <Button label="1" onClick={() => handleAddInput("1")} />
            <Button label="0" onClick={() => handleAddInput("0")} />
          </Column>
          <Column>
            <Button label="2" onClick={() => handleAddInput("2")} />
            <Button label="." onClick={() => handleAddInput(".")} />
          </Column>
          <Column>
            <Button label="3" onClick={() => handleAddInput("3")} />
            <Button label="=" onClick={handleEquals} />
          </Column>
          <Column>
            <Button label="+" onClick={() => handleAddInput("+")} />
          </Column>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
