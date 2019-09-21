import React from 'react'

class Footer extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <div className="mt-3 bg-light mb-3">
                    <div className="row mb-3">
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">What's new</div>
                            <div>
                                <small className="text-muted">
                                    Surface Go<br/><br/>
                                    Surface Pro<br/><br/>
                                    Windows 10 apps<br/><br/>
                                    Office apps
                                </small>
                            </div>
                        </div>
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">Microsoft Store</div>
                            <div >
                                <small className="text-muted">
                                    Account profile<br/><br/> 
                                    Download Center<br/><br/> 
                                    Microsoft Store Support<br/><br/> 
                                    Returns<br/><br/> 
                                    Order tracking
                                </small>
                            </div>
                        </div>
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">Education</div>
                            <div>
                                <small className="text-muted">
                                    Microsoft in education<br/><br/> 
                                    Office for students<br/><br/> 
                                    Office 365 for schools<br/><br/> 
                                    Microsoft Azure in education
                                </small>
                            </div>
                        </div>
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">Enterprise</div>
                            <div>
                                <small className="text-muted">
                                    Azure<br/><br/>
                                    AppSource<br/><br/>
                                    Automotive<br/><br/>
                                    Government<br/><br/>
                                    Healthcare<br/><br/>
                                    Manufacturing<br/><br/>
                                    Financial services<br/><br/>
                                    Retail
                                </small>
                            </div>
                        </div>
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">Developer</div>
                            <div>
                                <small className="text-muted">
                                    Microsoft Visual Studio<br/><br/>
                                    Developer Network<br/><br/>
                                    TechNet<br/><br/>
                                    Channel 9<br/><br/>
                                    Office Dev Center
                                </small>
                            </div>
                        </div>
                        <div className="col font-weight-bold">
                            <div className="mb-3 mt-3">Company</div>
                            <div>
                                <small className="text-muted">
                                    Careers<br/><br/>
                                    About Microsoft<br/><br/>
                                    Company news<br/><br/>
                                    Privacy at Microsoft<br/><br/>
                                    Investors<br/><br/>
                                    Security
                                </small>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img src="https://image.flaticon.com/icons/svg/44/44386.svg" style={{width:30, height:30}} alt="logo"/>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><small>English(India)</small> <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                            <form className="form-inline">
                                <p><small className="text-muted mr-3">Contact Microsoft</small></p>
                                <p><small className="text-muted mr-3"> Privacy & cookies</small></p>
                                <p><small className="text-muted mr-3">Terms of use</small></p>
                                <p><small className="text-muted mr-3">Trademarks</small></p>
                                <p><small className="text-muted mr-3">About our ads</small></p>
                                <p><small className="text-muted"> © Microsoft 2019</small></p>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Footer;