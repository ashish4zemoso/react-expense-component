import './ActionItem.css'

const ActionItem = (props) => {
    switch(props.actionType){
        case 'button':
            return (
                <div className='action-group'>
                    <button type='button'
                        onClick={props.onCancel}>
                            Cancel
                    </button>
                    <button type={props.typeAttribute}>
                        {props.itemContent}
                    </button>
                </div>
            );
        default: return  <div> </div>;
    }
}

export default ActionItem;