import Post from './post/Post';
import useStyles from './Styles';
import {useSelector} from 'react-redux' 
import {Grid , CircularProgress} from '@material-ui/core';
const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const Posts = useSelector((state) =>  state.Posts)
    console.log(Posts)
    return(
        // <div>posts</div>
        !Posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} spacing={3} alignItems='stretch' container>
                {Posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post}  setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;