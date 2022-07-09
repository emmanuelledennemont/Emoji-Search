import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import unicorn from "../images/icons8-unicorn-64.png"
const Search = ({title, title2, search, setSearch}) => {

    return(
        <>
        <div className="title-grp">
        <img className='left' src={unicorn} alt="icon unicorn"border="0" margin="0"/>
<h1>{title}</h1><span>{title2}</span>      
<img className='right' src={unicorn} alt="icon unicorn"border="0" margin="0"/>
</div>
<input type="search" name="search" id="search" placeholder='What emoji are you looking for?' value={search} onChange={(event) => setSearch(event.target.value)} />
        </>    
    )
}
export default Search;