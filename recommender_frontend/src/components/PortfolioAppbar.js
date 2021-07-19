import {AppBar, Divider, makeStyles, Toolbar, Typography, container, Box} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    toolbar:{
        flexGrow:1,
        alignContent:'flex-start',
        backgroundColor:"ffb703"
    },
    header:{
        paddingLeft:30,
        paddingRight:30,
        
    },
    contain:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        flexGrow:1


    }
}));



const PortfolioAppbar = () => {
    const classes = useStyle();
    return (  
        <>
        <AppBar position="static">
            <Toolbar display="flex" className={classes.toolbar}>
                <Typography className={classes.header} variant="h4">A Machine Learning Portfolio</Typography>
                <Typography variant="h7">by Wei Theng</Typography>

                <Box display="flex" flexDirection="row" justifyContent="flex-end" flexGrow={1}>
                    <Box m={3}><Typography>Recommender systems</Typography></Box>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Box m={3}><Typography flexGrow={1}>Classification</Typography></Box>
                </Box>
            </Toolbar>
        </AppBar>
        </>
    );
}
 
export default PortfolioAppbar;