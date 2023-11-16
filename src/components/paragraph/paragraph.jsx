import styles from './paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({color, children, className}) => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.white]: color === 'white',
            [styles.black]: color === 'black',
            [styles.gray]: color === 'gray',
        })}>
            {children}
        </p>
    )
}


export default Paragraph;