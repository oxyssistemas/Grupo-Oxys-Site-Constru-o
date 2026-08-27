import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Share2,
  CheckCircle2,
  Layers,
  Server,
  Cloud,
  Cpu
} from 'lucide-react';
import { CompanyId } from '../types';
import { GlitchHeading } from './GlitchHeading';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  companyId: CompanyId;
  companyName: string;
  readTime: string;
  date: string;
  author: string;
  role: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Arquitetura de Microsserviços e ERP Sob Medida: Maximizando Eficiência Operacional',
    excerpt: 'Como a migração de sistemas legados monolíticos para arquiteturas modernas desacopladas reduziu em 65% o tempo de processamento fiscal e financeiro.',
    category: 'Engenharia de Software',
    companyId: 'sistemas',
    companyName: 'Oxys Sistemas',
    readTime: '5 min de leitura',
    date: '24 Fev 2026',
    author: 'Equipe de P&D',
    role: 'Oxys Sistemas',
    tags: ['Arquitetura', 'ERP', 'Performance']
  },
  {
    id: 'post-2',
    title: 'Blindagem Corporativa: Implementando Zero Trust e Monitoramento NOC/SOC 24/7',
    excerpt: 'Guia prático sobre como prevenir incidentes de ransomware com isolamento de endpoints e resposta a incidentes em menos de 15 minutos.',
    category: 'Cibersegurança & Redes',
    companyId: 'ti',
    companyName: 'Oxys TI',
    readTime: '7 min de leitura',
    date: '18 Fev 2026',
    author: 'Time de Segurança',
    role: 'Oxys TI',
    tags: ['Segurança', 'Zero Trust', 'SOC 24/7']
  },
  {
    id: 'post-3',
    title: 'FinOps na Prática: Reduzindo Custos em AWS e Azure sem Comprometer Disponibilidade',
    excerpt: 'Estratégias avançadas de contenção de custos de computação em nuvem utilizando spot instances inteligentes e auditoria de workloads.',
    category: 'Cloud & DevOps',
    companyId: 'cloud',
    companyName: 'Oxys Cloud',
    readTime: '6 min de leitura',
    date: '12 Fev 2026',
    author: 'Especialistas Cloud',
    role: 'Oxys Cloud',
    tags: ['FinOps', 'Multicloud', 'Kubernetes']
  },
  {
    id: 'post-4',
    title: 'Indústria Conectada: Integrando Sensores IoT e Robôs de Software (RPA)',
    excerpt: 'Casos reais de integração entre chão de fábrica e sistemas ERP através de telemetria em tempo real com barramentos MQTT e automação.',
    category: 'Automação Industrial & RPA',
    companyId: 'automacao',
    companyName: 'Oxys Automação',
    readTime: '8 min de leitura',
    date: '05 Fev 2026',
    author: 'Engenharia de Automação',
    role: 'Oxys Automação',
    tags: ['IoT', 'RPA', 'Indústria 4.0']
  }
];

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['Todos', 'Engenharia de Software', 'Cibersegurança & Redes', 'Cloud & DevOps', 'Automação Industrial & RPA'];

  const filteredPosts = selectedCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  const getCompanyBadgeStyle = (id: CompanyId) => {
    switch (id) {
      case 'sistemas': return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'ti': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'cloud': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'automacao': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
  };

  return (
    <section id="blog" className="py-24 relative bg-[#02050e] border-t border-slate-900 scroll-mt-12 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Conhecimento & Inovação</span>
            </div>
            <div className="mt-4">
              <GlitchHeading
                as="h2"
                text="Blog & Artigos Técnicos"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight"
              />
            </div>
            <p className="mt-3 text-slate-400 text-base">
              Artigos, pesquisas, boas práticas e insights produzidos pelos especialistas das empresas do Grupo Oxys.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.15, margin: '-40px 0px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="p-6 rounded-2xl bg-[#060b17] border border-slate-800/80 hover:border-blue-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${getCompanyBadgeStyle(post.companyId)}`}>
                    {post.companyName}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] border border-slate-800/80 font-mono-tech"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-950 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-300">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    {post.author}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors"
                >
                  <span>Ler Artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-[#080e1c] border border-blue-500/30 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-200"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${getCompanyBadgeStyle(selectedPost.companyId)}`}>
                {selectedPost.companyName}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-white px-2 py-1 text-sm bg-slate-800/50 rounded-lg"
              >
                ✕ Fechar
              </button>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4 font-heading">
              {selectedPost.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 mb-6">
              <span>{selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
              <p>{selectedPost.excerpt}</p>
              <p>
                No cenário corporativo moderno, a convergência entre sistemas de alta confiabilidade, infraestrutura resiliente e processos inteligentes de automação é o diferencial chave para empresas que almejam liderança no mercado.
              </p>
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-sky-200 my-4">
                💡 <strong>Pilar Estratégico Oxys:</strong> Nossas equipes desenvolvem arquiteturas modulares integradas para garantir que cada cliente evolua com escalabilidade e segurança de ponta a ponta.
              </div>
              <p>
                Para implementar essas soluções com o time do Grupo Oxys, entre em contato através de nossos canais oficiais e solicite uma avaliação técnica personalizada.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors"
              >
                Concluir Leitura
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
