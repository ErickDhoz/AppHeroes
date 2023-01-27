import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import HeroCard from "../component/HeroCard";
import queryString from "query-string"
import {getHerosByName} from "../Helper/getHerosByName";
function Search() {

    const navigate = useNavigate();
    const location = useLocation();
    const {
        q = ''
    } = queryString.parse(location.search);
    const heroes = getHerosByName(q);

    const {SearchText, onInputChange} = useForm({SearchText: ''});

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (SearchText.trim().length <= 1) 
            return;
        
        navigate(`?q=${SearchText}`)

    }

    return (
        <>
            <h1>Search</h1>
            <hr/>


            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input type='text' placeholder="Search a hero" className="form-control" name="SearchText" autoComplete="off"
                            value={SearchText}
                            onChange={onInputChange}/>
                        <button className="btn btn-outline-primary mt-1">Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/> {
                    (q === '') ? <div className="alert alert-primary animate__animated animate__fadeInRight">Search a hero</div> : (heroes.length === 0) &&< div className = "alert alert-danger animate__animated animate__fadeInRights" > No Hero with < b > {
                        q
                    } </b></div >
                }


                    {
                    heroes.map(hero => (
                        <HeroCard key={
                                hero.id
                            }
                            {...hero}
                            className="animate__animated animate__fadeInLeft"/>
                    ))
                } </div>
            </div>
        </>
    );
}

export default Search;
