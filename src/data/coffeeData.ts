import { CoffeeItem, ServiceItem, BlogPost, RegionInfo } from '../types';

export const COFFEE_ITEMS: CoffeeItem[] = [
  {
    id: 'cafe-olla',
    name: 'Café de Olla Tradicional',
    subtitle: 'El clásico mexicano infusionado con canela y piloncillo',
    category: 'tradicional',
    region: 'Oaxaca',
    roastLevel: 'MEDIO',
    intensity: 3,
    notes: ['Canela', 'Piloncillo', 'Anís estrella', 'Cacao'],
    description: 'Infusionado artesanalmente en olla de barro cocido con canela entera de Ceilán, piloncillo artesanal y un toque sutil de clavo de olor. Una receta ancestral con un aroma reconfortante que evoca los hogares mexicanos.',
    price: 58,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    preparationTime: '5 min',
    calories: 85
  },
  {
    id: 'espresso-chiapas',
    name: 'Espresso Chiapaneco',
    subtitle: '100% Arábica de altura del Soconusco',
    category: 'espresso',
    region: 'Chiapas',
    roastLevel: 'OSCURO',
    intensity: 5,
    notes: ['Chocolate amargo', 'Nuez tostada', 'Frutos rojos'],
    description: 'Extracción concentrada de granos cultivados a 1,400 metros sobre el nivel del mar en la Sierra Madre de Chiapas. Cuerpo cremoso, acidez brillante balanceada y un prolongado retrogusto a cacao puro.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    preparationTime: '3 min',
    calories: 5
  },
  {
    id: 'capuchino-garat',
    name: 'Capuchino Garat Cacao',
    subtitle: 'Espresso de altura con leche cremada y cacao de Tabasco',
    category: 'espresso',
    region: 'Veracruz',
    roastLevel: 'MEDIO',
    intensity: 3,
    notes: ['Cacao Real', 'Vainilla', 'Crema suave'],
    description: 'Espresso doble suave balanceado con microespuma de leche entera de rancho y espolvoreado con cacao semiamargo de Comalcalco, Tabasco.',
    price: 68,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    preparationTime: '4 min',
    calories: 140
  },
  {
    id: 'cold-brew-artesanal',
    name: 'Cold Brew de Altura',
    subtitle: 'Maceración en frío durante 18 horas',
    category: 'frio',
    region: 'Veracruz',
    roastLevel: 'MEDIO',
    intensity: 4,
    notes: ['Cítricos dulces', 'Caramelo', 'Jazmín'],
    description: 'Extraído gota a gota en frío durante 18 horas para resaltar dulzura natural y eliminar acidez agresiva. Servido sobre hielo esférico cristalino.',
    price: 72,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    preparationTime: '2 min',
    calories: 10
  },
  {
    id: 'latte-papantla',
    name: 'Latte Vainilla de Papantla',
    subtitle: 'Con extracto natural de vaina de vainilla veracruzana',
    category: 'especialidad',
    region: 'Veracruz',
    roastLevel: 'LIGERO',
    intensity: 2,
    notes: ['Vainilla pura', 'Miel de azahar', 'Nuez de macadamia'],
    description: 'Suave latte endulzado con jarabe elaborado en casa utilizando auténtica vaina de vainilla con Denominación de Origen Papantla, Veracruz.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    preparationTime: '5 min',
    calories: 165
  },
  {
    id: 'flat-white-organico',
    name: 'Flat White Orgánico',
    subtitle: 'Doble ristretto de especialidad con finísima textura',
    category: 'especialidad',
    region: 'Chiapas',
    roastLevel: 'MEDIO',
    intensity: 4,
    notes: ['Almendra tostada', 'Mantequilla', 'Ciruela'],
    description: 'Para los amantes del café intenso con textura sedosa. Preparado con doble ristretto de grano orgánico certificado de la Reserva del Triunfo.',
    price: 69,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    preparationTime: '4 min',
    calories: 110
  },
  {
    id: 'carajillo-oaxaqueno',
    name: 'Carajillo Mezcalero & Café',
    subtitle: 'Bebida de especialidad con toque de mezcal artesanal',
    category: 'especialidad',
    region: 'Oaxaca',
    roastLevel: 'OSCURO',
    intensity: 4,
    notes: ['Espresso Intenso', 'Agave ahumado', 'Licor 43'],
    description: 'Una fusión audaz y sofisticada entre espresso recién extraído y licor de agave ahumado o tradicional Licor 43 agitado vigorosamente con hielo.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    preparationTime: '5 min',
    calories: 180
  },
  {
    id: 'frappe-horchata-coffee',
    name: 'Frappé Horchata & Espresso',
    subtitle: 'Refrescante combinación de horchata artesanal y café',
    category: 'frio',
    region: 'Mezcla Artesanal',
    roastLevel: 'MEDIO',
    intensity: 2,
    notes: ['Arroz artesanal', 'Canela molida', 'Espresso'],
    description: 'Nuestra horchata casera con leche de arroz, canela molida a mano y un shot doble de espresso montado con crema batida ligera.',
    price: 78,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    preparationTime: '5 min',
    calories: 220
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'molienda-medida',
    title: 'Molienda a la Medida',
    shortDesc: 'Ajustamos la molienda ideal para tu cafetera favorita al instante.',
    fullDesc: 'Lleva el grano recién tostado con el grado exacto de molienda que tu método requiere: prensa francesa, espresso, v60, cafetera italiana o de filtro tradicional.',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&q=80&w=800',
    features: ['Evaluación de método de extracción', 'Tostado de la semana', 'Molienda al momento', 'Empaque con válvula de desgasificación']
  },
  {
    id: 'barismo-catas',
    title: 'Catas & Experiencias de Barismo',
    shortDesc: 'Aprende a diferenciar aromas, notas y regiones en sesiones guiadas.',
    fullDesc: 'Impartidas por nuestros maestros baristas certificados. Descubre cómo influyen la altitud, el suelo volcánico y el tipo de secado en la taza final.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    features: ['Cata sensorial de 4 regiones', 'Taller de filtrados manuales', 'Certificado de participación', 'Bolsa de café de regalo (250g)']
  },
  {
    id: 'catering-eventos',
    title: 'Catering Barra Móvil de Café',
    shortDesc: 'Barra móvil profesional para bodas, conferencias y eventos privados.',
    fullDesc: 'Llevamos la experiencia del café de especialidad a tus eventos más importantes con baristas capacitados, máquinas profesionales y menú personalizado.',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
    features: ['Barra de espresso y barra fría', 'Baristas en vivo', 'Vasos compostables o loza', 'Menú con repostería artesanal']
  },
  {
    id: 'coworking-wifi',
    title: 'Espacio Co-Working & Relax',
    shortDesc: 'Conexión de alta velocidad, enchufes en cada mesa y ambiente tranquilo.',
    fullDesc: 'Diseñado para profesionales que buscan trabajar o reunirse mientras disfrutan de la mejor música ambiental y aroma a café recién molido.',
    iconName: 'Wifi',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800',
    features: ['Wi-Fi 6 de ultra alta velocidad', 'Mesas comunitarias e individuales', 'Salas de reunión reservables', 'Descuento refill de café del día']
  }
];

