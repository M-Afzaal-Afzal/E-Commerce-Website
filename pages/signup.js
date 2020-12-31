import React from 'react';
import Layout from "../src/components/Layout/Layout";
import {Box, Button, Container, Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import Link from '../src/utils/Link'

const useStyles = makeStyles(theme => ({
    cardContainer: {
        maxWidth: '450px',
        padding: '25px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    mainContainer: {
        backgroundColor: '#f5f5f5',
        paddingBottom: '2rem',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
}))

const SignIn = () => {

    const classes = useStyles();


    return (
        <div className={classes.mainContainer}>
            <Layout >
                <Box pt={18} >

                    <Container maxWidth={'lg'}>
                        <Paper elevation={5} className={classes.cardContainer}>
                            <Grid container justify={'center'} direction={'column'}>
                                <Grid item container justify={'center'}>
                                    <Box>
                                        <Typography variant={'h5'} color={'primary'}>Sign up to your account</Typography>
                                    </Box>
                                </Grid>
                                <Grid item container justify={'center'}>
                                    <Box mt={5} style={{width: '90%'}}>
                                        <TextField size={"small"} type={'text'} fullWidth id="outlined-basic" label="Name" variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid item container justify={'center'}>
                                    <Box mt={5} style={{width: '90%'}}>
                                        <TextField size={"small"} type={'email'} fullWidth id="outlined-basic" label="E-Mail" variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid item container justify={'center'}>
                                    <Box mt={5} style={{width: '90%'}}>
                                        <TextField size={"small"} type={'password'} fullWidth id="outlined-basic" label="Password" variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid item container justify={'center'}>
                                    <Box mt={5} style={{width: '90%'}}>
                                        <TextField size={"small"} type={'password'} fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid item container justify={'center'}>
                                    <Box mt={5} mb={2} style={{width: '90%'}}>
                                        <Button fullWidth size={'large'}  color={'primary'} variant={'contained'}>Sign up</Button>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Container>
                </Box>
            </Layout>
        </div>
    );
};

export default SignIn;
