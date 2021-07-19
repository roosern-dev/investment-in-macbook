import { Card, CardActionArea, CardMedia, makeStyles, Typography, Box } from "@material-ui/core"

const BookCard = (props) => {
    const useStyle = makeStyles(theme => ({
        cardMedia:{
            width:140,
            height:140
        },
        bookDisplay:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        },
        cardMainLayout:{
            display:"flex",
            flexDirection:"row",
        },
        cardDescriptionLayout:{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
        }
    }))

    const classes = useStyle();
    return (  
        <>
            <Card>
                <Box className={classes.cardMainLayout} m={2}>
                    <div className={classes.bookDisplay}>
                        <CardMedia className={classes.cardMedia} component="img" height="140" width="140" image="https://source.unsplash.com/random"/>
                        <Box m={2}><Typography>Book title</Typography></Box>
                    </div>
                    <Box className={classes.cardDescriptionLayout} ml={7}>
                        <Typography variant="subtitle1">Book Description:</Typography>
                        <Typography variant="subtitle1">Author:</Typography>
                        <Typography variant="subtitle1">Published Date:</Typography>
                    </Box>
                </Box>
            </Card>
        </>
    );
}
 
export default BookCard;