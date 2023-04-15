export interface ITest {
    discipline: string;
    didacticUnit: string;
    theme: string;
    mame: string;
    tasks: ITask;
}

export interface ITask {
    id: number;
    type: string;
    title: string;
    integral?: string;
    variant1?: string;
    variant2?: string;
    variant3?: string;
    variant4?: string;
}
