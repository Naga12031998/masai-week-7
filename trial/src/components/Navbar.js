import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src="http://logok.org/wp-content/uploads/2014/06/Microsoft-logo-m-box-880x660.png" style={{width:60, height:50}} alt="logo"/>
                    <a className="navbar-brand" href="#">Microsoft</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><small>Office</small> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><small>Windows</small><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><small>Surface</small><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><small>Xbox</small><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><small>Support</small><span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All Microsoft
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                            <img src="https://image.flaticon.com/icons/svg/109/109859.svg" alt="search" style={{width:30,height:20, marginRight:5}}/>
                            <img src="https://image.flaticon.com/icons/svg/126/126510.svg" alt="search" style={{width:30,height:20, marginRight:5}}/>
                            <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" alt="search" style={{width:30,height:20}}/>            
                        </form>   
                    </div>
                </nav> 
            </div>
        );
    }
}
export default Navbar;