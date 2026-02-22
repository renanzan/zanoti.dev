import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Pre } from "@/components/content/Pre";
import ContentPage from "@/components/ContentPage";
import { generateMetadata, generateStructuredData } from "@/helpers/seo";

const frontMatter = {
	title: "Web3 no Frontend: Integração MetaMask e React",
	description:
		"Aprendizados práticos sobre integração de Web3 no frontend, baseados no desenvolvimento de uma plataforma com criptomoedas.",
	caption: "Blog"
};

export const metadata = generateMetadata({
	title: "Web3 no Frontend: Integração MetaMask e React",
	description:
		"Aprendizados práticos sobre integração de Web3 no frontend, baseados no desenvolvimento de uma plataforma com criptomoedas. Integração MetaMask, segurança e melhores práticas.",
	path: "/blog/web3-frontend-experience",
	type: "article",
	publishedTime: "2022-08-20T00:00:00.000Z"
});

const Page = () => {
	const articleStructuredData = generateStructuredData("Article", {
		title: "Web3 no Frontend: Integração MetaMask e React",
		description:
			"Aprendizados práticos sobre integração de Web3 no frontend, baseados no desenvolvimento de uma plataforma com criptomoedas.",
		publishedTime: "2022-08-20T00:00:00.000Z"
	});

	return (
		<>
			{articleStructuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(articleStructuredData)
					}}
				/>
			)}

			<ContentPage frontMatter={frontMatter}>
				<p>
					Desenvolvi uma interface Web3 para uma plataforma de apostas online
					com criptomoedas. Compartilho aprendizados práticos sobre integração
					MetaMask e React que foram úteis no dia a dia.
				</p>

				<H2>O Contexto do Projeto</H2>

				<p>
					Desenvolvi uma plataforma que permitia apostas em jogos online usando
					criptomoedas. O desafio era criar uma interface intuitiva e responsiva
					que integrasse perfeitamente com a blockchain, especificamente através
					do MetaMask.
				</p>

				<H2>Desafios Iniciais</H2>

				<H3>1. Curva de Aprendizado Íngreme</H3>

				<p>
					Web3 é um mundo completamente diferente do desenvolvimento web
					tradicional. Conceitos como wallets, transações, gas fees e smart
					contracts eram novos para mim.
				</p>

				<p>
					<strong>Principais conceitos que precisei dominar:</strong>
				</p>
				<ul>
					<li>Como as wallets funcionam</li>
					<li>O processo de assinatura de transações</li>
					<li>Gerenciamento de estado da blockchain</li>
					<li>Tratamento de erros específicos do Web3</li>
				</ul>

				<H3>2. Integração com MetaMask</H3>

				<p>
					O MetaMask é a wallet mais popular, mas sua integração não é trivial.
					Precisava garantir que a experiência fosse fluida para usuários
					iniciantes e experientes.
				</p>

				<Pre data-language="typescript">
					{`// Hook personalizado para gerenciar conexão com MetaMask
const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        }
      } else {
        throw new Error('MetaMask não está instalado');
      }
    } catch (error) {
      console.error('Erro ao conectar wallet:', error);
      // Tratamento de erro específico para UX
    } finally {
      setIsLoading(false);
    }
  };

  return { account, isConnected, isLoading, connectWallet };
};`}
				</Pre>

				<H2>Soluções Implementadas</H2>

				<H3>1. Interface Intuitiva</H3>

				<p>
					Criei uma interface que guiava o usuário através do processo de
					conexão, explicando cada passo de forma clara.
				</p>

				<p>
					<strong>Componentes principais:</strong>
				</p>
				<ul>
					<li>
						<strong>WalletConnect</strong>: Botão principal para conectar a
						wallet
					</li>
					<li>
						<strong>AccountInfo</strong>: Exibição do endereço e saldo
					</li>
					<li>
						<strong>TransactionStatus</strong>: Feedback visual para transações
					</li>
					<li>
						<strong>ErrorHandler</strong>: Tratamento elegante de erros
					</li>
				</ul>

				<H3>2. Gerenciamento de Estado</H3>

				<p>
					Implementei um sistema robusto de gerenciamento de estado que
					sincronizava com a blockchain:
				</p>

				<Pre data-language="typescript">
					{`// Context para gerenciar estado global do Web3
const Web3Context = createContext({
  account: null,
  balance: null,
  isConnected: false,
  connectWallet: () => {},
  disconnectWallet: () => {},
  sendTransaction: () => {},
});

const Web3Provider = ({ children }) => {
  const [state, setState] = useState({
    account: null,
    balance: null,
    isConnected: false,
  });

  // Listener para mudanças na conta
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          // Usuário desconectou
          setState(prev => ({ ...prev, isConnected: false, account: null }));
        } else {
          // Usuário trocou de conta
          setState(prev => ({ ...prev, account: accounts[0] }));
        }
      });
    }
  }, []);

  // ... resto da implementação
};`}
				</Pre>

				<H3>3. Tratamento de Erros Específicos</H3>

				<p>Web3 tem erros únicos que precisam de tratamento especial:</p>

				<Pre data-language="typescript">
					{`const handleWeb3Error = (error: any) => {
  if (error.code === 4001) {
    return 'Transação rejeitada pelo usuário';
  } else if (error.code === -32602) {
    return 'Parâmetros inválidos';
  } else if (error.message.includes('insufficient funds')) {
    return 'Saldo insuficiente para a transação';
  } else {
    return 'Erro inesperado. Tente novamente.';
  }
};`}
				</Pre>

				<H2>Aprendizados Práticos</H2>

				<H3>1. UX é Crítico</H3>

				<p>
					Web3 ainda é complexo para usuários comuns. A interface deve abstrair
					a complexidade técnica e guiar o usuário através do processo. No dia a
					dia, isso significou criar fluxos intuitivos que escondiam a
					complexidade técnica por trás.
				</p>

				<H3>2. Tratamento de Erros Robusto</H3>

				<p>
					Erros de Web3 são diferentes dos erros tradicionais. É essencial ter
					um sistema robusto de tratamento e feedback para o usuário. Isso foi
					útil para evitar frustrações e melhorar a experiência geral.
				</p>

				<H3>3. Performance Importa</H3>

				<p>
					Transações na blockchain podem ser lentas. É importante mostrar
					feedback visual adequado e gerenciar expectativas do usuário. Isso
					melhorou significativamente a percepção de qualidade da aplicação.
				</p>

				<H3>4. Segurança em Primeiro Lugar</H3>

				<p>
					Quando se trabalha com criptomoedas, a segurança é fundamental. Nunca
					armazene chaves privadas no frontend e sempre valide transações. Essas
					práticas foram essenciais para evitar vulnerabilidades críticas.
				</p>

				<H2>Desafios Técnicos e Soluções</H2>

				<H3>1. Sincronização com a Blockchain</H3>

				<p>
					Manter o estado da aplicação sincronizado com a blockchain foi um
					desafio constante. Implementei um sistema de polling inteligente que
					verificava mudanças periodicamente. Isso foi útil para garantir que os
					dados sempre estivessem atualizados.
				</p>

				<H3>2. Gerenciamento de Gas Fees</H3>

				<p>
					Gas fees variam constantemente. Criei um sistema que estimava e exibia
					os custos antes da confirmação da transação. Isso melhorou a
					transparência e ajudou os usuários a tomar decisões informadas.
				</p>

				<H3>3. Responsividade</H3>

				<p>
					A interface precisava funcionar perfeitamente em dispositivos móveis,
					onde a maioria dos usuários acessa suas wallets. Isso foi essencial
					para a adoção da plataforma.
				</p>

				<H2>Resultados Alcançados</H2>

				<p>Após 6 meses de desenvolvimento:</p>

				<ul>
					<li>Interface intuitiva e responsiva</li>
					<li>Integração completa com MetaMask</li>
					<li>Sistema robusto de tratamento de erros</li>
					<li>Experiência de usuário fluida</li>
					<li>Transações seguras e confiáveis</li>
				</ul>

				<H2>Reflexões sobre Web3</H2>

				<p>
					Web3 mostra o potencial da blockchain, mas também os desafios de UX
					que precisam ser superados. A tecnologia é poderosa, mas precisa ser
					mais acessível para usuários comuns.
				</p>

				<p>
					O futuro do desenvolvimento frontend está em integrar tecnologias
					emergentes de forma que façam sentido para o usuário final. Esses
					aprendizados foram valiosos para entender como tornar tecnologias
					complexas acessíveis e úteis no dia a dia.
				</p>

				<Hr />

				<p>
					<em>
						Este artigo reflete aprendizados práticos de desenvolver interfaces
						Web3. As estratégias foram validadas em produção e continuam sendo
						aplicadas em projetos com tecnologias emergentes.
					</em>
				</p>
			</ContentPage>
		</>
	);
};

export default Page;
