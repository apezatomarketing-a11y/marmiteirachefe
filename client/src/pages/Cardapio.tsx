import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';

interface Marmita {
  id: number;
  nome: string;
  descricao: string;
  categoria: 'Tradicional' | 'Fitness' | 'Especial';
  imagem: string;
  precos: {
    mini: number;
    pequena: number;
    media: number;
  };
}

const marmitas: Marmita[] = [
  {
    id: 1,
    nome: 'Filé de Frango Grelhado',
    descricao: 'Filé de frango grelhado, arroz branco soltinho, feijão nutritivo e cenoura abafada.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-frango-grelhado-WUmwPfnMYALg2YvV4iVua3.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 2,
    nome: 'Sobrecoxa Assada',
    descricao: 'Sobrecoxa assada suculenta, arroz de forno com legumes e ovos cozidos.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-sobrecoxa-assada-3djRVqCPY4VaHGHo3mFWF2.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 3,
    nome: 'Frango Desfiado no Molho',
    descricao: 'Frango desfiado ao molho caseiro, arroz branco, feijão nutritivo e purê de inhame.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-frango-desfiado-hfe5sHPYgfSH8GBpwu6Ubt.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 4,
    nome: 'Carne Moída Refogada',
    descricao: 'Carne moída temperada, batatinha e vagem, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-carne-moida-AQpJjmeDANuLfk9qQxM3NX.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 5,
    nome: 'Carne Cozida com Legumes',
    descricao: 'Carne cozida macia com legumes, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-carne-cozida-FdwUjNjf7zGm6juzb59P9w.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 6,
    nome: 'Isca de Patinho',
    descricao: 'Isca de patinho grelhada, beterraba assada e arroz com cenoura.',
    categoria: 'Fitness',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-isca-patinho-iUJfvpaQ9uVYfTQehx7wkN.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 7,
    nome: 'Bife de Panela',
    descricao: 'Bife de panela suculento, purê de batata doce, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-bife-panela-Aqnur6PrG6GX3KmgYX3iTh.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 8,
    nome: 'Mini Hambúrguer Grelhado',
    descricao: 'Mini hambúrguer grelhado, brócolis crocante, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-mini-hamburguer-QdXkyvPUbTy24w7XRCr6UC.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 9,
    nome: 'Lombo Suíno com Barbecue',
    descricao: 'Lombo suíno com molho barbecue, grão de bico ao curry e arroz branco.',
    categoria: 'Especial',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-lombo-barbecue-66Xn2aBrX2jPgshfyYZeEd.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 10,
    nome: 'Tilápia na Manteiga',
    descricao: 'Tilápia na manteiga, abobrinha refogada e arroz com tomates.',
    categoria: 'Fitness',
    imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663107404544/Z8XkiYPhoxUGCABZJvVuzr/marmita-tilapia-manteiga-MoKpLfo3nRRxoukMKAi3U.webp',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
];

const combos = [
  { tamanho: 'Mini (250g)', unidades: 10, precos: { 10: 200, 20: 380, 30: 540 } },
  { tamanho: 'Pequena (350g)', unidades: 10, precos: { 10: 230, 20: 440, 30: 630 } },
  { tamanho: 'Média (450g)', unidades: 10, precos: { 10: 280, 20: 540, 30: 780 } },
];

export default function Cardapio() {
  const [selectedSize, setSelectedSize] = useState<'mini' | 'pequena' | 'media'>('pequena');
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = marmitas.reduce((sum, m) => {
    const qty = quantities[m.id] || 0;
    const price = m.precos[selectedSize];
    return sum + (qty * price);
  }, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] mb-6">
              Cardápio Semanal
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marmitas caseiras, equilibradas e prontas para facilitar sua rotina
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tamanhos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 sticky top-0 z-40">
        <div className="container max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4 sm:mb-0">Selecione o Tamanho:</h3>
            </div>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
              {['mini', 'pequena', 'media'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size as any)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {size === 'mini' ? 'Mini (250g)' : size === 'pequena' ? 'Pequena (350g)' : 'Média (450g)'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marmitas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {marmitas.map((marmita) => (
              <motion.div
                key={marmita.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={marmita.imagem}
                    alt={marmita.nome}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {marmita.categoria}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{marmita.nome}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{marmita.descricao}</p>

                  <div className="mb-6 pb-6 border-b">
                    <div className="text-2xl font-bold text-primary">
                      R$ {marmita.precos[selectedSize].toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedSize === 'mini' ? '250g' : selectedSize === 'pequena' ? '350g' : '450g'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(marmita.id, -1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-bold min-w-[40px] text-center">
                        {quantities[marmita.id] || 0}
                      </span>
                      <button
                        onClick={() => updateQuantity(marmita.id, 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <Button
                      size="sm"
                      className="flex-1"
                      disabled={!quantities[marmita.id] || quantities[marmita.id] === 0}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resumo do Carrinho */}
      {totalItems > 0 && (
        <section className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl p-4 sm:p-6 z-50">
          <div className="container max-w-7xl flex items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Total de itens: {totalItems}</p>
              <p className="text-3xl font-black text-primary">R$ {totalPrice.toFixed(2)}</p>
            </div>
            <Button size="lg" className="rounded-full h-14 px-8">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Ir para Carrinho
            </Button>
          </div>
        </section>
      )}

      {/* Combos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 mt-12">
        <div className="container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black mb-6">
              Combos com Desconto
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha seus sabores favoritos e monte seu combo com preços especiais
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {combos.map((combo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{combo.tamanho}</h3>
                <div className="space-y-4 mb-8">
                  {[10, 20, 30].map((units) => (
                    <div key={units} className="flex items-center justify-between pb-4 border-b last:border-b-0">
                      <div>
                        <p className="font-bold">{units} unidades</p>
                        <p className="text-sm text-muted-foreground">R$ {(combo.precos[units as keyof typeof combo.precos] / units).toFixed(2)}/un</p>
                      </div>
                      <p className="text-2xl font-bold text-accent">
                        R$ {combo.precos[units as keyof typeof combo.precos].toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full h-12">
                  Escolher Combo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-accent/10 border-2 border-accent rounded-2xl p-8 text-center"
          >
            <p className="text-lg font-bold text-accent mb-2">📌 Observação Importante</p>
            <p className="text-muted-foreground">
              Aceitamos pedidos com dois ou mais pratos repetidos por combo. Encaminhe o comprovante de pagamento no ato da contratação do kit escolhido.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
