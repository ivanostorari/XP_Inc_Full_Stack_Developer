import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { MdFace6, MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Termos,
  FazerLogin,
  Wrapper,
  FormContent,
} from "./styles";

const Cadastro = () => {
  const onSubmit = async (formData) => {
    try {
      const response = await api.post("http://localhost:8001/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Formulário salvo com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao salvar o formulário:", error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <FormContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="Nome completo"
                  leftIcon={<MdFace6 />}
                  name="nome"
                  control={control}
                />
                {errors.nome && <span>Nome completo é obrigatório</span>}
                <Input
                  placeholder="E-mail"
                  leftIcon={<MdEmail />}
                  name="email"
                  control={control}
                />
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input
                  type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock />}
                  name="senha"
                  control={control}
                />
                {errors.senha && <span>Senha é obrigatório</span>}
                <Button
                  title="Criar minha conta"
                  variant="secondary"
                  type="submit"
                />
              </form>
            </FormContent>
            <Termos>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Termos>
            <FazerLogin>
              Já tenho conta. <a href="./login">Fazer login</a>
            </FazerLogin>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
