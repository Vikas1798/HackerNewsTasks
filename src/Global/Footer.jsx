import React from "react";

const Footer = () => {

const  footerData = [
        {
            name:'About'
        },
        {
            name:'Setting'
        },
        {
            name:'API Documentation'
        },
        {
            name:'Help'
        },
        {
            name:'Hacker News'
        },
        {
            name:'Fork/Contribute'
        },
        {
            name:'Cool Apps'
        }
]
    return (
        <footer className="footer bt_padding d-flex justify-content-center align-items-center">
            {
                footerData?.map((data,i) =>(
                    <div className="mx-1" key={i}>
                        <span > • {data.name} </span>
                    </div>
                ))
            }
            {/* <span> • Setting </span>
            <span> • Help </span>
            <span> • API Documentation </span>
            <span> • Hacker News </span>
            <span> • Fork/Contribute </span>
            <span> • Cool Apps </span> */}
        </footer>
    )

}

export default Footer;