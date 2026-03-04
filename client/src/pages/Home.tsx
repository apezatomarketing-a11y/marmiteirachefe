import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Heart, Star, Clock, Zap, Leaf } from 'lucide-react';
import { Link } from 'wouter';
import AnimatedCounter from '@/components/Counter';
import Layout from '@/components/Layout';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <Layout>
      {/* Hero Section - NutreChefy */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Animated Background - Leaf Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1200 800">
            <defs>
              <pattern id="leaves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M100,50 Q120,80 100,110 Q80,80 100,50" fill="#5A7D3B" opacity="0.6" />
                <path d="M100,50 Q120,80 100,110 Q80,80 100,50" fill="none" stroke="#8FAF5A" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#leaves)" />
          </svg>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
                <Leaf className="w-4 h-4 animate-pulse" />
                Alimentação Saudável com Sabor
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 sm:mb-8">
                Marmitas Saudáveis com <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Sabor de Casa</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Alimentação equilibrada, prática e feita com carinho para sua rotina. Marmitas congeladas de alta qualidade preparadas com ingredientes frescos e temperos naturais.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-12">
                <Link href="/cardapio">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 group transition-all duration-300 hover:scale-105">
                    Ver Cardápio
                    <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link href="/buffet">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                    Buffet para Eventos
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={10} />+
                  </div>
                  <p className="text-sm text-muted-foreground">Sabores Diferentes</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={100} />%
                  </div>
                  <p className="text-sm text-muted-foreground">Ingredientes Frescos</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={30} />+ dias
                  </div>
                  <p className="text-sm text-muted-foreground">Congeladas</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[500px] sm:h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-frango-grelhado-WUmwPfnMYALg2YvV4iVua3.webp"
                alt="Marmita NutreChefy"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre NutreChefy */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                Sobre a <span className="text-primary">NutreChefy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A NutreChefy nasceu com o propósito de oferecer refeições saudáveis, equilibradas e saborosas para quem busca praticidade sem abrir mão da qualidade. Cada marmita é preparada com ingredientes selecionados, temperos naturais e muito cuidado.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sob a liderança da Chef Isabel Carvalho, transformamos a alimentação saudável em uma experiência acessível e deliciosa para toda a família.
              </p>
              <Link href="/sobre">
                <Button variant="default" size="lg" className="rounded-full">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Leaf className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Ingredientes Frescos</h3>
                <p className="text-sm text-muted-foreground">Selecionados com cuidado para garantir qualidade</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Star className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Cardápio Variado</h3>
                <p className="text-sm text-muted-foreground">Novas receitas toda semana</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Opções Fit</h3>
                <p className="text-sm text-muted-foreground">Pratos leves e equilibrados</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">Praticidade</h3>
                <p className="text-sm text-muted-foreground">Aquecimento rápido no micro-ondas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Como Funciona
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simples, rápido e delicioso. Veja como é fácil começar sua jornada com a NutreChefy
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { number: '1', title: 'Escolha suas Marmitas', description: 'Navegue pelo nosso cardápio e escolha seus sabores favoritos' },
              { number: '2', title: 'Adicione ao Carrinho', description: 'Selecione a quantidade e tamanho desejado' },
              { number: '3', title: 'Finalize o Pedido', description: 'Escolha a forma de pagamento (PIX, Cartão ou Transferência)' },
              { number: '4', title: 'Receba em Casa', description: 'Entrega rápida e segura na sua porta' },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl font-black mb-4 opacity-20">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-primary hidden md:block" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Pronto para Comer Bem?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Comece sua jornada de alimentação saudável hoje mesmo. Marmitas deliciosas entregues na sua porta.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cardapio">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg font-bold">
                  Ver Cardápio Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/5512988895030" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg font-bold border-white text-white hover:bg-white/10">
                  Fale Conosco no WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
