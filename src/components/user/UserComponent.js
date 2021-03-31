import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {item, onUserChose, isShowButton} = this.props;
        return (
            <div>
                {item.id}-{item.name}  
                {!isShowButton &&
                <button onClick={()=>{onUserChose(item.id)}}>click</button>
            }

            </div>
        );
    }
}

export default UserComponent;
