export interface InfoUser {
    user: User;
    carrera: Carrera;
}

export interface Carrera {
    id: number;
    nombre: string;
}

export interface User {
    id: number;
    id_carrera: number;
    username: string;
    role: null;
    clases_aprovadas: null;
    password: string;
    created_at: null;
}
