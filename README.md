# zanoti.dev

Site pessoal e portfólio de Renan Zanoti, desenvolvido com Next.js 16, React 19 e TypeScript. O projeto apresenta experiência profissional, projetos desenvolvidos, artigos do blog e informações sobre empresas onde trabalhou.

## 🚀 Tecnologias

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) com App Router
- **React**: 19.2.4
- **TypeScript**: 5.9.3
- **Estilização**: Tailwind CSS 3.4.19
- **Animações**: Framer Motion 12.34.2
- **UI Components**: Headless UI 2.2.9
- **Ícones**: Lucide React 0.575.0
- **Analytics**: PostHog
- **Gerenciador de Pacotes**: pnpm 10.13.1+ (monorepo com workspaces)
- **Build Tool**: Turbopack (modo desenvolvimento)

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm 10.13.1+ (gerenciador de pacotes)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd zanoti.dev
```

2. Instale as dependências:
```bash
pnpm install
```

## 🎯 Scripts Disponíveis

### Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento com Turbopack
pnpm dev
```

### Build e Produção
```bash
# Cria build de produção
pnpm build

# Inicia servidor de produção
pnpm start
```

### Qualidade de Código
```bash
# Formata código com Prettier
pnpm format

# Verifica formatação
pnpm format:check

# Executa lint em todos os pacotes
pnpm lint

# Verifica tipos TypeScript
pnpm type-check
```

### Formatação Específica
```bash
# Formata apenas arquivos TypeScript/JavaScript
pnpm format:code

# Formata apenas arquivos TypeScript
pnpm format:ts

# Formata apenas arquivos JavaScript
pnpm format:js

# Formata apenas arquivos JSON
pnpm format:json

# Formata apenas arquivos CSS
pnpm format:css
```

## 📁 Estrutura do Projeto

```
zanoti.dev/
├── apps/
│   └── web/                    # Aplicação Next.js principal
│       ├── src/
│       │   ├── app/            # App Router do Next.js
│       │   │   ├── (site)/     # Rotas do site
│       │   │   │   ├── about/          # Página sobre
│       │   │   │   ├── blog/           # Artigos do blog
│       │   │   │   ├── companies/      # Páginas de empresas
│       │   │   │   ├── projects/       # Páginas de projetos
│       │   │   │   ├── work/           # Experiência profissional
│       │   │   │   └── today-studies/  # Estudos do dia
│       │   │   ├── layout.tsx          # Layout raiz
│       │   │   └── providers/          # Providers React
│       │   ├── components/     # Componentes reutilizáveis
│       │   │   ├── content/    # Componentes de conteúdo
│       │   │   └── QuickAccess/# Componente de acesso rápido
│       │   ├── constants/      # Constantes e dados
│       │   ├── contexts/       # Contextos React (Theme)
│       │   ├── helpers/        # Funções auxiliares
│       │   ├── hooks/          # Custom hooks
│       │   ├── styles/         # Estilos globais
│       │   └── utils/          # Utilitários
│       ├── public/             # Arquivos estáticos
│       │   ├── documents/      # Documentos (ex: currículo)
│       │   ├── icons/          # Ícones SVG
│       │   └── images/        # Imagens
│       └── next.config.ts      # Configuração Next.js
├── packages/                   # Pacotes compartilhados (futuro)
├── scripts/                    # Scripts utilitários
│   └── check-deps.js          # Verificador de dependências
├── pnpm-workspace.yaml        # Configuração do monorepo
└── package.json               # Configuração raiz
```

## ✨ Funcionalidades

### 🎨 Tema Claro/Escuro
- Suporte a tema claro, escuro e sistema
- Persistência da preferência no localStorage
- Transição suave entre temas
- Botão flutuante para alternância rápida

### 📝 Blog
- Artigos sobre desenvolvimento front-end
- Tópicos: migração de sistemas legados, monorepo, Web3, experiência do desenvolvedor

### 💼 Portfólio
- Páginas detalhadas de projetos desenvolvidos
- Informações sobre empresas onde trabalhou
- Destaque de tecnologias e resultados alcançados

### 🔍 SEO
- Metadata otimizada
- Structured Data (JSON-LD) para Person e WebSite
- Sitemap automático
- Robots.txt configurado

### 📱 Responsivo
- Design totalmente responsivo
- Otimizado para mobile, tablet e desktop

### ⚡ Performance
- Otimizações de build com Turbopack
- Lazy loading de componentes pesados
- Otimização de imports de pacotes (lucide-react, framer-motion)
- Processamento de SVGs como componentes React

## 🔧 Configurações Importantes

### Next.js Config
- **Turbopack**: Habilitado para desenvolvimento mais rápido
- **SVG Loader**: Configurado para importar SVGs como componentes React
- **PostHog**: Rewrites configurados para analytics
- **Monorepo**: `outputFileTracingRoot` configurado para rastreamento correto de arquivos

### TypeScript
- Configuração base compartilhada (`tsconfig.base.json`)
- Configurações específicas por app/pacote

### ESLint & Prettier
- Configuração compartilhada no monorepo
- Integração com Next.js ESLint config
- Prettier com plugin de ordenação de imports

## 📦 Monorepo

O projeto utiliza pnpm workspaces para gerenciar múltiplos pacotes:

- **apps/web**: Aplicação Next.js principal
- **packages/**: Pacotes compartilhados (estrutura preparada para futuras expansões)

## 🎯 Próximos Passos

- [ ] Adicionar testes (Jest/Vitest)
- [ ] Implementar pacotes compartilhados
- [ ] Adicionar CI/CD
- [ ] Melhorar documentação de componentes

## 📄 Licença

Este projeto é privado e pessoal.

## 👤 Autor

**Renan Zanoti**
- Desenvolvedor Front-End especializado em modernizar sistemas legados
- Experiência em liderança de equipes e criação de design systems

---

Desenvolvido com ❤️ usando Next.js e TypeScript
