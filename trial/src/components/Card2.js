import React from 'react'

class Card2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ["Windows 10 Enterprise", "Office 365 for Business", "Explore Kubernetes", "Get Visual Studio 2019"],
            body : ["Download the free 90-day evaluation for IT professionals.", "Access your files from anywhere, online or offline.", "Learn how Kubernetes works and get started with cloud native app development today.", "Download Visual Studio 2019, the productive, modern and innovative IDE."],
            button : ["DOWNLOAD NOW  >", "SHOP NOW >", "GET STARTED >"]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="card-deck">
                    <nav class="navbar navbar-light container-fluid mt-3">
                        <p class="navbar-brand font-weight-bold">For work</p>
                    </nav>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" class="card-img-top" alt="card_img_1"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.name[0]}</h5>
                                <p className="card-text">{this.state.body[0]}</p>
                                <button type="button" className="btn text-primary font-weight-bold">{this.state.button[0]}</button>
                            </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1531496681078-27dc2277e898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" class="card-img-top" alt="card_img_2"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[1]}</h5>
                            <p className="card-text">{this.state.body[1]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[1]}</button>
                        </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1553792012-5c75e251255e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="card_img_3"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[2]}</h5>
                            <p className="card-text">{this.state.body[2]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[2]}</button>
                        </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="card_img_4"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[3]}</h5>
                            <p className="card-text">{this.state.body[3]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[0]}</button>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Card2;