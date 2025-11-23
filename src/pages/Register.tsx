import { Music } from "lucide-react";
import { RegisterForm } from "@/components/register-form";
import registerSplash from "@/assets/register_splash.jpg";

export default function Register() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="grid min-h-svh w-full max-w-[1440px] lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="/" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <Music className="size-4" />
              </div>
              Gerenciador de Playlists
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-96">
              <RegisterForm />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src={registerSplash}
            alt="Comece a organizar suas músicas"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]"
          />
        </div>
      </div>
    </div>
  );
}
