/* Option Structure*/
export class Option {
    id: number;
    questionId: number;  // Question Id to specify question 
    name: string;        // Name of option
    isAnswer: boolean;   // This option is true or false
    selected: boolean;   // This option is seleced or not (true/false) 

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
}
