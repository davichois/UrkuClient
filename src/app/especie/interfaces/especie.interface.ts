export interface RespEspecie {
  message: string;
  error: string;
  body: any[];
}

export interface especie {
  aniId?: number;
  aniNombre: string;
  aniFechaIngreso: Date;
  aniObservaciones: string;
  aniLugarRescate: string;
  aniGenero: number;
  aniRescatista: number;
  aniClasificacion: number;
}

export interface clasificacion {
  clasId: number;
  clasTipo: string;
  animals: especie[];
}

export interface genero {
  genId: number;
  genTipo: string;
  animals: especie[];
}

export interface rescatista {
  resId: number;
  resNombre: string;
  animals: especie[];
}
