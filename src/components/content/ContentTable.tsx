import { Music, Video, Podcast, MoreVertical, Edit, Trash2, Eye } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ContentType = "music" | "video" | "podcast"

interface Content {
  id: number
  title: string
  creator: string
  type: ContentType
  duration: string
  uploadDate: string
  status: "public" | "private" | "unlisted"
}

interface ContentTableProps {
  contents: Content[]
}

const contentIcons = {
  music: Music,
  video: Video,
  podcast: Podcast,
}

const contentTypeLabels = {
  music: "Música",
  video: "Vídeo",
  podcast: "Podcast",
}

const statusLabels = {
  public: "Público",
  private: "Privado",
  unlisted: "Não listado",
}

const statusVariants = {
  public: "default" as const,
  private: "secondary" as const,
  unlisted: "outline" as const,
}

export function ContentTable({ contents }: ContentTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Conteúdo</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data de Upload</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-12">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Music className="h-12 w-12 opacity-50" />
                  <p>Nenhum conteúdo encontrado</p>
                  <p className="text-sm">Comece fazendo upload do seu primeiro arquivo</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            contents.map((content) => {
              const Icon = contentIcons[content.type]
              return (
                <TableRow key={content.id} className="group">
                  <TableCell>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{content.title}</p>
                      <p className="text-sm text-muted-foreground">{content.creator}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {contentTypeLabels[content.type]}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[content.status]}>
                      {statusLabels[content.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {content.uploadDate}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {content.duration}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Ações</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}
