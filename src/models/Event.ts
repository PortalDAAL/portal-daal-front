export interface Event {
  readonly id: number;
  title: string;
  date: Date;
  description: string;
  place: string;
  poster: File | string;
  startInscriptions?: Date;
  endInscriptions?: Date;
  active: boolean;
}