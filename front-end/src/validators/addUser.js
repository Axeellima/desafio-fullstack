import * as yup from "yup";

export const addUserSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório!"),
  email: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("Este campo é obrigatório!"),
  phone: yup.string().required("Este campo é obrigatório!"),
});
