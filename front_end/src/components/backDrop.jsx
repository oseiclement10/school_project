import './backDrop.css';


 const backDrop = ({down,show}) => {
    return (
        show && <div className="backdrop" onClick={()=>down()}></div>  
    )
}
export default backDrop;
