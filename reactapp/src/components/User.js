import React, { Component } from 'react'
import propTypes from 'prop-types'

class User extends Component {

    state = {
        isVisible: false
    }
    static defaultProps = {
        name : " Bilgi yok",
        salary : " Bilgi yok",
        department : " Bilgi yok"
    }
    
    constructor(props){
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent = (e) => {
        this.setState({
        isVisible : !this.state.isVisible
        })
    }

    onDeleteUser = (e)=>{
        const{id, deleteUser} = this.props;
        deleteUser(id);
    }
    render() {

        //Destructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick = {this.onClickEvent.bind(this,34)}>{name}</h4>
                        <i onClick = {this.onDeleteUser} className = "far fa-trash-alt" style = {{cursor : "pointer"}}/>
                    </div>
                    {
                        isVisible ? 
                        <div className="card-body">
                        <p className="card-text">Maaş : {salary}</p>
                        <p className="card-text">Department : {department}</p>
                    </div> 
                    : null
                    }
                </div>
            </div>
        )
    }
}
User.propTypes = {
    name : propTypes.string.isRequired,
    salary : propTypes.string.isRequired,
    department : propTypes.string.isRequired,
    deleteUser: propTypes.func.isRequired
}

export default User;
