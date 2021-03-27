import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";



class App extends Component {
    users = [
        {name: `alex`, age: 1, status: true, budget: 11},
        {name: `anna`, age: 2, status: false, budget: 22},
        {name: `ander`, age: 3, status: true, budget: 33},
        {name: `ira`, age: 4, status: false, budget: 44},
        {name: `max`, age: 5, status: true, budget: 55},
    ];


    render() {

        return (
            <div>
                {
                    this.users.map((value, index) => {
                        let name = `target`;
                        if (index%2){
                            name = `point`;
                        }
                        return (<UserComponent item={value} key={index}
                        clsName={name}/>)
                    })
                    }



            </div>
        );
    }
}

export default App;
