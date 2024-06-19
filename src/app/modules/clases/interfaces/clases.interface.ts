export interface Clase {
    id: number;
    nombre: string;
    unidades_valorativas: number;
    padre?: number;
    hijo?: number;
    estado_clase?: 'aprobado' | 'reprobado' | 'pendiente';
    carrera?: string;
}

