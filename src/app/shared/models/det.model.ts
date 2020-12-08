export class Det {
    constructor() {
        this.status = Math.random() < 0.5
    }
    id: number;
    name: string;
    status: boolean;
}