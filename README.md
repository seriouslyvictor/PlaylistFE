# 🎵 Gerenciador de Playlists - Frontend

Interface web moderna para gerenciamento de playlists, músicas, vídeos e podcasts. Construído com React, TypeScript e shadcn/ui.

## 📋 Sobre o Projeto

Este é o frontend do sistema de gerenciamento de playlists, um projeto educacional desenvolvido para demonstrar conceitos modernos de desenvolvimento web. A aplicação fornece uma interface intuitiva inspirada no Spotify para criar e gerenciar playlists, adicionar conteúdos e organizar criadores.

**⚠️ IMPORTANTE**: Este frontend funciona em conjunto com a API backend. Certifique-se de ter o backend rodando antes de iniciar o frontend.

**Backend Repository**: [https://github.com/seriouslyvictor/webAPI](https://github.com/seriouslyvictor/webAPI)

## 🚀 Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Roteamento client-side

### UI/UX
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones
- **Radix UI** - Primitivas de UI acessíveis

### Gerenciamento de Estado
- **Zustand** - Gerenciamento de estado global
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Requisições HTTP
- **Axios** - Cliente HTTP

## ✨ Funcionalidades

### Autenticação
- ✅ Login com email e senha
- ✅ Registro de novos usuários
- ✅ Persistência de sessão com localStorage
- ✅ Rotas protegidas

### Interface
- ✅ Dashboard inspirado no Spotify
- ✅ Sidebar colapsável com navegação
- ✅ Header com busca e ações rápidas
- ✅ Tema claro/escuro (Dark Mode)
- ✅ Design responsivo (mobile, tablet, desktop)

### Playlists
- ✅ Visualização de playlists
- ✅ Hero section com informações da playlist
- ✅ Lista de músicas/conteúdos
- 🔜 Criar novas playlists
- 🔜 Adicionar/remover conteúdos
- 🔜 Editar informações da playlist

### Conteúdos
- ✅ Suporte para músicas, vídeos e podcasts
- 🔜 Upload de novos conteúdos
- 🔜 Gerenciamento de conteúdos

### Criadores
- ✅ Seção de criadores/artistas
- 🔜 Adicionar novos criadores
- 🔜 Visualizar conteúdos por criador

## 📦 Instalação

### Pré-requisitos

- **Node.js** 18+ e npm/pnpm/yarn
- **Backend API** rodando em `http://localhost:5077`

### Passo a Passo

1. **Clone o repositório**
```bash
git clone <repository-url>
cd PlaylistFE
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**

O projeto já está configurado para conectar com o backend em `http://localhost:5077/api/`. Se necessário, ajuste a URL base em `src/services/api.ts`.

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento (Vite)

# Build
npm run build        # Compila o projeto para produção
npm run preview      # Preview do build de produção

# Linting
npm run lint         # Executa ESLint para verificar código
```

## 📁 Estrutura do Projeto

```
PlaylistFE/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/
│   │   ├── layout/          # Componentes de layout (Header, Sidebar)
│   │   ├── playlist/        # Componentes de playlist
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   ├── mode-toggle.tsx
│   │   └── theme-provider.tsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── services/            # Serviços e chamadas à API
│   │   ├── api.ts
│   │   └── auth.service.ts
│   ├── store/               # Zustand stores
│   │   └── authStore.ts
│   ├── types/               # Definições TypeScript
│   │   └── usuario.ts
│   ├── lib/                 # Utilitários
│   │   └── utils.ts
│   ├── App.tsx              # Componente principal com rotas
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── public/                  # Arquivos públicos
├── components.json          # Configuração shadcn/ui
├── tailwind.config.js       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── vite.config.ts           # Configuração Vite
```

## 🔐 Autenticação

A aplicação usa um sistema de autenticação simplificado (educacional):

- **Usuários de teste** (do backend):
  - Email: `joao@email.com` / Senha: `senha123`
  - Email: `maria@email.com` / Senha: `senha456`

- **Criar nova conta**: Use o formulário de registro

⚠️ **Nota de Segurança**: Este é um projeto educacional. Em produção, seria necessário:
- Implementar JWT tokens
- Hash de senhas no backend
- HTTPS
- Refresh tokens
- Rate limiting

## 🎨 Tema e Customização

### Dark Mode

O projeto inclui suporte completo para tema claro/escuro:

- **Alternar tema**: Clique no ícone sol/lua no header
- **Opções**: Light, Dark, System (segue preferência do SO)
- **Persistência**: Preferência salva em localStorage

### Personalização de Cores

As cores podem ser ajustadas em `src/index.css`:

```css
:root {
  --primary: ...;
  --secondary: ...;
  /* ... outras variáveis */
}
```

## 🔌 Integração com Backend

### Configuração da API

O cliente HTTP está configurado em `src/services/api.ts`:

```typescript
const api = axios.create({
  baseURL: 'http://localhost:5077/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})
```

### Endpoints Utilizados

- `POST /api/auth/login` - Login de usuários
- `POST /api/auth/register` - Registro de usuários
- `GET /api/playlists` - Listar playlists
- `GET /api/conteudos` - Listar conteúdos
- `GET /api/criadores` - Listar criadores

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Mobile**: < 768px - Menu hamburguer, sidebar colapsável
- **Tablet**: 768px - 1024px - Layout adaptativo
- **Desktop**: > 1024px - Todas as features visíveis

## 🐛 Troubleshooting

### Backend não está respondendo

```bash
# Verifique se o backend está rodando
curl http://localhost:5077/api/

# Inicie o backend se necessário
cd ../webAPI
dotnet run
```

### Erro de CORS

O backend já possui CORS habilitado. Se encontrar problemas, verifique as configurações no backend.

### Erros de build

```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install

# Limpe cache do Vite
rm -rf .vite
```

## 🚧 Próximos Passos

- [ ] Implementar criação de playlists
- [ ] Adicionar funcionalidade de upload de conteúdos
- [ ] Página de gerenciamento de conteúdos
- [ ] Página de criadores com filtros
- [ ] Player de áudio/vídeo
- [ ] Busca funcional
- [ ] Favoritos/curtidas
- [ ] Compartilhamento de playlists
- [ ] Drag & drop para reordenar músicas
- [ ] Testes unitários e E2E

## 📚 Recursos e Documentação

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Router](https://reactrouter.com)

## 👥 Contribuindo

Este é um projeto educacional. Contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é educacional e está disponível para fins de aprendizado.

## 🙏 Agradecimentos

- Backend API: [webAPI Repository](https://github.com/seriouslyvictor/webAPI)
- Design inspirado no Spotify
- shadcn/ui pela biblioteca de componentes
- Comunidade open source

---

**Desenvolvido como projeto educacional** 📚🎓
