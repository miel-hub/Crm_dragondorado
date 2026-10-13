import { Card } from "@/components/ui/card"
import { Flame, Heart, Users, Award, TrendingUp, UtensilsCrossed } from "lucide-react"

export default function NosotrosPage() {
  const benefits = [
    {
      icon: Flame,
      title: "Sazón del Dragón",
      description: "Fuego de wok y técnicas ancestrales chinas",
    },
    {
      icon: Heart,
      title: "Hecho con Tradición",
      description: "Recetas familiares heredadas por generaciones",
    },
    {
      icon: Users,
      title: "Atención Cálida",
      description: "Servicio peruano con hospitalidad de hogar",
    },
    {
      icon: Award,
      title: "Ingredientes Premium",
      description: "Frescos locales y especies importadas auténticas",
    },
    {
      icon: TrendingUp,
      title: "Innovación Digital",
      description: "Fidelidad Chifa y pedidos online rápidos",
    },
    {
      icon: UtensilsCrossed,
      title: "Menú Variado",
      description: "Chaufa, Tallarines Saltados, Wantanes y más",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Fachada%20restaurante%20chifa%20peruano%20moderno%2C%20pared%20roja%20con%20mural%20grande%20de%20drag%C3%B3n%20negro%20y%20rojo%20estilo%20prehisp%C3%A1nico%2C%20toldo%20de%20madera%20marr%C3%B3n%2C%20jard%C3%ADn%20interior%20con%20arbustos%2C%20coches%20calle%20Lima%2C%20d%C3%ADa%20soleado%20cielo%20azul%2C%20fotograf%C3%ADa%20real%20edificio%20comercial&image_size=landscape_16_9"
            alt="Dragón Dorado - Fachada del restaurante chifa en Lima con mural de dragón"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-5xl font-serif font-bold text-white mb-4">Nuestra Historia 🐉🔥</h1>
              <p className="text-xl text-white/90">Auténtica fusión chifa peruana en el corazón de Lima</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">¿Quiénes Somos?</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-bold text-primary">Dragón Dorado</span> nació en el corazón de Lima de la mano
                  de una familia con raíces chinas y peruanas, heredando recetas que combinan la sazón del wok con los
                  ingredientes frescos de la costa central del Perú.
                </p>
                <p>
                  Somos más que un restaurante chifa. Somos el punto de encuentro donde la tradición cantonesa se mezcla
                  con el sabor limeño. Cada plato lleva el fuego del Dragón: arroces chaufa doraditos, tallarines
                  saltados con aroma a ajo y jengibre, wantanes crujientes y los clásicos que conquistaron a tres
                  generaciones de familias peruanas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mesa%20de%20restaurante%20chifa%20peruano%20servida%2C%20surtido%20de%20platos%3A%20wantanes%20fritos%20triangulares%2C%20lomo%20saltado%20de%20res%20con%20piment%C3%B3n%20rojo%2C%20pollo%20kung%20pao%20cacahuates%2C%20camarones%20saltados%2C%20arroz%20chaufa%20chancho%2C%20picantes%2C%20platos%20negros%20cer%C3%A1mica%2C%20bandeja%20madera%2C%20mantel%20blanco%2C%20iluminaci%C3%B3n%20c%C3%A1lida%2C%20fotograf%C3%ADa%20gastron%C3%B3mica%20profesional%204K&image_size=landscape_4_3"
                alt="Surtido de platos chifa: wantanes, lomo saltado, arroz chaufa y especiales del Dragón"
                className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-[color:var(--brand-gold)]"
              />
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Cartel%20publicitario%20restaurante%20chifa%20drag%C3%B3n%20peruano%2C%20fondo%20rojo%20y%20dorado%2C%20logotipo%20drag%C3%B3n%20dorado%203D%2C%20texto%20CHIFA%20DRAGON%20grande%2C%20due%C3%B1o%20sonriente%20traje%20oriental%20rojo%20con%20bordados%20drag%C3%B3n%2C%20estatua%20buda%20gordo%20dorado%2C%20faroles%20rojos%20chinos%2C%20platos%20de%20arroz%20chaufa%20camarones%2C%20iconos%20delivery%2C%20folleto%20publicitario%20profesional&image_size=portrait_4_3"
                alt="Dragón Dorado - Propietario y carta publicitaria oficial del chifa"
                className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-[color:var(--brand-gold)]"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <Card className="p-8 border-2 border-border hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Flame className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Misión</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ofrecer auténtica comida chifa peruana preparada con técnicas ancestrales de wok, ingredientes
                    frescos locales y sazón de tradición familiar, creando experiencias gastronómicas memorables en
                    cada visita.
                  </p>
                  <p>
                    Nos comprometemos a servir platos que honren la fusión sino-peruana, apoyando a productores de
                    Lima y brindando un servicio cálido que haga sentir a cada cliente como en casa.
                  </p>
                </div>
              </Card>

              {/* Vision */}
              <Card className="p-8 border-2 border-border hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Visión</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ser el restaurante chifa líder en Lima, reconocido por nuestra excelencia en sazón tradicional,
                    calidad de ingredientes y compromiso con la innovación digital que facilita la experiencia de
                    nuestros comensales.
                  </p>
                  <p>
                    Aspiramos a compartir la cultura chifa peruana con cada generación, manteniendo intactos los
                    valores que nos definen: tradición, calidad, calidez y pasión por cada plato que sale de nuestra
                    cocina.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">¿Por Qué Elegirnos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre los beneficios que hacen de Dragón Dorado tu chifa favorito en Lima 🥡🥢
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group border-border hover:border-[color:var(--brand-gold)]">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-7 w-7 text-primary group-hover:text-[color:var(--brand-gold)] transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Valores del Dragón 🐉</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Tradición", desc: "Recetas ancestrales chifa" },
                { title: "Pasión", desc: "Fuego y wok en cada plato" },
                { title: "Comunidad", desc: "Compromiso con Lima" },
                { title: "Calidad", desc: "Frescura garantizada" },
              ].map((value, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-bold mb-2 text-[color:var(--brand-gold)]">{value.title}</h3>
                  <p className="text-white/80">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
