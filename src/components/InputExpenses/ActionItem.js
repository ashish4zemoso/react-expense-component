import './ActionItem.css'

const ActionItem = (props) => {
    switch(props.actionType){
        case 'button':
            return (
                <div class='action-group'>
                    <button type={props.typeAttribute}>
                        {props.itemContent}
                    </button>
                </div>
            );
        default: return  <div> </div>;
    }
}

export default ActionItem;