import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp, Music, ListMusic, Users, Eye } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
} from "recharts";

export default function Analytics() {
  // Mock data for uploads over time
  const uploadTrendData = [
    { month: "Jan", uploads: 12 },
    { month: "Fev", uploads: 18 },
    { month: "Mar", uploads: 15 },
    { month: "Abr", uploads: 22 },
    { month: "Mai", uploads: 28 },
    { month: "Jun", uploads: 25 },
  ];

  // Mock data for content type distribution
  const contentTypeData = [
    { type: "Músicas", count: 45, color: "#8b5cf6" },
    { type: "Vídeos", count: 28, color: "#ec4899" },
    { type: "Podcasts", count: 17, color: "#06b6d4" },
  ];

  // Mock data for most played content
  const topContentData = [
    { name: "Midnight Rain", plays: 1240 },
    { name: "Coffee Vibes", plays: 980 },
    { name: "Study Session", plays: 756 },
    { name: "Focus Mode", plays: 645 },
    { name: "Chill Beats", plays: 521 },
  ];

  const totalContent = contentTypeData.reduce(
    (sum, item) => sum + item.count,
    0
  );

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
              <h1 className="text-4xl font-bold mb-2">Analytics</h1>
              <p className="text-muted-foreground">
                Visualize o desempenho e estatísticas do seu conteúdo
              </p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total de Conteúdos
                  </CardTitle>
                  <Music className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-lime-200">
                    {totalContent}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% em relação ao mês passado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Playlists Criadas
                  </CardTitle>
                  <ListMusic className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-lime-200">23</div>
                  <p className="text-xs text-muted-foreground">
                    +5 novas este mês
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Reproduções
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-lime-200">5,142</div>
                  <p className="text-xs text-muted-foreground">
                    +18% em relação ao mês passado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Taxa de Crescimento
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-lime-200">+24%</div>
                  <p className="text-xs text-muted-foreground">
                    Uploads nos últimos 30 dias
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Upload Trend Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Uploads por Mês</CardTitle>
                  <CardDescription>
                    Tendência de uploads nos últimos 6 meses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      uploads: {
                        label: "Uploads",
                        color: "hsl(var(--primary))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <AreaChart data={uploadTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="uploads"
                        stroke="var(--primary)"
                        fill="oklch(93.8% 0.127 124.321)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Content Type Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Tipo</CardTitle>
                  <CardDescription>
                    Proporção de músicas, vídeos e podcasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      count: {
                        label: "Quantidade",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={contentTypeData}
                        dataKey="count"
                        nameKey="type"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {contentTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                  <div className="flex justify-center gap-4 mt-4">
                    {contentTypeData.map(item => (
                      <div key={item.type} className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-muted-foreground">
                          {item.type} ({item.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Content */}
            <Card>
              <CardHeader>
                <CardTitle>Conteúdos Mais Reproduzidos</CardTitle>
                <CardDescription>
                  Top 5 conteúdos com mais visualizações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    plays: {
                      label: "Reproduções",
                      color: "hsl(var(--primary))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={topContentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="plays"
                      fill="var(--primary)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
