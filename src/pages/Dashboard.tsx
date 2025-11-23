import { DashboardHeader } from "@/components/layout/DashboardHeader"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { PlaylistHero } from "@/components/playlist/PlaylistHero"
import { PlaylistTrackList } from "@/components/playlist/PlaylistTrackList"
import { useAuthStore } from "@/store/authStore"

export default function Dashboard() {
  const { user } = useAuthStore()

  // Mock data for Lofi playlist
  const mockTracks = [
    {
      id: 1,
      title: "Midnight Rain",
      creator: "Lofi Dreams",
      type: "music" as const,
      duration: "3:24",
    },
    {
      id: 2,
      title: "Coffee Shop Vibes",
      creator: "Chill Beats Studio",
      type: "music" as const,
      duration: "4:12",
    },
    {
      id: 3,
      title: "Peaceful Morning",
      creator: "Ambient Soundscapes",
      type: "music" as const,
      duration: "2:58",
    },
    {
      id: 4,
      title: "Study Session",
      creator: "Focus Beats",
      type: "music" as const,
      duration: "5:03",
    },
    {
      id: 5,
      title: "Rainy Day Thoughts",
      creator: "Lofi Dreams",
      type: "music" as const,
      duration: "3:47",
    },
    {
      id: 6,
      title: "Late Night Coding",
      creator: "Productivity Sounds",
      type: "music" as const,
      duration: "4:28",
    },
    {
      id: 7,
      title: "Sunset Boulevard",
      creator: "Chill Beats Studio",
      type: "music" as const,
      duration: "3:15",
    },
    {
      id: 8,
      title: "Deep Focus Mode",
      creator: "Focus Beats",
      type: "music" as const,
      duration: "6:02",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <PlaylistHero
            title="Lofi para foco/estudo/relaxamento"
            description="Músicas relaxantes perfeitas para manter o foco nos estudos ou trabalho"
            owner={user?.nome || "Você"}
            trackCount={mockTracks.length}
            duration="aproximadamente 33 min"
            coverColor="from-purple-500"
          />

          <PlaylistTrackList tracks={mockTracks} />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
