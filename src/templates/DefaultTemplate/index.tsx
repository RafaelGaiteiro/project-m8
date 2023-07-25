import { ReactNode, useState } from "react";
import { Content, DefaultTemplateStylized, Header } from "./styles";
import { Button } from "../../UI/atoms/Button";
import { ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { useNavigate } from "react-router-dom";

interface IDefaultTemplateProps {
  children: ReactNode;
}

export function DefaultTemplate({ children }: IDefaultTemplateProps) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<boolean>(true);

  function handleTheme() {
    return theme ? dark : light;
  }

  return (
    <ThemeProvider theme={handleTheme()}>
      <DefaultTemplateStylized>
        <Header>
          <Button onClick={() => setTheme(!theme)}>Tema</Button>
          <div>
            <Button onClick={() => navigate("/")}>Form</Button>
          </div>
        </Header>
        <Content>{children}</Content>
      </DefaultTemplateStylized>
    </ThemeProvider>
  );
}
