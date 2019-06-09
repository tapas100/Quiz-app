/* Quiz Structure*/
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;             // Name Of Quiz
    description: string;      // Quiz Description
    questions: Question[];    // Questions For Quiz

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
