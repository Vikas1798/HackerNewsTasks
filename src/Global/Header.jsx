import React, { useState } from "react";
import hacker from '../Assets/hacker-icon.png';
import setting from '../Assets/setting.png';
import axios from 'axios';


const Header = () => {
    const [search, setSearch] = useState('')

const getSearchednews = async (e) => {
        if (e.key === "Enter") {
            try {
                let url = `http://hn.algolia.com/api/v1/search_by_date?query=${search}`;
                await axios.get(url)
                    .then((response) => {
                        const ex = response.data;
                        console.log('data',ex.hits)
                    });
                } catch (err) {
                    console.error(err.message);
                }
        }
    };


    return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg_orange col-lg-12 col-sm-12 col-xl-12 col-xxl-12">
                    <div className="col-lg-2 col-sm-2 col-xl-2 col-xxl-2 d-flex align-items-center">
                        <img src={hacker} alt="" style={{width:'60px'}}/>
                        <a href="#" className="navbar-brand mx-3"> Search <br /> Hacker news</a>
                    </div>
                    
                    <div className="navbar-expand col-lg-9 col-sm-9 col-xl-9 col-xxl-9" >
                        <ul className="navbar-nav mr-auto">
                        <form class="form my-2 my-lg-0 w-100">
                            <input 
                                class="form-control mr-sm-2 input-box" 
                                type="search" 
                                placeholder="Search stories by title, url or author" 
                                aria-label="Search"

                                value={search}
                                onChange={(event) => { setSearch(event.target.value)}}
                                onKeyDown={getSearchednews}
                            />
                            <img src={search} alt=''  className="search-icon"/>
                        </form>
                        </ul>
                    </div>
                    <div className="col-lg-1 col-sm-1 col-xl-1 col-xxl-1 d-flex justify-content-center align-items-center">
                        <div>
                            <img src={setting} alt="" style={{width:'30px'}}/>
                        </div>
                        <div className="ml-3">
                            Settings
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export default Header;