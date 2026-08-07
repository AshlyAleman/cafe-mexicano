export interface CoffeeItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'tradicional' | 'espresso' | 'frio' | 'especialidad';
  region: 'Chiapas' | 'Oaxaca' | 'Veracruz' | 'Mezcla Artesanal';
  roastLevel: 'LIGERO' | 'MEDIO' | 'OSCURO';
  intensity: number; 
  notes: string[];
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  preparationTime?: string;
  calories?: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface CartItem {
  coffee: CoffeeItem;
  quantity: number;
  grindOption?: 'grano' | 'fino' | 'medio' | 'prensa';
}

export interface RegionInfo {
  id: string;
  name: string;
  altitude: string;
  notes: string[];
  description: string;
  roastRecommendation: string;
  image: string;
}
