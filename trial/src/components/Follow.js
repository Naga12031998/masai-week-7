import React from 'react'

class Follow extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light mt-3">
                    <p className="navbar-brand">
                        <small className="mr-3">Follow Microsoft</small>
                        <img src="https://image.flaticon.com/icons/svg/124/124010.svg" style={{width:30, height :30}} class="d-inline-block align-top mr-3" alt="icons"/>
                        <img src="https://image.flaticon.com/icons/svg/124/124021.svg" style={{width:30, height :30}} class="d-inline-block align-top mr-3" alt="icons"/>
                        <img src="https://image.flaticon.com/icons/svg/1384/1384060.svg" style={{width:30, height :30}} class="d-inline-block align-top" alt="icons"/>
                    </p>
                </nav>
            </div>
        );
    }
}
export default Follow;