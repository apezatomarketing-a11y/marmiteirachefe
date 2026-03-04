import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag, Minus, Plus, Star, Zap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';

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
    imagem: '/images/frango-grelhado.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 2,
    nome: 'Sobrecoxa Assada',
    descricao: 'Sobrecoxa assada suculenta, arroz de forno com legumes e ovos cozidos.',
    categoria: 'Tradicional',
    imagem: '/images/sobrecoxa-assada.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 3,
    nome: 'Frango Desfiado no Molho',
    descricao: 'Frango desfiado ao molho caseiro, arroz branco, feijão nutritivo e purê de inhame.',
    categoria: 'Tradicional',
    imagem: '/images/frango-desfiado.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 4,
    nome: 'Carne Moída Refogada',
    descricao: 'Carne moída temperada, batatinha e vagem, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: '/images/carne-moida.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 5,
    nome: 'Carne Cozida com Legumes',
    descricao: 'Carne cozida macia com legumes, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: '/images/carne-cozida.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 6,
    nome: 'Isca de Patinho',
    descricao: 'Isca de patinho grelhada, beterraba assada e arroz com cenoura.',
    categoria: 'Fitness',
    imagem: '/images/isca-patinho.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 7,
    nome: 'Bife de Panela',
    descricao: 'Bife de panela suculento, purê de batata doce, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: '/images/bife-panela.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 8,
    nome: 'Mini Hambúrguer Grelhado',
    descricao: 'Mini hambúrguer grelhado, brócolis crocante, arroz branco e feijão nutritivo.',
    categoria: 'Tradicional',
    imagem: '/images/mini-hamburguer.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 9,
    nome: 'Lombo Suíno com Barbecue',
    descricao: 'Lombo suíno com molho barbecue, grão de bico ao curry e arroz branco.',
    categoria: 'Especial',
    imagem: '/images/lombo-barbecue.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
  {
    id: 10,
    nome: 'Tilápia na Manteiga',
    descricao: 'Tilápia na manteiga, abobrinha refogada e arroz com tomates.',
    categoria: 'Fitness',
    imagem: '/images/tilapia-manteiga.png',
    precos: { mini: 20, pequena: 23, media: 28 }
  },
];

const combos = [
  { id: 'c1', tamanho: 'Mini (250g)', sizeKey: 'mini', precos: { 10: 200, 20: 380, 30: 540 } },
  { id: 'c2', tamanho: 'Pequena (350g)', sizeKey: 'pequena', precos: { 10: 230, 20: 440, 30: 630 } },
  { id: 'c3', tamanho: 'Média (450g)', sizeKey: 'media', precos: { 10: 280, 20: 540, 30: 780 } },
];

export default function Cardapio() {
  const [selectedSize, setSelectedSize] = useState<'mini' | 'pequena' | 'media'>('pequena');
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const { addItem } = useCartStore();


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const handleAddToCart = (marmita: Marmita) => {
    const qty = quantities[marmita.id] || 0;
    if (qty > 0) {
      addItem({
        id: `${marmita.id}-${selectedSize}`,
        name: `${marmita.nome} (${selectedSize === 'mini' ? '250g' : selectedSize === 'pequena' ? '350g' : '450g'})`,
        price: marmita.precos[selectedSize],
        quantity: qty,
        image: marmita.imagem,
        details: `Tamanho: ${selectedSize}`
      });
      toast.success("Adicionado ao carrinho!", {
        description: `${qty}x ${marmita.nome} adicionado com sucesso.`,
      });
      setQuantities(prev => ({ ...prev, [marmita.id]: 0 }));
    }
  };

  const handleAddComboToCart = (combo: any, units: number) => {
    const price = combo.precos[units];
    addItem({
      id: `combo-${combo.id}-${units}`,
      name: `Combo ${units} Marmitas - ${combo.tamanho}`,
      price: price,
      quantity: 1,
      details: `Tamanho: ${combo.tamanho} | Unidades: ${units}`
    });
    toast.success("Combo adicionado!", {
      description: `Combo de ${units} unidades adicionado ao carrinho.`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>Qualidade NutreChefy</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] mb-6">
              Cardápio <span className="text-primary">Semanal</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marmitas caseiras, equilibradas e prontas para facilitar sua rotina com o melhor sabor de Jacareí.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tamanhos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-md sticky top-20 z-40 border-y border-border">
        <div className="container max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Selecione o Tamanho:</h3>
            </div>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
              {['mini', 'pequena', 'media'].map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size as any)}
                  className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${
                    selectedSize === size
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white border-2 border-primary/20 text-primary hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {size === 'mini' ? 'Mini (250g)' : size === 'pequena' ? 'Pequena (350g)' : 'Média (450g)'}
                </motion.button>
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
                whileHover={{ y: -10 }}
                className="group bg-card rounded-[32px] overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-muted/50">
                  <motion.img
                    src={marmita.imagem}
                    alt={marmita.nome}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                    {marmita.categoria}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{marmita.nome}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">{marmita.descricao}</p>

                  <div className="flex items-center justify-between mb-6 pt-6 border-t border-border">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-muted-foreground uppercase">Preço</span>
                      <span className="text-2xl font-black text-foreground">
                        R$ {marmita.precos[selectedSize].toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center bg-muted rounded-2xl p-1">
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => updateQuantity(marmita.id, -1)}
                        className="p-2 hover:bg-background rounded-xl transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="px-4 font-bold min-w-[40px] text-center">
                        {quantities[marmita.id] || 0}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => updateQuantity(marmita.id, 1)}
                        className="p-2 hover:bg-background rounded-xl transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleAddToCart(marmita)}
                      className="w-full rounded-2xl h-14 font-bold shadow-lg shadow-primary/20"
                      disabled={!quantities[marmita.id] || quantities[marmita.id] === 0}
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Combos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <motion.div 
          animate={floatAnimation}
          className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={floatAnimation}
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        
        <div className="container max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6">
              <Zap className="w-4 h-4 fill-accent" />
              <span>Economia Garantida</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Combos com <span className="text-accent">Desconto</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha seus sabores favoritos e monte seu combo com preços especiais. Quanto mais você compra, mais você economiza!
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-10"
          >
            {combos.map((combo) => (
              <motion.div
                key={combo.id}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-card rounded-[40px] p-10 shadow-sm border border-border hover:border-accent/50 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                
                <h3 className="text-2xl font-black mb-8 text-foreground">{combo.tamanho}</h3>
                
                <div className="space-y-6 mb-10">
                  {[10, 20, 30].map((units) => (
                    <motion.div 
                      key={units} 
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/20"
                    >
                      <div>
                        <p className="font-black text-lg">{units} unidades</p>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          R$ {(combo.precos[units as keyof typeof combo.precos] / units).toFixed(2)} por marmita
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black text-accent">
                          R$ {combo.precos[units as keyof typeof combo.precos].toFixed(2)}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleAddComboToCart(combo, units)}
                          className="mt-2 text-xs font-black text-primary hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> ADICIONAR
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Seleção livre de sabores</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 bg-white/50 backdrop-blur-sm border-2 border-dashed border-accent/30 rounded-[32px] p-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-2xl font-black mb-4">Observação Importante</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Aceitamos pedidos com dois ou mais pratos repetidos por combo. Após a compra, nossa equipe entrará em contato para confirmar sua seleção de sabores.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
