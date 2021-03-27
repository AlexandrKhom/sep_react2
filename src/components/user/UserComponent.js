import React, {Component} from 'react';
import './User.css';

class UserComponent extends Component {
    render() {
        let {item, clsName} = this.props;
        return (
            <div className={clsName}>
                {item.name}-{item.age}-{item.status.toString()}-{item.budget}
            </div>
        );
    }
}

export default UserComponent;
