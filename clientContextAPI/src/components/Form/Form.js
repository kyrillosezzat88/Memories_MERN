import {useState , useContext , useEffect} from 'react'
import {Paper,TextField , Button , Typography} from '@material-ui/core';
import useStyles from './Styles';
import FileBase from 'react-file-base64';
import {CreatePost , updatePost} from '../../apis/index'
import { MemoriesContext } from '../../contextApi/MemoriesContext';
const From = () => {
    const classes = useStyles();
    const {Memories , dispatch} = useContext(MemoriesContext);
    const [postData , setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    const HandelSubmit = async (e) => {
        e.preventDefault();
        if(Memories.CurrentID){
            await updatePost(Memories.CurrentID , postData);
            dispatch({type:"CLEAR_CURRENT_ID"});
        }else{
            const {data} = await CreatePost(postData);
            dispatch({type:"CREATE_POST" , payload:data});
        }
        clear();
    }
    const clear = () => {
        setPostData({
            creator:'',
            title:'',
            message:'',
            tags:'',
            selectedFile:''
        })
    }
    useEffect(() => {
        if(Memories.CurrentID) return setPostData(Memories.posts.find(post => post._id === Memories.CurrentID));
    } ,[Memories.CurrentID , Memories.posts])
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={HandelSubmit}>
                <Typography variant='h6'>{Memories.CurrentID ? "Editing" : "Creating"} a Memory</Typography>
                <TextField  name='Creator'  variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({...postData , creator:e.target.value})}/>
                <TextField  name='Title'  variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({...postData , title:e.target.value})}/>
                <TextField  name='Message'  variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({...postData , message:e.target.value})}/>
                <TextField  name='Tags'  variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({...postData , tags:e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData , selectedFile:base64})}
                    />
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    )
}
export default From ;