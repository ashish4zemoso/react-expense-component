import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className; //helper variable to add multiple classes
    //remember whitespace is important during appending
    return <div className={classes}>{props.children}</div>;
}

export default Card;