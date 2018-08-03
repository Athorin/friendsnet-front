import { People } from '../people/people.model';
import { Posts } from '../posts/posts.model';

export class Event {
    id: number;
    name: string;
    description: string;
    startingDate: Date;
    endingDate: Date;
    image: string;
    selected: boolean;
    listOfPersons: People[];
    listOfPosts: Posts[];
}
