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
    const [filterType, setFilterType] = useState();
    const [bookAttribute, setBookAttribute] = useState();
    const [bookAttributeInput, setBookAttributeInput] = useState();
    const [bookGenre, setBookGenre] = useState();
    const [bookUserInput, setBookUserInput] = useState();
    






    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3004/books", { params: { filterType : filterType, bookAttribute : bookAttribute, bookAttributeInput : bookAttributeInput, bookUserInput : bookUserInput}})
        .then(res=> {
            const books = res.data;
            setBooks(books);
        });
        //alert("type is " + filterType + "\n" + "bookAttribute is " + bookAttribute + "\n" + "input is " + bookAttributeInput + "\n");
    }







    return ( 
        <>
        <Container>
            <Box display="flex" alignItems="flex-start" flexDirection="column">
                <Typography variant="h4">
                    Recommendation System
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
                                        <Select id="recommendationType" value={filterType} onChange={(e)=>(setFilterType(e.target.value))}>
                                                <MenuItem value={"Content"}>Content-based</MenuItem>
                                                <MenuItem value={"Collaborative"}>Collaborative-based</MenuItem>
                                                <MenuItem value={"Hybrid"}>Hybrid-based</MenuItem>
                                        </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {
                        (filterType !== "Collaborative") &&
                        <div>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography align="left">Book Attributes</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={classes.FormControl}>
                                                <InputLabel htmlFor="bookattributes"> Book attributes </InputLabel>
                                                <Select id="bookattributes" value={bookAttribute} onChange={(e)=>(setBookAttribute(e.target.value))}>
                                                        <MenuItem value={"Title"}>Title</MenuItem>
                                                        <MenuItem value={"Description"}>Description</MenuItem>
                                                </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={classes.FormControl}>
                                                <TextField label="Attribute" value={bookAttributeInput} onChange={(e)=>(setBookAttributeInput(e.target.value))}></TextField>
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
                                                <Select id="bookgenres" value={bookGenre} onChange={(e)=>(setBookGenre(e.target.value))}>
                                                        <MenuItem value={"None"}>None</MenuItem>
                                                        <MenuItem value={"Horror"}>Horror</MenuItem>
                                                        <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                                                </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={classes.FormControl}>
                                                <TextField label="Genre"></TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                    }
                    {
                        (filterType!=="Content") &&
                        <div>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography align="left">Book User</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={classes.FormControl}>
                                                <TextField label="User" value={bookUserInput} onChange={(e)=>(setBookUserInput(e.target.value))}></TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                    }
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