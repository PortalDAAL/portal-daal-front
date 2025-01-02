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
  startInscriptions?: Date;
  endInscriptions?: Date;
  active: boolean;
}
