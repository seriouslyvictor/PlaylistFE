import { Upload, Music, Video, Podcast } from "lucide-react"
import { Card } from "@/components/ui/card"

interface UploadAreaProps {
  onFileSelect?: (file: File) => void
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  return (
    <Card className="border-2 border-dashed border-muted-foreground/25 bg-muted/5">
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Upload className="h-10 w-10 text-primary" />
        </div>

        <h3 className="mb-2 text-xl font-semibold">Arraste e solte o arquivo aqui</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          ou clique para selecionar do seu computador
        </p>

        <div className="mb-6 flex gap-8 text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <Music className="h-8 w-8" />
            <span className="text-xs">Música</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Video className="h-8 w-8" />
            <span className="text-xs">Vídeo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Podcast className="h-8 w-8" />
            <span className="text-xs">Podcast</span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>Formatos suportados: MP3, WAV, MP4, MOV, AAC</p>
          <p className="mt-1">Tamanho máximo: 500 MB</p>
        </div>

        <input
          type="file"
          className="hidden"
          accept="audio/*,video/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file && onFileSelect) {
              onFileSelect(file)
            }
          }}
        />
      </div>
    </Card>
  )
}
