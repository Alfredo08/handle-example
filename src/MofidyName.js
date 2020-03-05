import React from 'react';

class ModifyName extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        
        let newFirstName = e.target.newFirstName.value;
        let newLastName = e.target.newLastName.value;
        
        this.props.handleChangeName( newFirstName, newLastName );
        
        console.log( newFirstName, newLastName );
    }

    render(){
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="newFirstName"> New first name : </label>
                <input name="newFirstName" id="newFirstName" type="text" />
                <label htmlFor="newLastName"> New last name : </label>
                <input name="newLastName" id="newLastName" type="text" />
                <button type="submit">
                    Change Name
                </button>
            </form>
        )
    }

}

export default ModifyName;