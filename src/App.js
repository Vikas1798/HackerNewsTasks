import React from "react";
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import Router from "./Navigation/Router";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {

return(
        <React.Fragment>
            <Header />
                <main>
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10">
                                <Router />
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;