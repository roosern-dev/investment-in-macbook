import axios from 'axios';
import { Typography, Container, Box, FormControl, FormLabel, Select, Grid, makeStyles, InputLabel, MenuItem, TextField, Button } from "@material-ui/core";
import {useState} from 'react';
import PortfolioRecommendations from './PortfolioRecommendations'


const useStyle = makeStyles(theme => ({
    contain: {
        flexGrow:1
        
    },
    FormControl:{
        minWidth:200,
        margin: theme.spacing(1)
    }
}))


const PortfolioContentRecPage = () => {
    const classes = useStyle();
    const [Books, setBooks] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]
        );

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3004/books")
        .then(res=> {
            const books = res.data;
            setBooks(books);
        })
    }

    return ( 
        <>
        <Container>
            <Box display="flex" alignItems="flex-start" flexDirection="column">
                <Typography variant="h4">
                    Content-based Recommendation System
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column">
                    <Grid container alignItems="center">
                        <Grid item xs={2}>
                            <Typography align="left">Filtering approach </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl className={classes.FormControl}>
                                        <InputLabel htmlFor="recommendationtype"> Type </InputLabel>
                                        <Select id="recommendationType">
                                                <MenuItem value={"Content"}>Content-based</MenuItem>
                                                <MenuItem value={"Collaborative"}>Collaborative-based</MenuItem>
                                                <MenuItem value={"Hybrid"}>Hybrid-based</MenuItem>
                                        </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography align="left">Book Attributes</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl className={classes.FormControl}>
                                        <InputLabel htmlFor="bookattributes"> Book attributes </InputLabel>
                                        <Select id="bookattributes">
                                                <MenuItem value={"Title"}>Title</MenuItem>
                                                <MenuItem value={"Description"}>Description</MenuItem>
                                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl className={classes.FormControl}>
                                        <TextField label="Input"></TextField>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography align="left">Book Genre</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl className={classes.FormControl}>
                                        <InputLabel htmlFor="bookgenres"> Book genre </InputLabel>
                                        <Select id="bookgenres">
                                                <MenuItem value={"None"}>None</MenuItem>
                                                <MenuItem value={"Horror"}>Horror</MenuItem>
                                                <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl className={classes.FormControl}>
                                        <TextField label="Input"></TextField>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={8}>
                            <Button variant="outlined" type="submit">Search</Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <br></br>
            <br></br>
            <PortfolioRecommendations Books={Books}></PortfolioRecommendations>
            
            
        </Container>
        </>
     );
}
 
export default PortfolioContentRecPage;