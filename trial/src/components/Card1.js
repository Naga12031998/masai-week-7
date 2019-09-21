import React from 'react'

class Card1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ["This is your 365","Surface Book 2", "Xbox Game Pass Ultimate","Xbox One S"],
            body:["Discover what’s possible every day with Office 365.","Powerhouse performance in the ultimate laptop.","Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game.","The ultimate games and 4K entertainment system."],
            button : ["SHOP NOW >", "LEARN MORE >"]
        }
    }
    render(){
        return (
            <div className="container">
                <div className="card-deck mt-3">
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="card_img_1"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[0]}</h5>
                            <p className="card-text">{this.state.body[0]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[0]}</button>
                        </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="card_img_2"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[1]}</h5>
                            <p className="card-text">{this.state.body[1]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[0]}</button>
                        </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1535462169218-aadfe41bda09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=726&q=80" class="card-img-top" alt="card_img_3"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[2]}</h5>
                            <p className="card-text">{this.state.body[2]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[0]}</button>
                        </div>
                    </div>
                    <div className="card border border-white">
                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" class="card-img-top" alt="card_img_4"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name[3]}</h5>
                            <p className="card-text">{this.state.body[3]}</p>
                            <button type="button" className="btn text-primary font-weight-bold">{this.state.button[1]}</button>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
export default Card1;