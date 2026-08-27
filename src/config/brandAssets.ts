/**
 * ============================================================================
 * 🚀 REPOSITÓRIO CENTRAL DE LOGOS & IDENTIDADE VISUAL - GRUPO OXYS
 * ============================================================================
 * 
 * Aqui você pode facilmente configurar suas logos em um único lugar!
 * 
 * 📌 COMO ADICIONAR SUA LOGO:
 * ----------------------------------------------------------------------------
 * OPÇÃO 1: Colocar o arquivo na pasta 'public' (Ex: public/logo.png)
 *          HEADER_LOGO_SRC: '/logo.png',
 *          HERO_CORE_LOGO_SRC: '/logo-hero-3d.png'
 * 
 * OPÇÃO 2: Usar um link externo (URL)
 *          HERO_CORE_LOGO_SRC: 'https://seusite.com/sua-logo.png'
 * 
 * OPÇÃO 3: Importar diretamente um arquivo da pasta /src/assets
 *          import minhaLogo from '../assets/logo.png';
 *          HERO_CORE_LOGO_SRC: minhaLogo
 * ============================================================================
 */

export const BRAND_CONFIG = {
  // 1. Logo que aparece no Cabeçalho (Navbar) e no Rodapé (Footer)
  // Deixe como '' para exibir a tipografia padrão ou adicione o caminho do arquivo (ex: '/logo.png')
  HEADER_LOGO_SRC: '',
  FOOTER_LOGO_SRC: '', // Se deixado vazio (''), usa automaticamente o mesmo HEADER_LOGO_SRC

  // 2. Logo / Imagem Central da Hero (aparece em destaque no núcleo iluminado da Hero)
  // Exemplo: '/logo-hero.png', '/logo.png' ou URL externa 'https://...'
  HERO_CORE_LOGO_SRC: '',

  // 3. Textos institucionais da marca
  BRAND_NAME: 'OXYS',
  BRAND_SUBTITLE: 'SISTEMAS | TI',
  DESCRIPTION: 'Desenvolvemos sistemas e soluções de TI inteligentes que transformam ideias em resultados reais.',

  // 4. Informações Oficiais de Contato & Localização
  CONTACT: {
    EMAIL: 'grupooxys@gmail.com',
    PHONE: '(43) 98870-9679',
    PHONE_RAW: '43988709679',
    WHATSAPP_NUMBER: '5543988709679',
    WHATSAPP_LINK: 'https://wa.me/5543988709679',
    ADDRESS: 'Rua da Lapa, 127 - Londrina, PR',
    COVERAGE: 'Todo Brasil e Exterior',
    BUSINESS_HOURS: 'Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00',
    SUPPORT: 'Suporte 24/7',
  },

  // 5. Links dos Sites das 4 Empresas do Grupo (Redirecionamento ao clicar no botão com seta)
  COMPANY_WEBSITES: {
    sistemas: 'https://sistemas.oxys.com.br', // Link do site Oxys Sistemas
    ti: 'https://ti.oxys.com.br',             // Link do site Oxys TI
    cloud: 'https://cloud.oxys.com.br',       // Link do site Oxys Cloud
    automacao: 'https://automacao.oxys.com.br', // Link do site Oxys Automação
  },

  /**
   * 6. REPOSITÓRIO DE IMAGENS DAS 4 CAIXAS DAS EMPRESAS
   * --------------------------------------------------------------------------
   * Como adicionar a imagem de cada caixa:
   * 1. Coloque seus arquivos na pasta 'public/' (ex: public/sistemas.jpg)
   * 2. Informe o caminho abaixo:
   *    sistemas: '/sistemas.jpg',
   *    ti: '/ti.jpg',
   *    cloud: '/cloud.jpg',
   *    automacao: '/automacao.jpg',
   */
  COMPANY_CARD_IMAGES: {
    sistemas: '', // Insira o caminho da imagem de Oxys Sistemas aqui
    ti: '',       // Insira o caminho da imagem de Oxys TI aqui
    cloud: '',    // Insira o caminho da imagem de Oxys Cloud aqui
    automacao: '',// Insira o caminho da imagem de Oxys Automação aqui
  }
};
