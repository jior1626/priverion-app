import { Answer } from "./answer";

export interface Question {
    id?: number;
    form_id?: number;
    description?: string;
    type?: string;
    answers?: Answer[]
}