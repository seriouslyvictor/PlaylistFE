import { Music, Video, Podcast, Clock, Play } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type ContentType = "music" | "video" | "podcast"

interface Track {
  id: number
  title: string
  creator: string
  type: ContentType
  duration: string
  addedAt?: string
}

interface PlaylistTrackListProps {
  tracks: Track[]
}

const contentIcons = {
  music: Music,
  video: Video,
  podcast: Podcast,
}

export function PlaylistTrackList({ tracks }: PlaylistTrackListProps) {
  return (
    <div className="px-6 pb-6">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border/50 hover:bg-transparent">
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead className="w-12"></TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Criador</TableHead>
            <TableHead className="text-right">
              <Clock className="inline h-4 w-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track, index) => {
            const Icon = contentIcons[track.type]
            return (
              <TableRow
                key={track.id}
                className="group border-none hover:bg-muted/50 cursor-pointer"
              >
                <TableCell className="text-center text-muted-foreground">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play className="hidden h-4 w-4 group-hover:inline fill-current" />
                </TableCell>
                <TableCell>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{track.title}</p>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {track.creator}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {track.duration}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
