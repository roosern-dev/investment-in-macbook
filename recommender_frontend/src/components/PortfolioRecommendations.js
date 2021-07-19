import { Typography, Container } from "@material-ui/core"
import BookCard from "./BookCard"

const PortfolioRecommendations = (props) => {
    return ( 
        <>
            <Container>
                <Typography variant="h5" align="left">Recommendations</Typography>
                <BookCard></BookCard>
            </Container>
        </>
     );
}
 
export default PortfolioRecommendations;