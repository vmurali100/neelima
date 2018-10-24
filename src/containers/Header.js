import React, {Component} from 'react'
import AppHeader from '.././components/header/index';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="">
                <AppHeader />
            </div>
        );
    }
}



export default Header