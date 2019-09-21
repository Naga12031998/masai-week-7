import React from 'react'
// import { url } from 'inspector'
// import { URL } from 'url'

class Background extends React.Component{
    render() {
        return (
            <div className="mt-3 d-block w-150 container text-white">
                <div className="card bg-dark text-white">
                    <img src="https://images.unsplash.com/photo-1476553986076-d59060d397e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=789&q=80" class="card-img" alt="back" style={{height:400}}/>
                    <div className="card-img-overlay">
                        <h3 className="card-title">Microsoft Store</h3>
                        <p className="card-text">Find the technology you need for home, school, work and fun.</p>
                        <button className="rounded-0 text-black bg-light border border-success font-weight-bold">SHOP NOW ></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Background;