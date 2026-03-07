import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        //creating a state variable in class based component->use- this.state.count
        this.state = {
            userInfo:{
                name:"",
                location:"",

            }
        }
    }
    async componentDidMount() {
        console.log("will be called as soon as the component is rendered");
        const data = await fetch(process.env.GIT_URL)
        const json = await data.json()
        console.log("JSON",json);
        this.setState({
            userInfo:json
        })


    }

    componentDidUpdate(){
        console.log("component Updated");
        
    }

    componentWillUnmount(){
        console.log("componentUmount userclass");

    }
    render() {
        const {name,location,avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                <img
                    className="user-img"
                    src={avatar_url}
                    alt="profile"
                />

                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                {/* <h4>Contact: </h4> */}
            </div>
        );
    }
}

export default UserClass