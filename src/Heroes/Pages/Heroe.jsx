import {useMemo} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../Helper/getHeroById";

function Heroe() {

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }

    const {id} = useParams();

    const hero = useMemo(() => getHeroById(id), [id]);
    const heroImageUrl = `/heroes/${ id }.jpg`;

    if (! hero) {
        return <Navigate to='/'/>
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={heroImageUrl}
                    alt={
                        hero.superhero
                    }
                    className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>{
                    hero.superhero
                }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {
                            hero.alter_ego
                        }</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: {
                            hero.publisher
                        }</b>
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: {
                            hero.first_appearance
                        }</b>
                    </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{
                    hero.characters
                }</p>

                <button className="btn btn-outline-primary"
                    onClick={onBack}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Heroe;
