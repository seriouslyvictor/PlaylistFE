import { Music, Heart, ListMusic, Mic2, Video, Podcast, Plus } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarGroupAction,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function AppSidebar() {
  // Mock data - will be replaced with actual data from API
  const playlists = [
    { id: 1, name: "Músicas Curtidas", icon: Heart, count: 42 },
  ]

  const contentTypes = [
    { id: "music", name: "Músicas", icon: Music },
    { id: "video", name: "Vídeos", icon: Video },
    { id: "podcast", name: "Podcasts", icon: Podcast },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Music className="h-4 w-4" />
          </div>
          <span className="font-semibold">Sua Biblioteca</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Playlists Section */}
        <SidebarGroup>
          <SidebarGroupLabel>
            Playlists
            <SidebarGroupAction title="Criar Playlist">
              <Plus className="h-4 w-4" />
            </SidebarGroupAction>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {playlists.map((playlist) => (
                <SidebarMenuItem key={playlist.id}>
                  <SidebarMenuButton>
                    <playlist.icon className="h-4 w-4" />
                    <span>{playlist.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {playlist.count}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ListMusic className="h-4 w-4" />
                  <span>Criar playlist</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Content Types Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Explorar Conteúdo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentTypes.map((type) => (
                <SidebarMenuItem key={type.id}>
                  <SidebarMenuButton>
                    <type.icon className="h-4 w-4" />
                    <span>{type.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Creators Section */}
        <SidebarGroup>
          <SidebarGroupLabel>
            Criadores
            <SidebarGroupAction title="Adicionar Criador">
              <Plus className="h-4 w-4" />
            </SidebarGroupAction>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Mic2 className="h-4 w-4" />
                  <span>Todos os Criadores</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
