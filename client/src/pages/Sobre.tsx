import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Award, Users, Leaf } from 'lucide-react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';

export default function Sobre() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
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
              Sobre a <span className="text-primary">NutreChefy</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça a história, missão e valores que guiam cada marmita que preparamos
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Chef Isabel Carvalho */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative h-[400px] sm:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
                IC
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Chef <span className="text-primary">Isabel Carvalho</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de 15 anos de experiência na culinária, Isabel Carvalho é a criadora e alma da NutreChefy. Sua paixão por alimentação saudável e sabor caseiro transformou uma simples ideia em um movimento de mudança de hábitos alimentares.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Formada em Gastronomia e especializada em Nutrição Clínica, Isabel acredita que comer bem não precisa ser complicado ou caro. Cada receita é desenvolvida com cuidado, testada e aprovada para garantir que você receba o melhor em qualidade e sabor.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Seu compromisso é simples: trazer para sua mesa refeições que alimentam o corpo e a alma, feitas com ingredientes frescos e muito amor.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/amarmiteirachef/" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="rounded-full">
                    Siga no Instagram
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
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
              Nossos Valores
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer refeições saudáveis, equilibradas e saborosas que transformem a rotina de quem busca praticidade sem abrir mão da qualidade e do sabor caseiro.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em marmitas saudáveis na região, reconhecida pela qualidade, inovação e compromisso com a saúde e bem-estar de nossos clientes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Leaf className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Qualidade, honestidade, sustentabilidade e cuidado. Cada marmita é feita com ingredientes frescos, temperos naturais e muito amor.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Por que escolher a NutreChefy?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Ingredientes Frescos',
                description: 'Selecionamos ingredientes de qualidade premium, sempre frescos e de fornecedores confiáveis.'
              },
              {
                title: 'Cardápio Variado',
                description: 'Novas receitas toda semana para você não se cansar. Opções tradicionais e fitness.'
              },
              {
                title: 'Marmitas Congeladas',
                description: 'Validade de 30 dias congeladas. Aquecimento rápido no micro-ondas. Praticidade garantida.'
              },
              {
                title: 'Entrega Rápida e Segura',
                description: 'Entregamos com cuidado na sua porta. Embalagem segura que mantém a qualidade.'
              },
              {
                title: 'Preços Acessíveis',
                description: 'Alimentação saudável não precisa ser cara. Oferecemos o melhor custo-benefício.'
              },
              {
                title: 'Atendimento Personalizado',
                description: 'Dúvidas? Sugestões? Estamos sempre disponíveis para ajudar no WhatsApp.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              Pronto para Começar?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Escolha suas marmitas favoritas e comece sua jornada de alimentação saudável hoje mesmo.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cardapio">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg font-bold">
                  Ver Cardápio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/5512988895030" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 sm:h-16 px-8 sm:px-10 text-lg font-bold border-white text-white hover:bg-white/10">
                  Fale Conosco
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
