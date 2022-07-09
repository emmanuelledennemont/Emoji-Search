import copyIcon from "../images/icons8-copie-64.png"

const Line = ({name="", symbol="", copy=""}) => {

    return(
        <>
  <div className="line-list">
<div className="row">
    
<p className="icons">{symbol}</p>
            <p>{name}</p> 
            </div> 
            <div className="click">
            <img className='icon-copy' src={copyIcon} alt="icon copy"border="0" margin="0"/> 
            <span className="copy">{copy}</span>
            </div>
            </div>
          
        </>    
    )
}
export default Line;


  