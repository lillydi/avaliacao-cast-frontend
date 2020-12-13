import { Categoria } from './categoria';

export class Curso {
    id!: string;
    descricao!: string;
    dataInicio!: Date;
    dataTermino!: Date;
    quantidadeAlunos!: number;
    idCategoria!: string;
}