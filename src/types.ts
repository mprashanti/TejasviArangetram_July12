export interface ProgramItem {
  id: string;
  name: string;
  type: string;
  raga: string;
  tala: string;
  composer: string;
  description: string;
  significance: string;
}

export interface BlessingMessage {
  id: string;
  name: string;
  city: string;
  message: string;
  flowerType: string;
  timestamp: string;
}

export interface GalleryItem {
  id: string;
  category: 'childhood' | 'training' | 'costume';
  title: string;
  description: string;
  imageUrl: string;
}
