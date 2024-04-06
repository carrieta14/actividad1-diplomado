import {useState} from "react";

export const Card = ({imgUrl, title, email, counter=0}) => {

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={'card'}>
            <div className={'card-header'}>
                <img src={imgUrl}/>
            </div>
            <div className={'card-body'}>
                <h2>Counter: { counter }</h2>
                <h3>{ title }</h3>
                <span>{ email }</span>
                <button onClick={toggleDetails}>Details</button>
                {showDetails && (
                    <div className={`modal ${showDetails ? 'show' : ''}`}>
                        <div className="modal-content">
                            <span className="close" onClick={toggleDetails}>&times;</span>
                            <h2>Detalles</h2>
                            <p>Detalles adicionales aquí...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}