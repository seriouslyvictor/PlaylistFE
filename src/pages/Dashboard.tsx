import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />

        {/* Main content area */}
        <main className="flex-1">
          <div className="container py-6">
            <div className="flex items-center gap-2 mb-4">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-3xl font-bold">Bem-vindo ao Gerenciador de Playlists</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Organize suas músicas, crie playlists e gerencie seus conteúdos favoritos
            </p>

            {/* Placeholder content - will be replaced with actual dashboard content */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Suas Playlists</h3>
                <p className="text-sm text-muted-foreground">
                  Em breve você poderá visualizar e gerenciar suas playlists aqui
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Conteúdos</h3>
                <p className="text-sm text-muted-foreground">
                  Explore e adicione novos conteúdos à sua biblioteca
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Criadores</h3>
                <p className="text-sm text-muted-foreground">
                  Descubra seus artistas e criadores favoritos
                </p>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
