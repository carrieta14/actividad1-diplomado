export const Counter = ({value, add, reduce, restar}) => {

    return (
        <div className={ 'card' }>
            <div className={ 'card-body' }>
                <h1>Counter</h1>
                <h2>Times: { value }</h2>
                <button onClick={ add }>Add</button>
                <button onClick={ reduce }>Reduce</button>
                <button onClick={ restar }>Restart</button>
            </div>
        </div>
    )
}