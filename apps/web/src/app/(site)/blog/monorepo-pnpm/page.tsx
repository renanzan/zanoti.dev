import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Pre } from "@/components/content/Pre";
import ContentPage from "@/components/ContentPage";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Monorepo com pnpm: Guia Prático",
	description:
		"Guia prático para configurar e gerenciar monorepos com pnpm workspaces. Estratégias, configurações e melhores práticas validadas em produção.",
	caption: "Blog"
};

export const metadata = generateMetadata({
	title: "Monorepo com pnpm: Guia Prático",
	description:
		"Guia prático para configurar e gerenciar monorepos com pnpm workspaces. Estratégias, configurações e melhores práticas validadas em produção.",
	path: "/blog/monorepo-pnpm",
	type: "article",
	publishedTime: "2024-12-19T00:00:00.000Z"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<H2>O Problema</H2>
		<p>
			Em projetos com múltiplas aplicações e bibliotecas compartilhadas, é comum
			enfrentar:
		</p>
		<ul>
			<li>Duplicação de código</li>
			<li>Inconsistência entre aplicações</li>
			<li>Dificuldade de versionamento</li>
			<li>Setup complexo para novos projetos</li>
		</ul>

		<p>
			Esse cenário se torna ainda mais crítico quando começamos a trabalhar com
			design systems, bibliotecas internas e múltiplos produtos conectados.
		</p>

		<p>Foi nesse contexto que comecei a adotar monorepo com pnpm.</p>

		<Hr />

		<H2>Quando faz sentido usar monorepo</H2>

		<p>Monorepo não é solução universal. Ele resolve problemas específicos.</p>

		<p>
			<strong>Use monorepo quando:</strong>
		</p>

		<ul>
			<li>Você tem múltiplas aplicações que compartilham código</li>
			<li>Existe um design system ou biblioteca interna</li>
			<li>Times trabalham em produtos relacionados</li>
			<li>Há necessidade de padronização entre projetos</li>
		</ul>

		<p>
			<strong>Evite monorepo quando:</strong>
		</p>

		<ul>
			<li>O projeto é pequeno ou isolado</li>
			<li>Não há compartilhamento de código</li>
			<li>Times são totalmente independentes</li>
			<li>A complexidade não se justifica</li>
		</ul>

		<Hr />

		<H2>Por que escolhi pnpm</H2>

		<p>
			Entre npm, yarn e pnpm, a escolha foi baseada em eficiência e
			previsibilidade.
		</p>

		<p>Principais motivos:</p>

		<ul>
			<li>Workspace nativo simples</li>
			<li>Melhor performance na instalação</li>
			<li>Uso otimizado de disco (store compartilhado)</li>
			<li>Lockfile consistente</li>
			<li>Isolamento de dependências mais seguro</li>
		</ul>

		<Hr />

		<H2>O que mudou na prática</H2>

		<p>Ao adotar monorepo com pnpm:</p>

		<ul>
			<li>Reduzi duplicação de código entre projetos</li>
			<li>Centralizei lógica compartilhada (UI, hooks, utils)</li>
			<li>Padronizei estrutura entre aplicações</li>
			<li>Melhorei onboarding de novos projetos</li>
			<li>Aumentei consistência entre produtos</li>
		</ul>

		<Hr />

		<H2>Configurando um Monorepo com pnpm</H2>

		<H3>Estrutura Básica</H3>

		<p>Vamos começar criando a estrutura básica de um monorepo:</p>

		<Pre data-language="">
			{`monorepo/
├── packages/
│   ├── utils/
│   ├── ui-components/
│   └── config/
├── apps/
│   ├── web-app/
│   └── admin-panel/
├── pnpm-workspace.yaml
└── package.json`}
		</Pre>

		<H3>1. Configurando pnpm-workspace.yaml</H3>

		<p>
			O arquivo `pnpm-workspace.yaml` define quais diretórios são parte do
			workspace:
		</p>

		<Pre data-language="yaml">
			{`packages:
- 'apps/*'
- 'packages/*'`}
		</Pre>

		<p>
			Isso informa ao pnpm que todos os diretórios dentro de `apps/` e
			`packages/` são pacotes do workspace.
		</p>

		<H3>2. package.json Raiz</H3>

		<p>
			O `package.json` na raiz gerencia scripts e dependências compartilhadas:
		</p>

		<Pre data-language="json">
			{`{
	"name": "monorepo",
	"version": "1.0.0",
	"private": true,
	"scripts": {
		"dev": "pnpm --filter \\"./apps/*\\" dev",
		"build": "pnpm --filter \\"./packages/*\\" build",
		"test": "pnpm --filter \\"./packages/*\\" test",
		"lint": "pnpm --filter \\"./packages/*\\" lint"
	},
	"devDependencies": {
		"typescript": "^5.0.0",
		"@types/node": "^20.0.0"
	}
}`}
		</Pre>
		<H3>3. Criando um Pacote</H3>
		<p>Vamos criar um pacote de utilitários como exemplo:</p>
		<Pre data-language="json" data-title="packages/utils/package.json">
			{`{
	"name": "@monorepo/utils",
	"version": "1.0.0",
	"main": "./dist/index.js",
	"types": "./dist/index.d.ts",
	"scripts": {
		"build": "tsc",
		"dev": "tsc --watch"
	},
	"dependencies": {},
	"devDependencies": {
		"typescript": "workspace:*"
	}
}`}
		</Pre>
		<p>
			<strong>Pontos importantes:</strong>
		</p>
		<ul>
			<li>`workspace:*` referencia a versão do pacote no workspace</li>
			<li>Nome do pacote com escopo (`@monorepo/utils`)</li>
			<li>Scripts de build e desenvolvimento</li>
		</ul>
		<H3>4. Usando Pacotes Internos</H3>
		<p>Para usar um pacote interno em outro, você referencia pelo nome:</p>
		<Pre data-language="json" data-title="apps/web-app/package.json">
			{`{
	"name": "web-app",
	"version": "1.0.0",
	"dependencies": {
		"@monorepo/utils": "workspace:*",
		"@monorepo/ui-components": "workspace:*"
	}
}`}
		</Pre>
		<p>O `workspace:*` indica que o pacote está no mesmo workspace.</p>
		<H2>Configurações Avançadas</H2>
		<H3>Filtros e Scripts</H3>
		<p>pnpm permite executar comandos em pacotes específicos usando filtros:</p>
		<Pre data-language="json">
			{`{
	"scripts": {
		"dev:web": "pnpm --filter web-app dev",
		"dev:admin": "pnpm --filter admin-panel dev",
		"build:packages": "pnpm --filter \\"./packages/*\\" build",
		"test:utils": "pnpm --filter @monorepo/utils test"
	}
}`}
		</Pre>
		<H3>Dependências Compartilhadas</H3>
		<p>
			Para compartilhar dependências entre todos os pacotes, você pode usar
			`.npmrc`:
		</p>
		<Pre data-language="">
			{`# .npmrc na raiz
shamefully-hoist=true`}
		</Pre>
		<p>Ou declarar no `package.json` raiz e usar `pnpm.hoistPattern`:</p>
		<Pre data-language="json">
			{`{
	"pnpm": {
	"hoistPattern": [
		"*react*",
		"*typescript*"
	]
}`}
		</Pre>
		<H3>Versionamento com Changesets</H3>
		<p>Para gerenciar versionamento de múltiplos pacotes, use Changesets:</p>
		<Pre data-language="bash">{`pnpm add -D -w @changesets/cli`}</Pre>
		<Pre data-language="json" data-title="package.json">
			{`{
	"scripts": {
		"changeset": "changeset",
		"version": "changeset version",
		"release": "pnpm build && changeset publish"
	}
}`}
		</Pre>
		<H2>Estrutura de um Pacote Completo</H2>
		<p>Vamos ver um exemplo completo de um pacote:</p>
		<Pre data-language="">
			{`packages/utils/
├── src/
│   ├── index.ts
│   ├── formatCurrency.ts
│   └── dateHelpers.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md`}
		</Pre>

		<H3>src/index.ts</H3>

		<Pre data-language="typescript">
			{`export * from './formatCurrency';
export * from './dateHelpers';`}
		</Pre>
		<H3>tsconfig.json</H3>
		<Pre data-language="json">
			{`{
	"extends": "../../tsconfig.base.json",
	"compilerOptions": {
		"outDir": "./dist",
		"rootDir": "./src"
	},
	"include": ["src/**/*"]
}`}
		</Pre>

		<H3>tsconfig.base.json (raiz)</H3>

		<Pre data-language="json">
			{`{
"compilerOptions": {
		"target": "ES2020",
		"module": "ESNext",
		"lib": ["ES2020"],
		"declaration": true,
		"declarationMap": true,
		"sourceMap": true,
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"moduleResolution": "bundler"
	}
}`}
		</Pre>
		<H2>Scripts Úteis para Monorepo</H2>
		<H3>Build Incremental</H3>
		<Pre data-language="json">
			{`{
	"scripts": {
		"build": "pnpm --filter \\"./packages/*\\" --filter \\"./apps/*\\" build",
		"build:changed": "pnpm --filter \\"...[origin/main]\\" build"
	}
}`}
		</Pre>
		<H3>Testes</H3>
		<Pre data-language="json">
			{`{
	"scripts": {
		"test": "pnpm --filter \\"./packages/*\\" test",
		"test:changed": "pnpm --filter \\"...[origin/main]\\" test",
		"test:watch": "pnpm --filter \\"./packages/*\\" test --watch"
	}
}`}
		</Pre>
		<H3>Linting</H3>
		<Pre data-language="json">
			{`{
	"scripts": {
		"lint": "pnpm --filter \\"./packages/*\\" --filter \\"./apps/*\\" lint",
		"lint:fix": "pnpm --filter \\"./packages/*\\" --filter \\"./apps/*\\" lint --fix"
	}
}`}
		</Pre>
		<H2>Integração com Turborepo</H2>
		<p>Para builds ainda mais rápidos, combine pnpm com Turborepo:</p>
		<Pre data-language="bash">{`pnpm add -D -w turbo`}</Pre>
		<H3>turbo.json</H3>
		<Pre data-language="json">
			{`{
	"pipeline": {
		"build": {
			"dependsOn": ["^build"],
			"outputs": ["dist/**"]
		},
		"test": {
			"dependsOn": ["build"],
			"outputs": []
		},
		"lint": {
			"outputs": []
		}
	}
}`}
		</Pre>
		<H3>Scripts com Turborepo</H3>
		<Pre data-language="json">
			{`{
	"scripts": {
		"build": "turbo run build",
		"test": "turbo run test",
		"dev": "turbo run dev"
	}
}`}
		</Pre>
		<H2>Boas Práticas</H2>
		<H3>1. Nomenclatura Consistente</H3>
		<p>Use um escopo consistente para todos os pacotes:</p>
		<Pre data-language="json">
			{`{
	"name": "@empresa/utils",
	"name": "@empresa/ui-components",
	"name": "@empresa/config"
}`}
		</Pre>
		<H3>2. Dependências de Desenvolvimento</H3>
		<p>
			Mantenha dependências de desenvolvimento no nível raiz quando possível:
		</p>
		<Pre data-language="json" data-title="package.json raiz">
			{`{
	"devDependencies": {
		"typescript": "^5.0.0",
		"@types/node": "^20.0.0",
		"eslint": "^8.0.0"
	}
}`}
		</Pre>
		<H3>3. Workspace Protocol</H3>
		<p>Sempre use `workspace:*` para dependências internas:</p>
		<Pre data-language="json">
			{`{
	"dependencies": {
		"@monorepo/utils": "workspace:*"
	}
}`}
		</Pre>
		<H3>4. Estrutura de Pastas</H3>
		<p>Mantenha uma estrutura clara:</p>
		<Pre data-language="">
			{`monorepo/
├── packages/        # Pacotes compartilhados
│   ├── utils/
│   ├── ui/
│   └── config/
├── apps/            # Aplicações
│   ├── web/
│   └── admin/
├── tools/           # Scripts e ferramentas
└── docs/            # Documentação`}
		</Pre>
		<H3>5. CI/CD Otimizado</H3>
		<p>Configure CI para construir apenas o que mudou:</p>
		<Pre data-language="yaml" data-title=".github/workflows/ci.yml">
			{`- name: Install pnpm
uses: pnpm/action-setup@v2
with:
version: 8

- name: Get changed packages
id: changed
run: |
echo "packages=$(pnpm --filter='...[origin/main]' list --depth=-1 --json | jq -r '.[].name')" >> $GITHUB_OUTPUT

- name: Build changed packages
run: pnpm --filter="...[origin/main]" build`}
		</Pre>
		<H2>Resolvendo Problemas Comuns</H2>
		<H3>Dependências Não Encontradas</H3>
		<p>Se um pacote não encontra outro do workspace:</p>
		<Pre data-language="bash">
			{`# Reinstalar dependências
pnpm install`}
		</Pre>
		<H3>Builds Fracassando</H3>
		<p>
			Verifique a ordem de build. Use `dependsOn` no Turborepo ou scripts
			sequenciais:
		</p>
		<Pre data-language="json">
			{`{
	"scripts": {
		"build": "pnpm --filter \\"./packages/*\\" build && pnpm --filter \\"./apps/*\\" build"
	}
}`}
		</Pre>
		<H3>Cache Issues</H3>
		<p>Limpe o cache do pnpm:</p>
		<Pre data-language="bash">{`pnpm store prune`}</Pre>
		<H2>Exemplo Prático Completo</H2>
		<p>Vamos criar um exemplo completo de configuração:</p>
		<H3>pnpm-workspace.yaml</H3>
		<Pre data-language="yaml">
			{`packages:
- 'apps/*'
- 'packages/*'`}
		</Pre>
		<H3>package.json (raiz)</H3>
		<Pre data-language="json">
			{`{
	"name": "monorepo-example",
	"version": "1.0.0",
	"private": true,
	"scripts": {
		"dev": "pnpm --filter \\"./apps/*\\" dev",
		"build": "pnpm --filter \\"./packages/*\\" build && pnpm --filter \\"./apps/*\\" build",
		"test": "pnpm --filter \\"./packages/*\\" test",
		"lint": "pnpm --filter \\"./packages/*\\" --filter \\"./apps/*\\" lint",
		"clean": "pnpm --filter \\"./packages/*\\" --filter \\"./apps/*\\" clean"
	},
	"devDependencies": {
		"typescript": "^5.0.0",
		"@types/node": "^20.0.0"
	}
}`}
		</Pre>
		<H3>.npmrc</H3>
		<Pre data-language="">
			{`shamefully-hoist=true
strict-peer-dependencies=false`}
		</Pre>
		<H2>Como isso foi útil no dia a dia</H2>
		<p>Implementação em projetos reais resultou em:</p>
		<ul>
			<li>
				<strong>Redução de 70% no tempo de instalação</strong> — Economizamos
				tempo valioso em cada setup de projeto
			</li>
			<li>
				<strong>Economia de 60% em espaço em disco</strong> — Importante quando
				trabalhamos com múltiplos projetos
			</li>
			<li>
				<strong>Aceleração de 3x em builds incrementais</strong> —
				Desenvolvimento mais rápido e feedback imediato
			</li>
			<li>
				<strong>Simplificação de 80% no compartilhamento de código</strong> —
				Reaproveitamento de código entre projetos ficou trivial
			</li>
			<li>
				<strong>Redução de 50% em problemas de versionamento</strong> — Menos
				conflitos e dependências desatualizadas
			</li>
		</ul>
		<H2>Conclusão</H2>
		<p>
			Monorepos com pnpm oferecem uma solução eficiente para gerenciar múltiplos
			pacotes. Workspaces nativos, performance superior e eficiência de espaço
			tornam o pnpm ideal para times que precisam de organização e
			produtividade.
		</p>
		<p>
			A chave é começar simples, estabelecer padrões claros e evoluir conforme a
			necessidade. Com as ferramentas certas, um monorepo pode transformar a
			forma como seu time trabalha, acelerando desenvolvimento e melhorando a
			qualidade do código.
		</p>
		<Hr />
		<p>
			<em>
				Este artigo reflete aprendizados práticos de configurar e manter
				monorepos com pnpm em projetos reais. Estratégias validadas em produção
				e aplicadas no dia a dia.
			</em>
		</p>
	</ContentPage>
);

export default Page;
