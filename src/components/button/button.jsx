import './button.css'
import classnames from 'classnames'


export default function Button ({onClick, type , children}){

    const btnClass = classnames ({
        'btn' : true ,
        'btn-secondary' : type == 'secondary',
        'btn-primary' : type == 'primary'
    })

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}