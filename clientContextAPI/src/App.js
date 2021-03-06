import MemoriesProvier from "./contextApi/MemoriesContext";
import {Grid , Container , AppBar , Typography , Grow } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Memories from './Assets/Images/memories.png';
import useStyles from './Styles';
function App() {
  const classes = useStyles();
  return (
    <MemoriesProvier>
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit' >
          <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
          <img className={classes.image} src={Memories} alt='memories' height='60' />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
    </MemoriesProvier>
  );
}

export default App;
