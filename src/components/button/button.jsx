import styles from './button.module.css';
import cn from 'classnames';
import Paragraph from "../paragraph/paragraph.jsx";

const Button = ({type, className}) => {
    return (
        <button type={type} className={cn(styles.button, className)}>
            <Paragraph color='white' children='войти'/>
        </button>
    )
}

export default Button;