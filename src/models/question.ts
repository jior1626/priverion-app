import { Answer } from "./answer";

export interface Question {
    id?: number;
    description?: string;
    type?: string;
    answers?: Answer[]
}