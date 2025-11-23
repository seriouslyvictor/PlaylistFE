import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authService } from "@/services/auth.service"
import { useAuthStore } from "@/store/authStore"

// Validation schema
const registerSchema = z
  .object({
    nome: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
    email: z.string().email("Endereço de email inválido"),
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  })

type RegisterFormData = z.infer<typeof registerSchema>

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const login = useAuthStore((state) => state.login)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { confirmarSenha, ...registerData } = data
      console.log("Dados enviados para registro:", registerData)
      const response = await authService.register(registerData)

      // Auto login after successful registration
      login(response.usuario)
      setSuccess(true)
      console.log("Registro bem-sucedido:", response)
      // TODO: Redirect to dashboard after registration
    } catch (err: any) {
      console.error("Erro no registro:", err)
      console.error("Dados do erro:", err.response?.data)
      console.error("Status:", err.response?.status)
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.title ||
        err.response?.statusText ||
        "Falha no registro. Tente novamente."
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Criar uma conta</CardTitle>
          <CardDescription>
            Digite suas informações abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-md bg-green-500/10 p-3 text-sm text-green-600">
                  Conta criada com sucesso! Redirecionando...
                </div>
              )}

              <Field>
                <FieldLabel htmlFor="nome">Nome</FieldLabel>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  {...register("nome")}
                  disabled={isLoading}
                />
                {errors.nome && (
                  <p className="text-sm text-destructive">{errors.nome.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="senha">Senha</FieldLabel>
                <Input
                  id="senha"
                  type="password"
                  {...register("senha")}
                  disabled={isLoading}
                />
                {errors.senha && (
                  <p className="text-sm text-destructive">{errors.senha.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmarSenha">Confirmar Senha</FieldLabel>
                <Input
                  id="confirmarSenha"
                  type="password"
                  {...register("confirmarSenha")}
                  disabled={isLoading}
                />
                {errors.confirmarSenha && (
                  <p className="text-sm text-destructive">
                    {errors.confirmarSenha.message}
                  </p>
                )}
              </Field>

              <Field>
                <Button type="submit" disabled={isLoading || success}>
                  {isLoading ? "Criando conta..." : "Criar conta"}
                </Button>
                <FieldDescription className="text-center">
                  Já tem uma conta? <a href="#" className="underline">Entre aqui</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
