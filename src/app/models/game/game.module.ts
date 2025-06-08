export interface Screenshot {
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface GameFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface DevelopmentUpdate {
  date: Date;
  title: string;
  description: string;
}

export interface MusicInfo {
  description: string;
  composer?: string;
  soundtracks?: string[];
}

export interface PressKit {
  downloadUrl?: string;
  contactEmail?: string;
}

export interface Game {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  genre: string;
  status: 'Em Desenvolvimento' | 'Lançado' | 'Em Breve';
  platforms: string[];
  coverImage: string;
  bannerImage?: string;
  screenshots?: Screenshot[];
  features?: GameFeature[];
  developmentUpdates?: DevelopmentUpdate[];
  musicInfo?: MusicInfo;
  pressKit?: PressKit;
  releaseDate?: Date;
  steamUrl?: string;
  itchUrl?: string;
}