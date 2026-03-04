import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Heart, Star, Clock, Zap, Leaf, CheckCircle2 } from 'lucide-react';
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

  const floatAnimation = {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <Layout>
      {/* Hero Section - NutreChefy */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div 
                variants={fadeInUp} 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-widest shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                <span>Sabor de Casa em Jacareí</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                Marmitas Saudáveis com <span className="text-primary relative">
                  Sabor Real
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Alimentação equilibrada, prática e feita com carinho para sua rotina. Marmitas congeladas de alta qualidade preparadas com ingredientes frescos e temperos naturais.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
                <Link href="/cardapio">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="w-full sm:w-auto rounded-[20px] h-16 sm:h-20 px-10 sm:px-12 text-xl sm:text-2xl font-black shadow-2xl shadow-primary/30 hover:shadow-primary/50 group transition-all duration-500">
                      Ver Cardápio
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/buffet">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-[20px] h-16 sm:h-20 px-10 sm:px-12 text-xl font-black border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all duration-500">
                      Buffet Eventos
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 sm:gap-8 pt-10 border-t border-border/50">
                {[
                  { label: 'Sabores Diferentes', end: 10, suffix: '+' },
                  { label: 'Ingredientes Frescos', end: 100, suffix: '%' },
                  { label: 'Congeladas', end: 30, suffix: '+ dias' },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left group">
                    <div className="text-2xl sm:text-4xl font-black text-primary mb-1 group-hover:scale-110 transition-transform inline-block">
                      <AnimatedCounter end={stat.end} />{stat.suffix}
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <motion.div 
                animate={floatAnimation}
                className="relative z-10"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[40px] blur-2xl opacity-50" />
                <img 
                  src="/images/frango-grelhado.png"
                  alt="Marmita NutreChefy"
                  className="relative w-full aspect-square object-cover rounded-[40px] shadow-2xl border-8 border-white"
                />
                
                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
                >
                  <div className="p-2 bg-green-100 rounded-xl">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase">Natural</p>
                    <p className="font-bold">100% Saudável</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
                >
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase">Feito com</p>
                    <p className="font-bold">Muito Amor</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="container max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-10"
          >
            {[
              { icon: Leaf, title: 'Ingredientes Premium', desc: 'Trabalhamos apenas com fornecedores locais e ingredientes frescos selecionados.', color: 'bg-green-50 text-green-600' },
              { icon: Zap, title: 'Praticidade Total', desc: 'Marmitas prontas para aquecer em minutos, perfeitas para sua rotina agitada.', color: 'bg-blue-50 text-blue-600' },
              { icon: ShieldCheck, title: 'Segurança Alimentar', desc: 'Processos rigorosos de higiene e congelamento ultra-rápido para manter nutrientes.', color: 'bg-purple-50 text-purple-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-muted/30 border border-border hover:border-primary/30 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
        />
        
        <div className="container max-w-5xl relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Transforme sua <span className="text-accent">Alimentação</span> Hoje
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
              Junte-se a centenas de clientes em Jacareí que já descobriram o prazer de comer bem com praticidade.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/cardapio">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-2xl h-16 sm:h-20 px-12 text-xl font-black shadow-2xl">
                    Fazer Meu Pedido
                    <ShoppingBag className="ml-3 w-6 h-6" />
                  </Button>
                </motion.div>
              </Link>
              <a href="https://wa.me/5512988957030" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl h-16 sm:h-20 px-12 text-xl font-black border-white text-white hover:bg-white/10">
                    Chamar no WhatsApp
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
