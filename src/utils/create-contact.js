import { LoremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from 'uuid';

const lorem = new LoremIpsum();

export default function createContact() {
    return {
        id: uuidv4(),
        number: uuidv4(),
        name: lorem.generateWords(2)
    };
}