import { Typography, Container } from "@material-ui/core"
import BookCard from "./BookCard"
import { useState } from "react";

const PortfolioRecommendations = (props) => {

    const Books = props.Books;

    return ( 
        <>
            <Container>
                <Typography variant="h5" align="left">Recommendations</Typography>
                {Books.map((book) => (<BookCard Book = {book}></BookCard>))}
            </Container>
        </>
     );
}
 
export default PortfolioRecommendations;