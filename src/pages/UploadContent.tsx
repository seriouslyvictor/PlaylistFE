import { useState } from "react";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { UploadArea } from "@/components/upload/UploadArea";
import { ContentDetailsForm } from "@/components/upload/ContentDetailsForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function UploadContent() {
  const [fileSelected, setFileSelected] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    console.log("File selected:", file.name);
    setFileSelected(true);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto px-6 pb-6 flex w-full justify-center">
          <div className="container max-w-5xl py-8">
            {/* Header */}
            <div className="mb-8">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>

              <h1 className="text-4xl font-bold mb-2">Adicionar Conteúdo</h1>
              <p className="text-muted-foreground">
                Faça upload de músicas, vídeos ou podcasts para sua biblioteca
              </p>
            </div>

            {/* Content */}
            {!fileSelected ? (
              <div className="space-y-6">
                <UploadArea onFileSelect={handleFileSelect} />

                <div className="rounded-lg border bg-muted/30 p-6">
                  <h3 className="font-semibold mb-3">💡 Dicas para Upload</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use títulos descritivos e claros</li>
                    <li>• Adicione tags relevantes para facilitar a busca</li>
                    <li>• Preencha as informações do criador/artista</li>
                    <li>• Verifique se o arquivo está no formato correto</li>
                    <li>• Certifique-se de ter os direitos do conteúdo</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                {/* File Preview Card */}
                <div className="mb-6 rounded-lg border bg-card p-4 ">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <ArrowLeft className="h-6 w-6 text-primary rotate-90" />
                      </div>
                      <div>
                        <p className="font-medium">arquivo_exemplo.mp3</p>
                        <p className="text-sm text-muted-foreground">
                          3.2 MB • Pronto para upload
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setFileSelected(false)}
                    >
                      Trocar arquivo
                    </Button>
                  </div>
                </div>

                {/* Form */}
                <ContentDetailsForm />
              </div>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
