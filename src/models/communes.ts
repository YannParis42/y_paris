export interface Communes {
  nom: string;
  code: string;
  codeDepartement: string;
  codeRegion: string;
  codePostaux: Array <{codeP: string }> ;
  population: number;
}
