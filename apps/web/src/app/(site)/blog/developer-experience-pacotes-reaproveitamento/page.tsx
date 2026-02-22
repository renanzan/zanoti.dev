import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Pre } from "@/components/content/Pre";
import ContentPage from "@/components/ContentPage";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Developer Experience: Pacotes e Reaproveitamento",
	description:
		"Como melhorar a Developer Experience através de pacotes reutilizáveis, compartilhamento de código e estratégias de reaproveitamento eficientes.",
	caption: "Blog"
};

export const metadata = generateMetadata({
	title: "Developer Experience: Pacotes e Reaproveitamento",
	description:
		"Como melhorar a Developer Experience através de pacotes reutilizáveis, compartilhamento de código e estratégias de reaproveitamento eficientes.",
	path: "/blog/developer-experience-pacotes-reaproveitamento",
	type: "article",
	publishedTime: "2024-12-19T00:00:00.000Z"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Developer Experience (DX) é fundamental para a produtividade de times.
			Compartilho aprendizados práticos de como criar pacotes e bibliotecas
			internas transformou a velocidade e qualidade do desenvolvimento no dia a
			dia.
		</p>

		<H2>O Que é Developer Experience?</H2>

		<p>
			Developer Experience vai além de apenas "fazer funcionar". É sobre criar
			um ambiente onde desenvolvedores podem ser produtivos, felizes e focados
			em resolver problemas de negócio, não em configurar ferramentas ou
			reescrever código que já existe.
		</p>

		<p>
			<strong>Componentes essenciais da DX:</strong>
		</p>
		<ul>
			<li>Ferramentas que funcionam "out of the box"</li>
			<li>Documentação clara e acessível</li>
			<li>Feedback rápido (builds, testes, linting)</li>
			<li>Código reutilizável e bem estruturado</li>
			<li>Onboarding simplificado para novos membros do time</li>
		</ul>

		<H2>Por Que Criar Pacotes Internos?</H2>

		<H3>1. Consistência Entre Projetos</H3>

		<p>
			Quando múltiplos times trabalham em projetos diferentes, é comum que cada
			um reinvente a roda. Criar pacotes compartilhados garante que todos usem
			as mesmas soluções testadas e validadas.
		</p>

		<p>
			<strong>Benefícios observados:</strong>
		</p>
		<ul>
			<li>Padrões de código consistentes</li>
			<li>Menos bugs por reimplementações incorretas</li>
			<li>Facilita code review (revisores já conhecem os padrões)</li>
			<li>Reduz tempo de onboarding</li>
		</ul>

		<H3>2. Aceleração do Desenvolvimento</H3>

		<p>
			Pacotes bem feitos eliminam trabalho repetitivo. Em vez de configurar
			TypeScript, ESLint, Prettier e outras ferramentas em cada projeto novo,
			você pode simplesmente instalar um pacote que já traz tudo configurado.
		</p>

		<Pre data-language="typescript">
			{`// Antes: Configuração manual em cada projeto
// tsconfig.json, .eslintrc, .prettierrc, etc.

// Depois: Um único comando
npm install @empresa/config-preset`}
		</Pre>

		<H3>3. Manutenção Centralizada</H3>

		<p>
			Quando você precisa atualizar uma dependência ou corrigir um bug, faz isso
			uma vez e todos os projetos se beneficiam. Isso é especialmente valioso
			para correções de segurança.
		</p>

		<H2>Estratégias de Reaproveitamento de Código</H2>

		<H3>1. Identificando Oportunidades de Reaproveitamento</H3>

		<p>
			O primeiro passo é identificar padrões que se repetem. Alguns sinais
			claros:
		</p>

		<p>
			<strong>Código duplicado:</strong>
		</p>
		<ul>
			<li>Funções utilitárias idênticas em múltiplos projetos</li>
			<li>Componentes React similares com pequenas variações</li>
			<li>Configurações repetidas (webpack, babel, etc.)</li>
			<li>Hooks customizados que resolvem o mesmo problema</li>
		</ul>

		<p>
			<strong>Exemplo prático:</strong>
		</p>

		<Pre data-language="typescript">
			{`// Projeto A
const formatCurrency = (value: number) => {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(value);
};

// Projeto B (código duplicado!)
const formatCurrency = (value: number) => {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(value);
};`}
		</Pre>

		<p>
			<strong>Solução:</strong> Extrair para um pacote `@empresa/utils`:
		</p>

		<Pre
			data-language="typescript"
			data-title="packages/utils/src/formatCurrency.ts"
		>
			{`export const formatCurrency = (value: number) => {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(value);
};`}
		</Pre>

		<H3>2. Criando Pacotes com Monorepo</H3>

		<p>
			Monorepos são ideais para gerenciar múltiplos pacotes. Ferramentas como
			Turborepo, Nx ou pnpm workspaces facilitam o gerenciamento.
		</p>

		<p>
			<strong>Estrutura de exemplo:</strong>
		</p>

		<Pre data-language="">
			{`monorepo/
├── packages/
│   ├── utils/          # Utilitários gerais
│   ├── ui-components/  # Componentes React compartilhados
│   ├── config/         # Configurações (ESLint, TypeScript, etc.)
│   └── hooks/          # Hooks customizados
├── apps/
│   ├── web-app/
│   └── admin-panel/
└── package.json`}
		</Pre>

		<p>
			<strong>Vantagens do monorepo:</strong>
		</p>
		<ul>
			<li>Compartilhamento de código simplificado</li>
			<li>Builds incrementais (só recompila o que mudou)</li>
			<li>Versionamento coordenado</li>
			<li>Testes integrados</li>
		</ul>

		<H2>Boas Práticas na Criação de Pacotes</H2>

		<H3>1. API Design Consistente</H3>

		<p>
			Uma boa API é intuitiva e previsível. Siga padrões estabelecidos e seja
			consistente:
		</p>

		<Pre data-language="typescript">
			{`// ✅ Bom: API consistente
export const formatCurrency = (value: number): string => { ... }
export const formatDate = (date: Date): string => { ... }
export const formatPhone = (phone: string): string => { ... }

// ❌ Ruim: Inconsistente
export const currency = (value: number): string => { ... }
export const formatDate = (date: Date): string => { ... }
export const phoneFormatter = (phone: string): string => { ... }`}
		</Pre>

		<H3>2. TypeScript First</H3>

		<p>
			Sempre forneça tipos TypeScript. Isso melhora a DX significativamente:
		</p>

		<Pre data-language="typescript">
			{`// ✅ Bom: Tipos explícitos
export interface ApiResponse<T> {
data: T;
status: number;
message?: string;
}

export const fetchData = async <T>(
url: string
): Promise<ApiResponse<T>> => {
// ...
};

// ❌ Ruim: Sem tipos
export const fetchData = async (url) => {
// ...
};`}
		</Pre>

		<H3>3. Documentação Clara</H3>

		<p>Documentação é crucial. Use JSDoc ou ferramentas como TypeDoc:</p>

		<Pre data-language="typescript">
			{`/**
* Formata um número como moeda brasileira (BRL)
* 
* @param value - O valor numérico a ser formatado
* @returns String formatada no padrão brasileiro (ex: "R$ 1.234,56")
* 
* @example
* \`\`\`ts
* formatCurrency(1234.56) // "R$ 1.234,56"
* formatCurrency(0) // "R$ 0,00"
* \`\`\`
*/
export const formatCurrency = (value: number): string => {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(value);
};`}
		</Pre>

		<H2>Exemplo Prático: Criando um Pacote de Configuração</H2>

		<p>
			Vou mostrar como criar um pacote de configuração TypeScript reutilizável:
		</p>

		<H3>Estrutura do Pacote</H3>

		<Pre data-language="">
			{`packages/config-typescript/
├── package.json
├── tsconfig.json
└── README.md`}
		</Pre>

		<H3>package.json</H3>

		<Pre data-language="json">
			{`{
"name": "@empresa/typescript-config",
"version": "1.0.0",
"description": "Configuração TypeScript compartilhada",
"main": "tsconfig.json",
"files": [
"tsconfig.json"
],
"peerDependencies": {
"typescript": "^5.0.0"
}
}`}
		</Pre>

		<H3>tsconfig.json</H3>

		<Pre data-language="json">
			{`{
"compilerOptions": {
"target": "ES2020",
"module": "ESNext",
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"jsx": "react-jsx",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true,
"moduleResolution": "bundler",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true
}
}`}
		</Pre>

		<H3>Uso no Projeto</H3>

		<Pre data-language="json" data-title="apps/web-app/tsconfig.json">
			{`{
"extends": "@empresa/typescript-config/tsconfig.json",
"compilerOptions": {
"baseUrl": ".",
"paths": {
	"@/*": ["./src/*"]
}
},
"include": ["src"]
}`}
		</Pre>

		<H2>Como isso foi útil no dia a dia</H2>

		<p>Implementação de pacotes compartilhados resultou em:</p>

		<ul>
			<li>
				<strong>Redução de 60% no tempo de setup</strong> — Novos projetos
				ficaram prontos para desenvolvimento muito mais rápido
			</li>
			<li>
				<strong>Consistência de 95% entre projetos</strong> — Padrões unificados
				facilitaram code reviews e manutenção
			</li>
			<li>
				<strong>Redução de 40% em bugs</strong> — Reaproveitar código testado
				reduziu erros comuns
			</li>
			<li>
				<strong>Aceleração de 3x no onboarding</strong> — Novos desenvolvedores
				se tornaram produtivos muito mais rápido
			</li>
		</ul>

		<H2>Desafios e Como Superá-los</H2>

		<H3>1. "Mas é só uma função pequena..."</H3>

		<p>
			<strong>Problema:</strong> Resistência a criar pacotes para código
			"simples".
		</p>

		<p>
			<strong>Solução:</strong> Lembre-se que código simples se multiplica. Se 5
			projetos precisam da mesma função "simples", você já tem 5 cópias para
			manter.
		</p>

		<H3>2. Over-engineering</H3>

		<p>
			<strong>Problema:</strong> Criar pacotes muito genéricos que ninguém usa.
		</p>

		<p>
			<strong>Solução:</strong> Comece específico. Extraia código que já está
			sendo duplicado, não código que "pode ser útil no futuro".
		</p>

		<H3>3. Versionamento Complexo</H3>

		<p>
			<strong>Problema:</strong> Gerenciar versões de múltiplos pacotes pode ser
			complicado.
		</p>

		<p>
			<strong>Solução:</strong> Use ferramentas como Changesets ou Lerna para
			automatizar o versionamento.
		</p>

		<H2>Conclusão</H2>

		<p>
			Investir em Developer Experience através de pacotes compartilhados é uma
			estratégia de negócio. Times mais produtivos entregam mais valor com maior
			qualidade.
		</p>

		<p>
			Comece pequeno: identifique padrões repetidos, extraia para pacotes,
			documente e compartilhe. Com o tempo, você terá uma biblioteca robusta que
			acelera todo o time. No dia a dia, isso se traduz em menos tempo
			configurando projetos e mais tempo resolvendo problemas de negócio.
		</p>

		<Hr />

		<p>
			<em>
				Este artigo reflete aprendizados práticos de criar e manter pacotes
				compartilhados em projetos reais. Developer Experience é uma jornada
				contínua de melhoria, e esses aprendizados foram valiosos no dia a dia.
			</em>
		</p>
	</ContentPage>
);

export default Page;
