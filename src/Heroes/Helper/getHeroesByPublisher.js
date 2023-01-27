import {heroes} from "../Data/Heroes";

const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['Marvel Comics', 'DC Comics'];

    if (validPublisher.includes(publisher)) {
        return heroes.filter(heroe => heroe.publisher === publisher);

    } else {
        throw new Error(`${publisher} no existe.`);
    }

}
export default getHeroesByPublisher;
