import React,{ useState ,Suspense } from "react";
import axios from 'axios';
import './hackernews.css';
import Loader from '../Global/Loader/loader';
import empty from '../Assets/empty-data.svg';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const News = ({ posts ,isPending }) => {

const handleTime =(data)=>{
    var d = new Date(data);
    return d.getUTCHours();
}
    
return (
        <div className="news">
            {
                isPending ? 
                    <div className="d-flex justify-content-center align-items-center mt-5" style={{ height:'500px'}}>
                        <Loader />
                    </div>
                :
                    <> 
                        {
                            posts.length === 0 ? 
                                <div className="d-flex flex-column justify-content-center align-items-center my-2 mt-5">
                                    <img
                                        src={empty}
                                        alt="img"
                                        style={{ width: "20%" }}
                                    />
                                    <h6 className="mt-3 d-flex flex-column justify-content-center align-items-center empty-data">
                                        Oops, We didn’t found any hacker news.
                                    </h6>
                                </div>
                            :
                            <div className="my-3 px-3">
                                    <div className="d-flex col-lg-12 col-sm-12 col-xl-12 col-xxl-12 p-0">
                                        <div class="form-group col-lg-3 col-sm-3 col-xl-3 col-xxl-3">
                                            <label for="sort" class="col-sm-2 control-label"> Search </label>
                                            <div class="col-sm-10 p-0">
                                                <select class="form-control" name="sort" id="sort">
                                                    <option value="1">All</option>
                                                    <option value="2">Stories</option>
                                                    <option value="3">Comments</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-3 col-sm-3 col-xl-3 col-xxl-3">
                                            <label for="sort" class="col-sm-2 control-label"> By </label>
                                            <div class="col-sm-10">
                                                <select class="form-control" name="sort" id="sort">
                                                    <option value="4">Popularity</option>
                                                    <option value="5">Date</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group col-lg-3 col-sm-3 col-xl-3 col-xxl-3 ">
                                            <label for="sort" class="col-sm-2 control-label"> for </label>
                                            <div class="col-sm-10">
                                                <select class="form-control" name="sort" id="sort">
                                                    <option value="6">All time</option>
                                                    <option value="7">Last 24h</option>
                                                    <option value="8">Past Week</option>
                                                    <option value="9">Past Month</option>
                                                    <option value="10">Past Year</option>
                                                    <option value="11">Custom range</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="text-end"  style={{ color:'gray'}}>{posts.length} results.</h6>
                                {
                                    posts?.map((post, key) => (
                                            <div className="card-long mb-3 p-2" key={key}  style={{background: "#dcdcda",borderRadius: '6px'}}>
                                                <a href={post.url} target="_blank">{post.title} <span style={{ color:'gray'}}>&nbsp;({post.url})</span></a>
                                                <div className="sub">
                                                    {post.points} points | by  {post.author} | {handleTime(post.created_at)} hours ago | {post.num_comments} comments</div>
                                            </div>
                                        )   
                                    )
                                }
                            </div>
                        }
                    </>
            }
        </div>
    )
};

function HackerNews() {

    const [posts, setPosts] = React.useState([]);
    const [isPending , setIsPending] = React.useState(true);
    const [error , setError] = useState(null);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        async function getTopStores() {
        try {
            let url = 'https://hn.algolia.com/api/v1/search?tags=front_page';
            await axios.get(url)
                .then((response) => {
                    const ex = response.data;
                    setPosts(ex.hits);
                    setIsPending(false)
                });
            } catch (err) {
                setIsPending(false)
                setError(err.message)
                console.error(err);
            }
        }
        getTopStores();
    }, []);

    const handlePagination = async () =>{
        try {
            let url = `https://hn.algolia.com/api/v1/search_by_date?page=${page}`;
            await axios.get(url)
                .then((response) => {
                    const ex = response.data;
                    setPosts(ex.hits);
                    setIsPending(false);
                    setPage(page+1)
                });
            } catch (err) {
                setIsPending(false)
                setError(err.message)
                console.error(err);
            }
        }
    

    return (
            <Suspense fallback={<div> Loading.. </div>}>
                <News posts={posts} isPending={isPending} error = {error} />
                    <div className="d-flex justify-content-center align-items-center">
                        <Stack spacing={2}>
                            <Pagination count={10}   page={page} onChange={()=>handlePagination()}/>
                        </Stack>
                    </div>
            </Suspense>
    )
}

export default HackerNews;