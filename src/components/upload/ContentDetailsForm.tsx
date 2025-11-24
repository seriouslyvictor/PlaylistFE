import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Save, X } from "lucide-react"

export function ContentDetailsForm() {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
          <CardDescription>
            Detalhes principais sobre o seu conteúdo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              placeholder="Ex: Midnight Rain - Lofi Beats"
              className="text-base"
            />
            <p className="text-xs text-muted-foreground">
              0 / 100 caracteres
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Descreva o conteúdo... (opcional)"
              className="min-h-[120px] resize-none"
            />
            <p className="text-xs text-muted-foreground">
              0 / 500 caracteres
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Conteúdo *</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="music">Música</SelectItem>
                  <SelectItem value="video">Vídeo</SelectItem>
                  <SelectItem value="podcast">Podcast</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duração</Label>
              <Input
                id="duration"
                placeholder="Ex: 3:45"
                className="text-base"
              />
              <p className="text-xs text-muted-foreground">
                Formato: MM:SS ou HH:MM:SS
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creator Information */}
      <Card>
        <CardHeader>
          <CardTitle>Criador / Artista</CardTitle>
          <CardDescription>
            Informações sobre quem criou este conteúdo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="creator">Selecionar Criador *</Label>
            <Select>
              <SelectTrigger id="creator">
                <SelectValue placeholder="Escolha um criador ou artista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">+ Adicionar Novo Criador</SelectItem>
                <Separator className="my-1" />
                <SelectItem value="1">Lofi Dreams</SelectItem>
                <SelectItem value="2">Chill Beats Studio</SelectItem>
                <SelectItem value="3">Ambient Soundscapes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Additional Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detalhes Adicionais</CardTitle>
          <CardDescription>
            Informações extras (opcional)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="genre">Gênero</Label>
              <Input
                id="genre"
                placeholder="Ex: Lo-fi Hip Hop"
                className="text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Ano de Lançamento</Label>
              <Input
                id="year"
                type="number"
                placeholder="Ex: 2024"
                className="text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              placeholder="Separadas por vírgula: lofi, study, chill, beats"
              className="text-base"
            />
            <p className="text-xs text-muted-foreground">
              Use tags para facilitar a busca
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-4">
        <Button variant="outline" size="lg">
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
        <Button size="lg">
          <Save className="mr-2 h-4 w-4" />
          Salvar Conteúdo
        </Button>
      </div>
    </div>
  )
}
