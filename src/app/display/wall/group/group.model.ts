import { People } from '../people/people.model';

export class Group {
    id: number;
    name: string;
    description: string;
    image: string;
    selected: boolean;
    listOfPersons: People[];
}
