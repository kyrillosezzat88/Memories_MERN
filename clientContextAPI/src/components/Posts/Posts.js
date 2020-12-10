import {useContext, useEffect, useState} from 'react';
import { MemoriesContext } from '../../contextApi/MemoriesContext';
import {Grid , CircularProgress} from '@material-ui/core'
import Post from './Post/Post';
import {FetchPosts} from '../../apis/index';
import useStyles from './Styles'
const Posts = () => {
    const {Memories , dispatch}  = useContext(MemoriesContext);
    const [Posts , setPosts ] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        (async() => {
            try {
                const {data} = await FetchPosts();
                dispatch({type:"FETCH_ALL" , payload:data});
                setPosts(data);
            } catch (error) {
                console.log(error.message)
            }
        })();
    },[Memories.posts.length , Memories.CurrentID , dispatch]) 
    return(
        !Posts.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} spacing={3} alignItems='stretch' container>
                {Posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
} 
export default Posts;