export const REGIONS: RegionInfo[] = [
  {
    id: 'chiapas',
    name: 'Chiapas (Soconusco y Jaltenango)',
    altitude: '1,200 - 1,750 msnm',
    notes: ['Cacao', 'Nuez', 'Frutos del bosque', 'Acidez cítrica'],
    description: 'Suelos volcánicos ricos en minerales y un clima húmedo perfecto otorgan a este grano un cuerpo redondo espectacular y notas a chocolate oscuro inolvidables.',
    roastRecommendation: 'Tueste Medio a Oscuro',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'oaxaca',
    name: 'Oaxaca (Pluma Hidalgo)',
    altitude: '1,300 - 1,600 msnm',
    notes: ['Canela', 'Caramelo', 'Almendra', 'Acidez suave'],
    description: 'Reconocido mundialmente por su sutileza y fragancia especiada. La brisa del Océano Pacífico combinada con la sierra oaxaqueña crea microclimas idílicos.',
    roastRecommendation: 'Tueste Medio',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'veracruz',
    name: 'Veracruz (Coatepec y Huatusco)',
    altitude: '1,100 - 1,500 msnm',
    notes: ['Vainilla', 'Miel', 'Cítricos dulces', 'Cuerpo sedoso'],
    description: 'Pioneros en la historia cafetalera de México. Coatepec ofrece tazas con elegancia aromática floral, dulzura natural pronunciada y ligereza armoniosa.',
    roastRecommendation: 'Tueste Ligero a Medio',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'El Secreto del Auténtico Café de Olla Mexicano',
    author: 'Chef Doña Martha Garat',
    date: '4 de Agosto, 2026',
    readTime: '4 min de lectura',
    category: 'Tradición',
    excerpt: 'Descubre por qué la olla de barro y el piloncillo artesanal transforman por completo el perfil aromático de tu taza matutina.',
    content: `El café de olla no es solo una bebida; es una expresión de la hospitalidad y la historia viva de México. Nacido durante la Revolución Mexicana, cuando las 'Adelitas' preparaban esta infusión caliente energizante para los campesinos y soldados con canela y piloncillo.

Para preparar la versión perfecta en casa:
1. Utiliza una olla de barro artesanal curada.
2. Agrega 1 litro de agua de manantial, 1 raja gruesa de canela de Ceilán y 90g de piloncillo oscuro.
3. Lleva a ebullición suave hasta disolver el piloncillo.
4. Apaga el fuego y añade 4 cucharadas soperas de café mexicano de tueste medio recién molido (molienda gruesa).
5. Deja reposar tapado por 5 minutos y cuela cuidadosamente. Servir en jarro de barro.`,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog-2',
    title: 'Diferencias entre Arábica Chiapaneco y Robusta',
    author: 'Barista Carlos Mendoza',
    date: '28 de Julio, 2026',
    readTime: '6 min de lectura',
    category: 'Cultura Cafetera',
    excerpt: 'Analizamos cómo la altitud y la especie botánica impactan la cafeína, la acidez y la untuosidad en la crema del espresso.',
    content: `En México, más del 90% de la producción de especialidad proviene de la especie *Coffea Arabica*, cultivada bajo la sombra de árboles autóctonos en la Sierra Madre.

A diferencia del grano Robusta que suele tener más cafeína y un amargor pronunciado, el Arábica chiapaneco destaca por:
- Más de 800 compuestos aromáticos complejos.
- Acidez cítrica elegante similar a la manzana verde o lima.
- Muestras de dulzura compleja que recuerdan al cacao sin refinar y al piloncillo.

Cuando buscas un espresso balanceado que deje una sensación placentera en paladar, el grano Arábica de sombra es siempre la elección suprema.`,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog-3',
    title: 'Guía de Métodos de Extracción en Casa',
    author: 'Sofía Valenzuela',
    date: '15 de Julio, 2026',
    readTime: '5 min de lectura',
    category: 'Guía Práctica',
    excerpt: 'Chemex, Prensa Francesa o V60: cuál elegir según el perfil de sabor que más disfrutas por las mañanas.',
    content: `Cada método de extracción resalta aspectos únicos del grano de café:

1. **Prensa Francesa**: Mantiene los aceites naturales del café intactos. Da una taza con mucho cuerpo, textura aterciopelada y sabor denso. Ideal para granos con tueste medio-oscuro de Chiapas.
2. **V60 / Pour Over**: Filtro de papel cónico que retiene los sedimentos. Resulta en una taza ultra limpia donde brillan la acidez floral y frutal de los granos de Veracruz.
3. **Aeropress**: Versátil e ideal para amantes del viaje. Permite jugar con presión y tiempos para obtener desde shots concentrados tipo espresso hasta tazas ligeras e intensas.`,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800'
  }
];
