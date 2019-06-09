
/* Question Structure*/
import { Option } from './option';

export class Question {
    id: number;
    name: string;           // Name question
    questionTypeId: number; //question Id type for check question stataus
    options: Option[];      // available option 
    answered: boolean;      // answered correct or wrong

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
