import { useState } from "react";
import { Input } from "../../UI/atoms/Input";
import { Label } from "../../UI/atoms/Label";
import { InputGroup } from "../../UI/atoms/InputGroup";
import { Button } from "../../UI/atoms/Button";
import { FlexContainerStylized } from "../../UI/atoms/FlexContainer/styles";
import { useForm } from "react-hook-form";
import { Form } from "../../UI/atoms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { Alert } from "../../UI/atoms/Alert";
import { Box } from "../../UI/atoms/Box";
import { DisplayChildren } from "../molecules/DisplayChildren";

export interface IData {
  name: string;
  surname: string;
  age: number;
  description?: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export function FormParent() {
  const [formData, setFormData] = useState<IData | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const schema = object({
    name: string().required("O campo nome é obrigatório."),
    surname: string().required("O campo sobrenome é obrigatório."),
    age: number()
      .typeError("Preencha o campo corretamente.")
      .positive("A idade deve ser um número positivo.")
      .integer("A idade deve ser um número inteiro.")
      .required("O campo idade é obrigatório."),
    description: string(),
    street: string().required("O campo rua é obrigatório."),
    number: number()
      .typeError("Preencha o campo corretamente.")
      .positive("O número deve ser um número positivo.")
      .integer("O número deve ser um número inteiro.")
      .required("O campo número é obrigatório."),
    neighborhood: string().required("O campo bairro é obrigatório."),
    city: string().required("O campo cidade é obrigatório."),
    state: string().required("O campo estado é obrigatório."),
    country: string().required("O campo país é obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(DataForm: IData) {
    setFormData(DataForm);
    console.log(DataForm);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  }

  return (
    <FlexContainerStylized align="center" gap="20px">
      <Box justify="center" maxwidth="600px" p="40px">
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputGroup>
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              placeholder="Digite o seu nome"
              {...register("name")}
            />
            {errors.name && (
              <Alert typeOfAlert="error">{errors.name.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              type="text"
              placeholder="Digite o seu sobrenome"
              {...register("surname")}
            />
            {errors.surname && (
              <Alert typeOfAlert="error">{errors.surname.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="age">Idade</Label>
            <Input
              type="number"
              placeholder="Digite sua idade"
              {...register("age")}
            />
            {errors.age && (
              <Alert typeOfAlert="error">{errors.age.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="description">Descrição</Label>
            <Input
              type="text"
              placeholder="Digite uma descrição"
              {...register("description")}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="street">Rua</Label>
            <Input
              type="text"
              placeholder="Digite a sua rua"
              {...register("street")}
            />
            {errors.street && (
              <Alert typeOfAlert="error">{errors.street.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="number">Número</Label>
            <Input
              type="number"
              placeholder="Digite o seu número"
              {...register("number")}
            />
            {errors.number && (
              <Alert typeOfAlert="error">{errors.number.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              type="text"
              placeholder="Digite o seu bairro"
              {...register("neighborhood")}
            />
            {errors.neighborhood && (
              <Alert typeOfAlert="error">{errors.neighborhood.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="city">Cidade</Label>
            <Input
              type="text"
              placeholder="Digite a sua cidade"
              {...register("city")}
            />
            {errors.city && (
              <Alert typeOfAlert="error">{errors.city.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="state">Estado</Label>
            <Input
              type="text"
              placeholder="Digite o seu estado"
              {...register("state")}
            />
            {errors.state && (
              <Alert typeOfAlert="error">{errors.state.message}</Alert>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="country">País</Label>
            <Input
              type="text"
              placeholder="Digite o seu país"
              {...register("country")}
            />
            {errors.country && (
              <Alert typeOfAlert="error">{errors.country.message}</Alert>
            )}
          </InputGroup>

          {showSuccess && (
            <Alert typeOfAlert="success">Formulário enviado com sucesso!</Alert>
          )}
          <Button type="submit">Enviar</Button>
        </Form>
      </Box>
      {/* Se o formData for diferente de null,
      renderize o componente DisplayChildren
      passando o formData como propriedade data. */}
      {formData && <DisplayChildren data={formData} />}
    </FlexContainerStylized>
  );
}
