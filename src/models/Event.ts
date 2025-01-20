export type EventPoster = {
  url: string;
  size: number;
  name: string;
  hash: string;
  ext?: string;
};

export interface Event {
  readonly documentId: string;
  readonly id: number;
  title: string;
  date: Date;
  description: string;
  place: string;
  poster: EventPoster;
  price?: number;
  presenters: string;
  // TODO: mudar padrão de nomenclatura
  limit_inscriptions?: number;
  start_inscriptions?: Date;
  end_inscriptions?: Date;
  slug: string;
  active: boolean;
}
