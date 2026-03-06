import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        //creating a state variable in class based component->use- this.state.count
        this.state = {
            count: 0,
            count1: 1

        }
    }
    componentDidMount(){
        console.log("will be called as soon as the component is rendered");
        
    }
    render() {
        const {count} = this.state
        return (
            <div className="user-card">
                <img
                    className="user-img"
                    src="https://i.pravatar.cc/150?img=12"
                    alt="profile"
                />

                <h2>Name: MadhaVi</h2>
                <h3>Location: Hyderabad</h3>
                <h4>Contact: madhavim018@gmail.com</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>vote</button>
                <h5>{count}</h5>
            </div>
        );
    }
}

export default UserClass