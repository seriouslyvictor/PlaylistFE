import { useState } from "react"
import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ContentTable } from "@/components/content/ContentTable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Plus, Filter } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ManageContent() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("all")

  // Mock data - will be replaced with API data
  const mockContents = [
    {
      id: 1,
      title: "Midnight Rain",
      creator: "Lofi Dreams",
      type: "music" as const,
      duration: "3:24",
      uploadDate: "23/11/2024",
      status: "public" as const,
    },
    {
      id: 2,
      title: "Coffee Shop Vibes",
      creator: "Chill Beats Studio",
      type: "music" as const,
      duration: "4:12",
      uploadDate: "22/11/2024",
      status: "public" as const,
    },
    {
      id: 3,
      title: "How to Focus Better",
      creator: "Productivity Podcast",
      type: "podcast" as const,
      duration: "45:30",
      uploadDate: "20/11/2024",
      status: "private" as const,
    },
    {
      id: 4,
      title: "Study Music Session",
      creator: "Focus Beats",
      type: "video" as const,
      duration: "2:15:00",
      uploadDate: "18/11/2024",
      status: "unlisted" as const,
    },
  ]

  const filteredContents = mockContents.filter((content) => {
    if (activeTab === "all") return true
    return content.type === activeTab
  })

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <div className="w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Gerenciar Conteúdos</h1>
              <p className="text-muted-foreground">
                Visualize e gerencie todos os seus conteúdos enviados
              </p>
            </div>

            {/* Filters and Actions */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar conteúdos..."
                  className="pl-10"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Select defaultValue="recent">
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Mais Recentes</SelectItem>
                    <SelectItem value="oldest">Mais Antigos</SelectItem>
                    <SelectItem value="title">Título (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Título (Z-A)</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={() => navigate("/upload")}>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Conteúdo
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">
                  Todos ({mockContents.length})
                </TabsTrigger>
                <TabsTrigger value="music">
                  Músicas ({mockContents.filter(c => c.type === "music").length})
                </TabsTrigger>
                <TabsTrigger value="video">
                  Vídeos ({mockContents.filter(c => c.type === "video").length})
                </TabsTrigger>
                <TabsTrigger value="podcast">
                  Podcasts ({mockContents.filter(c => c.type === "podcast").length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <ContentTable contents={filteredContents} />
              </TabsContent>
            </Tabs>

            {/* Stats */}
            {filteredContents.length > 0 && (
              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <p>
                  Mostrando {filteredContents.length} de {mockContents.length} conteúdos
                </p>
                <p>
                  Total: {mockContents.length} arquivos
                </p>
              </div>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
