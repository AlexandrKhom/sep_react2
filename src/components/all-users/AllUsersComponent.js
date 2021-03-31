import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import {UserService} from "../services/UserService";

class AllUsersComponent extends Component {

    state = {users: [], chosenOne: null};
    userService = new UserService();

//onUserChose = (id) => this.setState({chosenOne: this.state.users.find(value => value.id === id)});
onUserChose = (id) => {
    this.userService.getUserById(id).then(value => this.setState({chosenOne:value}))
}
componentDidMount() {
    this.userService.getAllUsers().then(value => this.setState({users: value}))
}

    // componentDidMount() {
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(value => value.json())
    //         .then(value => {
    //             this.setState({users: value});
    //         });
    // }


    render() {
        let {users, chosenOne} = this.state;
        return (
            <div>
                {
                    users.map((value, index) => (
                        <UserComponent item={value} key={value.id}
                        onUserChose={this.onUserChose}
                        />))
                }
                <hr/>

                {chosenOne && <UserComponent item={chosenOne} isShowButton={true}/>}

            </div>
        );
    }
}//(<h3>{chosenOne.id}- {chosenOne.name}-{chosenOne.address.city}</h3>)

export default AllUsersComponent;
