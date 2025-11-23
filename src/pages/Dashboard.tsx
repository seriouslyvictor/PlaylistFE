import { useAuthStore } from "@/store/authStore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"

export default function Dashboard() {
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    window.location.href = "/login"
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-2xl">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Bem-vindo ao Gerenciador de Playlists
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Usuário Logado:</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Nome:</strong> {user?.nome}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> {user?.email}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>ID:</strong> {user?.id}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Esta é a página principal do aplicativo. Em breve teremos:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Gerenciamento de Playlists</li>
                <li>Gerenciamento de Conteúdos</li>
                <li>Gerenciamento de Criadores</li>
              </ul>
            </div>

            <Button onClick={handleLogout} variant="outline" className="w-full">
              Sair
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
