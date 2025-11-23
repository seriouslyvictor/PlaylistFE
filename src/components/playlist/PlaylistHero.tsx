import { Play, Shuffle, Heart, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlaylistHeroProps {
  title: string;
  description?: string;
  owner: string;
  trackCount: number;
  duration?: string;
  coverColor?: string;
}

export function PlaylistHero({
  title,
  description,
  owner,
  trackCount,
  duration,
  coverColor = "from-purple-500",
}: PlaylistHeroProps) {
  return (
    <div
      className={cn(
        "relative px-6 pt-16 pb-6",
        `bg-gradient-to-b ${coverColor} to-background`
      )}
    >
      <div className="flex items-end gap-6">
        {/* Playlist Cover - Using icon instead of image */}
        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl">
          <Clock className="h-30 w-30 text-white" />
        </div>

        {/* Playlist Info */}
        <div className="flex flex-col justify-end pb-2">
          <p className="text-sm font-semibold uppercase tracking-wider">
            Playlist
          </p>
          <h1 className="mt-2 text-6xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="mt-4 text-sm text-muted-foreground">{description}</p>
          )}
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="font-semibold">{owner}</span>
            <span>•</span>
            <span>{trackCount} músicas</span>
            {duration && (
              <>
                <span>•</span>
                <span className="text-muted-foreground">{duration}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex items-center gap-4">
        <Button
          size="icon"
          className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-400 hover:scale-105 transition-all"
        >
          <Play className="h-7 w-7 fill-current" />
          <span className="sr-only">Reproduzir</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-white/10"
        >
          <Shuffle className="h-6 w-6" />
          <span className="sr-only">Modo aleatório</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-white/10"
        >
          <Heart className="h-6 w-6" />
          <span className="sr-only">Curtir</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-white/10"
        >
          <MoreHorizontal className="h-6 w-6" />
          <span className="sr-only">Mais opções</span>
        </Button>
      </div>
    </div>
  );
}
