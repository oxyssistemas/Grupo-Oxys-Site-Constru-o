import { Company, SolutionItem, EcosystemFeature } from '../types';

export const COMPANIES_DATA: Company[] = [
  {
    id: 'sistemas',
    name: 'Oxys Sistemas',
    badge: 'Engenharia de Software',
    tagline: 'Desenvolvimento de software sob medida, plataformas web, mobile e sistemas ERP de alta escalabilidade.',
    description: 'Criamos soluções digitais personalizadas que transformam processos complexos em interfaces intuitivas, escaláveis e focadas na produtividade do seu negócio.',
    longDescription: 'A Oxys Sistemas projeta e desenvolve ecossistemas de software robustos. Seja para modernizar um sistema legado, construir um ERP corporativo do zero ou lançar um aplicativo de alto tráfego, nossa equipe aplica as melhores práticas de arquitetura limpa, testes contínuos e experiência de usuário.',
    iconName: 'Code2',
    themeColor: {
      primary: '#38bdf8', // Sky Blue
      border: 'border-sky-500/30 hover:border-sky-400',
      glow: 'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      bgAccent: 'bg-sky-950/20',
      badgeBg: 'bg-sky-500/10 border-sky-500/20',
      badgeText: 'text-sky-400',
    },
    keyFeatures: [
      'Sistemas Web e Mobile (iOS/Android)',
      'ERPs & CRMs Personalizados',
      'APIs REST e Microsserviços Escaláveis',
      'Portais Corporativos & B2B/B2C'
    ],
    pillars: [
      {
        title: 'Arquitetura Sob Medida',
        desc: 'Construção orientada aos requisitos exatos do seu modelo de negócio, sem limitações de plataformas prontas.',
        icon: 'Layers'
      },
      {
        title: 'Integrações Contínuas',
        desc: 'Conexão nativa com sistemas legados, gateways de pagamento, órgãos fiscais e plataformas de terceiros.',
        icon: 'Workflow'
      },
      {
        title: 'Design Focado em UX/UI',
        desc: 'Interfaces modernas projetadas para reduzir curva de aprendizado e aumentar a produtividade operacional.',
        icon: 'LayoutGrid'
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Flutter', 'Next.js', 'GraphQL'],
    deliverables: [
      'Desenvolvimento Ágil com Sprints Quinzenais',
      'Documentação Técnica e de Usuário Completa',
      'Garantia de Código e Suporte Pós-Lançamento',
      'Testes Automatizados e Homologação Rigorosa'
    ],
    stats: [
      { value: '+120', label: 'Projetos Entregues' },
      { value: '99.8%', label: 'Satisfação de Usuários' },
      { value: '100%', label: 'Código Proprietário' }
    ],
    useCases: [
      {
        clientType: 'Indústria & Distribuição',
        solution: 'ERP personalizado com controle de estoque em tempo real e emissão automática de notas fiscais.',
        impact: 'Redução de 45% no tempo de fechamento de pedidos e eliminação de inconsistências contábeis.'
      },
      {
        clientType: 'Logística & Frotas',
        solution: 'Aplicativo mobile para motoristas com rastreamento GPS e sincronização offline.',
        impact: 'Aumento de 30% na precisão de entregas no prazo e comprovação digital instantânea.'
      }
    ]
  },
  {
    id: 'ti',
    name: 'Oxys TI',
    badge: 'Infraestrutura & Suporte',
    tagline: 'Governança tecnológica, suporte proativo especializado e proteção avançada para infraestrutura corporativa.',
    description: 'Garantimos que a infraestrutura tecnológica da sua organização opere com máxima disponibilidade, segurança de dados e alinhamento às metas do negócio.',
    longDescription: 'A Oxys TI cuida de ponta a ponta da espinha dorsal tecnológica da sua empresa. Atuamos com suporte N1 a N3, gestão centralizada de ativos, implantação de redes estruturadas de alta velocidade, consultoria em conformidade LGPD e segurança da informação preventiva.',
    iconName: 'ServerCrash',
    themeColor: {
      primary: '#60a5fa', // Blue
      border: 'border-blue-500/30 hover:border-blue-400',
      glow: 'shadow-[0_0_30px_rgba(96,165,250,0.15)]',
      bgAccent: 'bg-blue-950/20',
      badgeBg: 'bg-blue-500/10 border-blue-500/20',
      badgeText: 'text-blue-400',
    },
    keyFeatures: [
      'Suporte Técnico Corporativo N1, N2 e N3',
      'Gestão de Redes, Firewalls e VPN Segura',
      'Consultoria & Conformidade em Cibersegurança',
      'Monitoramento Proativo de Ativos (NOC 24/7)'
    ],
    pillars: [
      {
        title: 'NOC & Monitoramento 24/7',
        desc: 'Identificação e resolução de anomalias antes que afetem as operações cotidianas da empresa.',
        icon: 'Activity'
      },
      {
        title: 'Cibersegurança em Camadas',
        desc: 'Políticas rigorosas de endpoint protection, detecção de ameaças e resposta rápida a incidentes.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Gestão Inteligente de Ativos',
        desc: 'Inventário completo de hardware e software, otimizando investimentos e renovações.',
        icon: 'HardDrive'
      }
    ],
    technologies: ['Fortinet', 'MikroTik', 'Cisco', 'Zabbix', 'Grafana', 'Active Directory', 'Bitdefender', 'OpenVPN'],
    deliverables: [
      'SLA Contratual com Atendimento Prioritário',
      'Relatórios Mensais de Desempenho e Segurança',
      'Plano de Continuidade Operacional (BCP)',
      'Help Desk Multicanal (Chat, Telefone, Chamados)'
    ],
    stats: [
      { value: '< 15min', label: 'Tempo Médio de 1º Resposta' },
      { value: '99.9%', label: 'Disponibilidade de Redes' },
      { value: '+4.500', label: 'Chamados Atendidos/Ano' }
    ],
    useCases: [
      {
        clientType: 'Rede Varejista com 18 Lojas',
        solution: 'Padronização de infraestrutura de rede, VPN interligando filiais e suporte centralizado.',
        impact: 'Queda de 80% nos chamados de queda de sistema em pontos de venda (PDV).'
      },
      {
        clientType: 'Escritório Corporativo Financeiro',
        solution: 'Implementação de firewall UTM, controle de acesso e adequação de segurança à LGPD.',
        impact: 'Blindagem total contra ataques de ransomware e conformidade técnica homologada.'
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Oxys Cloud',
    badge: 'Nuvem & DevOps',
    tagline: 'Arquiteturas resilientes na nuvem, migrações seguras, esteiras de DevOps e contenção de custos (FinOps).',
    description: 'Transformamos a forma como sua empresa consome infraestrutura, garantindo escalabilidade elástica, alta disponibilidade e redução sustentável de custos com nuvem.',
    longDescription: 'A Oxys Cloud planeja, migra e gerencia ambientes em nuvem pública, privada e híbrida (AWS, Google Cloud, Microsoft Azure e data centers privados). Desenvolvemos esteiras de automação CI/CD, clusters Kubernetes e planos infalíveis de Backup e Disaster Recovery.',
    iconName: 'Cloud',
    themeColor: {
      primary: '#0ea5e9', // Deep Sky/Cyan
      border: 'border-cyan-500/30 hover:border-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(14,165,233,0.15)]',
      bgAccent: 'bg-cyan-950/20',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
      badgeText: 'text-cyan-400',
    },
    keyFeatures: [
      'Migração Segura e Zero-Downtime para Cloud',
      'Gestão Multicloud (AWS, Azure, GCP & Privada)',
      'DevOps, CI/CD e Orquestração com Kubernetes',
      'Backup em Nuvem Imutável & Disaster Recovery'
    ],
    pillars: [
      {
        title: 'Escalabilidade Elástica',
        desc: 'Recursos computacionais que se ajustam automaticamente ao volume de acessos e demandas sazonais.',
        icon: 'TrendingUp'
      },
      {
        title: 'FinOps & Otimização de Custos',
        desc: 'Auditoria e reestruturação de recursos para eliminar desperdícios de faturamento em nuvem.',
        icon: 'PiggyBank'
      },
      {
        title: 'Disaster Recovery Garantido',
        desc: 'Rotinas com RPO e RTO mínimos para restauração rápida de dados mesmo em cenários críticos.',
        icon: 'RefreshCw'
      }
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitLab CI'],
    deliverables: [
      'Arquitetura de Nuvem com Alta Disponibilidade (Multi-AZ)',
      'Esteiras de Deploy Contínuo (CI/CD) Automatizadas',
      'Monitoramento de Gastos e Alertas em Tempo Real',
      'Testes Periódicos de Restauração de Backups'
    ],
    stats: [
      { value: '99.99%', label: 'SLA de Uptime em Nuvem' },
      { value: '-35%', label: 'Economia Média de FinOps' },
      { value: '0', label: 'Perda de Dados em Migrações' }
    ],
    useCases: [
      {
        clientType: 'SaaS em Rápido Crescimento',
        solution: 'Migração de servidores monolíticos para cluster Kubernetes com auto-scaling automático.',
        impact: 'Capacidade de absorver picos de 10x sem instabilidade e redução de 40% na fatura AWS.'
      },
      {
        clientType: 'Empresa do Setor de Saúde',
        solution: 'Implantação de política de backup em nuvem criptografado com retenção regulatória de 5 anos.',
        impact: 'Conformidade integral com normas do CFM e mitigação de 100% dos riscos de perda de dados.'
      }
    ]
  },
  {
    id: 'automacao',
    name: 'Oxys Automação',
    badge: 'IoT & Processos Inteligentes',
    tagline: 'Automação industrial e comercial, robôs de software (RPA), telemetria com IoT e eficiência operacional.',
    description: 'Conectamos o mundo físico ao digital. Automatizamos tarefas repetitivas, integramos maquinários e sensores inteligentes para gerar economia e precisão.',
    longDescription: 'A Oxys Automação lidera a transição para a Indústria 4.0 e a eficiência corporativa moderna. Combinamos robótica de software (RPA) para eliminar trabalho manual com sensores IoT e automação física de linhas de produção, galpões e edifícios inteligentes.',
    iconName: 'Cpu',
    themeColor: {
      primary: '#2563eb', // Electric Royal Blue
      border: 'border-blue-600/40 hover:border-blue-500',
      glow: 'shadow-[0_0_30px_rgba(37,99,235,0.15)]',
      bgAccent: 'bg-blue-950/20',
      badgeBg: 'bg-blue-600/10 border-blue-600/20',
      badgeText: 'text-blue-300',
    },
    keyFeatures: [
      'Robôs de Software (RPA) para Rotinas Corporativas',
      'Sensoriamento IoT e Telemetria em Tempo Real',
      'Automação Comercial, PDV e Controle de Estoque',
      'Integração de Equipamentos & Sistemas SCADA'
    ],
    pillars: [
      {
        title: 'Eliminação de Tarefas Manuais',
        desc: 'RPA que executa preenchimentos, conciliações e extrações 24 horas por dia sem erros humanos.',
        icon: 'Bot'
      },
      {
        title: 'Telemetria & IoT Avançado',
        desc: 'Sensores inteligentes coletando dados críticos de maquinários, temperatura e consumo energético.',
        icon: 'Radio'
      },
      {
        title: 'Decisões Baseadas em Dados',
        desc: 'Dashboards industriais e gerenciais em tempo real com alertas preventivos de manutenção.',
        icon: 'LineChart'
      }
    ],
    technologies: ['Python RPA', 'UiPath', 'MQTT', 'ESP32 / Raspberry', 'Node-RED', 'Modbus', 'Power Automate', 'Grafana IoT'],
    deliverables: [
      'Mapeamento e Diagnóstico de Eficiência de Processos',
      'Desenvolvimento e Calibração de Sensores e Hardwares',
      'Treinamento e Capacitação das Equipes Operacionais',
      'Monitoramento de Desempenho e ROI da Automação'
    ],
    stats: [
      { value: '85%', label: 'Redução de Tempo em Processos' },
      { value: 'Zero', label: 'Erros de Digitação Manual' },
      { value: '+500k', label: 'Execuções de RPA / Mês' }
    ],
    useCases: [
      {
        clientType: 'Distribuidora Farmacêutica',
        solution: 'Automação RPA de conciliação bancária e emissão em lote de guias fiscais.',
        impact: 'Liberação de 120 horas mensais da equipe financeira e eliminação total de multas por atraso.'
      },
      {
        clientType: 'Frigorífico e Armazenagem a Frio',
        solution: 'Rede de sensores IoT sem fio monitorando temperatura e umidade com alertas via WhatsApp.',
        impact: 'Prevenção de perdas de carga por falha de refrigeração e histórico para auditorias sanitárias.'
      }
    ]
  }
];

export const SOLUTIONS_CATALOG: SolutionItem[] = [
  {
    id: 'sol-1',
    companyId: 'sistemas',
    companyName: 'Oxys Sistemas',
    title: 'Sistemas ERP & Gestão Empresarial',
    description: 'Plataformas completas de gestão sob medida, integrando compras, vendas, estoque, finanças e emissão fiscal.',
    category: 'Software & Web',
    tags: ['ERP', 'Gestão', 'Customizado', 'Fiscal'],
    iconName: 'Database',
    isPopular: true
  },
  {
    id: 'sol-2',
    companyId: 'sistemas',
    companyName: 'Oxys Sistemas',
    title: 'Aplicativos Mobile iOS & Android',
    description: 'Apps corporativos e para consumidores finais com sincronização em tempo real e experiência de ponta.',
    category: 'Mobile & Apps',
    tags: ['Flutter', 'iOS', 'Android', 'Offline First'],
    iconName: 'Smartphone'
  },
  {
    id: 'sol-3',
    companyId: 'sistemas',
    companyName: 'Oxys Sistemas',
    title: 'Integração de Sistemas & APIs',
    description: 'Conectores seguros entre diferentes plataformas, sistemas legados, marketplaces e portais governamentais.',
    category: 'Software & Web',
    tags: ['APIs', 'REST', 'Webhooks', 'Microsserviços'],
    iconName: 'Shuffle'
  },
  {
    id: 'sol-4',
    companyId: 'ti',
    companyName: 'Oxys TI',
    title: 'Suporte Corporativo N1, N2 e N3',
    description: 'Atendimento técnico humanizado e ágil para estações de trabalho, servidores e colaboradores remotos.',
    category: 'Infra & Suporte',
    tags: ['Help Desk', 'SLA Garantido', 'Suporte Remoto e Presencial'],
    iconName: 'Headphones',
    isPopular: true
  },
  {
    id: 'sol-5',
    companyId: 'ti',
    companyName: 'Oxys TI',
    title: 'Cibersegurança, Firewalls e VPN',
    description: 'Proteção perimetral, segurança de endpoint, blindagem contra ataques de ransomware e VPN corporativa segura.',
    category: 'Segurança & Redes',
    tags: ['Firewall UTM', 'LGPD', 'VPN Corporativa', 'Antivírus'],
    iconName: 'Shield'
  },
  {
    id: 'sol-6',
    companyId: 'ti',
    companyName: 'Oxys TI',
    title: 'Redes Estruturadas & Wi-Fi de Alta Densidade',
    description: 'Projetos de cabeamento estruturado óptico e metálico, switches gerenciáveis e cobertura Wi-Fi industrial.',
    category: 'Segurança & Redes',
    tags: ['Wi-Fi 6', 'Cabeamento', 'Switches', 'Roteamento'],
    iconName: 'Network'
  },
  {
    id: 'sol-7',
    companyId: 'cloud',
    companyName: 'Oxys Cloud',
    title: 'Migração para Nuvem sem Interrupção',
    description: 'Transição segura de servidores locais para AWS, Azure ou Google Cloud com planejamento minucioso e teste prévio.',
    category: 'Nuvem & DevOps',
    tags: ['AWS', 'Azure', 'GCP', 'Zero Downtime'],
    iconName: 'CloudUpload',
    isPopular: true
  },
  {
    id: 'sol-8',
    companyId: 'cloud',
    companyName: 'Oxys Cloud',
    title: 'Backup em Nuvem & Disaster Recovery',
    description: 'Cópias imutáveis de segurança com criptografia de ponta e protocolo de restauração imediata em caso de falha.',
    category: 'Nuvem & DevOps',
    tags: ['Backup Imutável', 'Disaster Recovery', 'RPO/RTO', 'Criptografia'],
    iconName: 'HardDriveDownload'
  },
  {
    id: 'sol-9',
    companyId: 'cloud',
    companyName: 'Oxys Cloud',
    title: 'DevOps & Automação CI/CD',
    description: 'Esteiras automatizadas de compilação, testes e publicação de sistemas em ambientes de containers Kubernetes.',
    category: 'Nuvem & DevOps',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'FinOps'],
    iconName: 'Terminal'
  },
  {
    id: 'sol-10',
    companyId: 'automacao',
    companyName: 'Oxys Automação',
    title: 'Robôs de Processos (RPA)',
    description: 'Automação de rotinas repetitivas de digitação, conferência de planilhas, faturamento e downloads de notas fiscais.',
    category: 'Automação & RPA',
    tags: ['RPA', 'Python', 'UiPath', 'Eficiência 24/7'],
    iconName: 'Bot',
    isPopular: true
  },
  {
    id: 'sol-11',
    companyId: 'automacao',
    companyName: 'Oxys Automação',
    title: 'Sensores IoT & Telemetria Industrial',
    description: 'Monitoramento remoto de temperatura, umidade, vibração e consumo energético com dashboards em tempo real.',
    category: 'Automação & RPA',
    tags: ['IoT', 'Sensores', 'Telemetria', 'Indústria 4.0'],
    iconName: 'Radio'
  },
  {
    id: 'sol-12',
    companyId: 'automacao',
    companyName: 'Oxys Automação',
    title: 'Automação de Linhas & Processos',
    description: 'Integração de controladores lógicos, esteiras, leitores de código de barras e balanças integradas ao software central.',
    category: 'Automação & RPA',
    tags: ['SCADA', 'CLP', 'Integração Física', 'Controle'],
    iconName: 'Cpu'
  }
];

export const ECOSYSTEM_FEATURES: EcosystemFeature[] = [
  {
    title: 'Visão Tecnológica 360°',
    description: 'Enquanto outros fornecedores atendem apenas um pedaço do desafio, o Grupo Oxys une software, infraestrutura, nuvem e automação em uma única estratégia coerente.',
    iconName: 'Orbit',
    highlight: '1 Único Ponto de Contato'
  },
  {
    title: 'Integração Nativa entre Frentes',
    description: 'O software desenvolvido pela Oxys Sistemas roda perfeitamente na infraestrutura da Oxys Cloud, monitorado pela Oxys TI e integrado às esteiras da Oxys Automação.',
    iconName: 'GitMerge',
    highlight: 'Sinergia Total'
  },
  {
    title: 'Segurança & Conformidade Contínua',
    description: 'Da linha de código até o cabo de rede e a esteira na nuvem, todas as entregas seguem protocolos rígidos de cibersegurança e conformidade LGPD.',
    iconName: 'Lock',
    highlight: 'Proteção Extrema'
  },
  {
    title: 'Escalabilidade com ROI Comprovado',
    description: 'Projetamos sua infraestrutura e seus sistemas para crescerem conforme seu negócio escala, eliminando gargalos e retrabalhos caros no futuro.',
    iconName: 'BarChart3',
    highlight: 'Crescimento Sustentável'
  }
];

export const GROUP_STATS = [
  { value: '4', label: 'Empresas Especializadas', subtext: 'Sinergia tecnológica' },
  { value: '+10', label: 'Anos de Experiência', subtext: 'Transformando empresas' },
  { value: '99.9%', label: 'Disponibilidade de Serviços', subtext: 'Compromisso com SLA' },
  { value: '+300', label: 'Clientes Atendidos', subtext: 'Em todo o território' },
];
