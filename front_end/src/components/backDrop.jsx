import './backDrop.css';


const BackDrop = ({down,show,harmburger}) => {
   
    return (
        show && <div className="backdrop" onClick={()=>down()}>
            <div className="times" onClick={()=>harmburger()}>&times;</div>
        </div>  
    )
}
export default BackDrop;
