import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Leaf, Zap, Coffee } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';

const buffetTypes = [
  {
    icon: Leaf,
    title: 'Buffet Saudável Tradicional',
    description: 'Opções equilibradas com arroz integral, proteínas grelhadas, saladas variadas e acompanhamentos.',
    message: 'Gostaria de um orçamento para Buffet Saudável Tradicional'
  },
  {
    icon: Zap,
    title: 'Buffet Fitness',
    description: 'Cardápios low carb, proteicos e funcionais para eventos fitness e corporativos.',
    message: 'Gostaria de um orçamento para Buffet Fitness'
  },
  {
    icon: Coffee,
    title: 'Coffee Break Saudável',
    description: 'Mini sanduíches naturais, bolos integrais, sucos naturais, frutas e snacks saudáveis.',
    message: 'Gostaria de um orçamento para Coffee Break Saudável'
  },
  {
    icon: Leaf,
    title: 'Buffet Vegetariano',
    description: 'Pratos 100% vegetais, equilibrados e saborosos para todos os gostos.',
    message: 'Gostaria de um orçamento para Buffet Vegetariano'
  },
];

const planos = [
  {
    nome: 'Essencial',
    preco: 45,
    descricao: 'Plano básico para começar',
    itens: [
      '1 proteína',
      '2 acompanhamentos',
      '2 saladas',
      '1 bebida natural'
    ]
  },
  {
    nome: 'Premium',
    preco: 65,
    descricao: 'Nosso plano mais popular',
    itens: [
      '2 proteínas',
      '3 acompanhamentos',
      '3 saladas',
      'Sobremesa saudável',
      'Bebidas naturais'
    ],
    destaque: true
  },
  {
    nome: 'Corporativo',
    preco: null,
    descricao: 'Para empresas acima de 30 pessoas',
    itens: [
      'Cardápio personalizado',
      'Múltiplas proteínas',
      'Acompanhamentos variados',
      'Saladas premium',
      'Sobremesas',
      'Bebidas diversas'
    ]
  }
];

export default function Buffet() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    tipoEvento: '',
    convidados: '',
    data: '',
    local: '',
    observacoes: ''
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const handleWhatsAppClick = (buffetType: string) => {
    const message = `Olá! ${buffetType}. Gostaria de mais informações e um orçamento.`;
    const whatsappUrl = `https://wa.me/5512988957030?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um orçamento para evento.\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\nTelefone: ${formData.telefone}\nEmail: ${formData.email}\nTipo de Evento: ${formData.tipoEvento}\nNúmero de Convidados: ${formData.convidados}\nData: ${formData.data}\nLocal: ${formData.local}\nObservações: ${formData.observacoes}`;
    const whatsappUrl = `https://wa.me/5512988957030?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] mb-6">
              Buffet Saudável para <span className="text-primary">Eventos</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sabores que encantam, apresentações que impressionam e uma experiência gastronômica leve e sofisticada.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Buffet */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black mb-6">
              Tipos de Buffet Disponíveis
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {buffetTypes.map((buffet, index) => {
              const Icon = buffet.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{buffet.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{buffet.description}</p>
                  <Button
                    onClick={() => handleWhatsAppClick(buffet.title)}
                    className="w-full rounded-full"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black mb-6">
              Nossos Planos
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor se adequa ao seu evento
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {planos.map((plano, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 transition-all ${
                  plano.destaque
                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-105'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <h3 className={`text-3xl font-bold mb-2 ${plano.destaque ? 'text-white' : 'text-primary'}`}>
                  {plano.nome}
                </h3>
                <p className={`text-sm mb-6 ${plano.destaque ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plano.descricao}
                </p>

                {plano.preco !== null ? (
                  <div className="mb-8">
                    <span className={`text-4xl font-black ${plano.destaque ? 'text-white' : 'text-primary'}`}>
                      R$ {plano.preco}
                    </span>
                    <span className={`text-sm ${plano.destaque ? 'text-white/80' : 'text-muted-foreground'}`}>
                      /pessoa
                    </span>
                  </div>
                ) : (
                  <div className="mb-8">
                    <p className={`text-2xl font-bold ${plano.destaque ? 'text-white' : 'text-primary'}`}>
                      Sob Consulta
                    </p>
                  </div>
                )}

                <ul className="space-y-4 mb-8">
                  {plano.itens.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plano.destaque ? 'text-white' : 'text-primary'}`} />
                      <span className={plano.destaque ? 'text-white' : 'text-muted-foreground'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsAppClick(`Plano ${plano.nome}`)}
                  className={`w-full rounded-full ${
                    plano.destaque ? 'bg-white text-primary hover:bg-white/90' : ''
                  }`}
                  variant={plano.destaque ? 'default' : 'outline'}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black mb-6">
              Solicite seu Orçamento
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em breve
            </motion.p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Nome *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nome da empresa"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Telefone *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(12) 98895-7030"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Tipo de Evento *</label>
                <select
                  required
                  value={formData.tipoEvento}
                  onChange={(e) => setFormData({...formData, tipoEvento: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione...</option>
                  <option value="Corporativo">Corporativo</option>
                  <option value="Confraternização">Confraternização</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Evento Fitness">Evento Fitness</option>
                  <option value="Outro">Outro</option>
                </select>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Número de Convidados *</label>
                <input
                  type="number"
                  required
                  value={formData.convidados}
                  onChange={(e) => setFormData({...formData, convidados: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="30"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Data do Evento *</label>
                <input
                  type="date"
                  required
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-bold mb-2">Local *</label>
                <input
                  type="text"
                  required
                  value={formData.local}
                  onChange={(e) => setFormData({...formData, local: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Endereço do evento"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mb-8">
              <label className="block text-sm font-bold mb-2">Observações</label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={4}
                placeholder="Informações adicionais sobre seu evento..."
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg font-bold">
                Enviar Solicitação
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black mb-6">
              Por que escolher a NutreChefy para seu evento?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Ingredientes Frescos', description: 'Qualidade premium em cada prato' },
              { title: 'Montagem Sofisticada', description: 'Apresentação impecável e elegante' },
              { title: 'Cardápio Personalizado', description: 'Adaptado às suas necessidades' },
              { title: 'Opções Fit e Tradicionais', description: 'Para todos os gostos' },
              { title: 'Equipe Organizada', description: 'Profissionais experientes' },
              { title: 'Pontualidade Garantida', description: 'Sempre no horário' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
