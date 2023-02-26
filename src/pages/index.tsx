import { Input } from "@/components/Form/Input";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";


type SignInFormData = {
  email?: string;
  password?: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail Obrigatório').email("E-mail Inválido"),
  password: yup.string().required('Senha Obrigatóia'),
})


export default function SingIn() {

  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
    
  }

  return (
    
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius="8"
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input type="email" 
            label="E-mail"
            error={formState.errors.email}
             {...register('email')} 
             />
            <Input type={"password"} label="Password" {...register('password')} error={formState.errors.password}/>
          </Stack>

          <Button
                type="submit"
                mt="6"
                colorScheme={"pink"}
                isLoading={formState.isSubmitting}
             >
            Entrar
          </Button>
        </Flex>
      </Flex>
    
  );
}
