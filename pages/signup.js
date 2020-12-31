import React from 'react';
import Layout from "../src/components/Layout/Layout";
import {Box, Button, Container, Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import Link from '../src/utils/Link';
import {useForm} from "react-hook-form";

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
    const {register, handleSubmit, errors,control} = useForm();

    const reqReg = register({
        required: true,
    })

    const passwordReg = register({
        required: true,
        minLength: 6,
    })

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })


    return (
        <div className={classes.mainContainer}>
            <Layout>
                <Box pt={18}>

                    <Container maxWidth={'lg'}>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <Paper elevation={5} className={classes.cardContainer}>
                                <Grid container justify={'center'} direction={'column'}>
                                    <Grid item container justify={'center'}>
                                        <Box>
                                            <Typography style={{textAlign: 'center'}} variant={'h5'} color={'primary'}>Sign
                                                up to your
                                                account</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField
                                                size={"small"}
                                                type={'text'}
                                                fullWidth id="name"
                                                name={'name'}
                                                error={errors.name}
                                                inputRef={reqReg}
                                                aria-controls={control}
                                                label="Name" variant="outlined"/>
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField size={"small"} type={'email'} fullWidth id="outlined-basic"
                                                       label="E-Mail" variant="outlined"
                                                       name={'email'}
                                                       error={errors.email}
                                                       inputRef={reqReg}
                                                       aria-controls={control}

                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField size={"small"} type={'password'} fullWidth id="password"
                                                       label="Password"
                                                       variant="outlined"
                                                       name={'password'}
                                                       error={errors.password}
                                                       inputRef={passwordReg}
                                                       aria-controls={control}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField size={"small"} type={'password'} fullWidth id="confirmPassword"
                                                       label="Confirm Password" variant="outlined"
                                                       name={'password'}
                                                       error={errors.password}
                                                       inputRef={passwordReg}
                                                       aria-controls={control}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} mb={2} style={{width: '90%'}}>
                                            <Button type={"submit"} fullWidth size={'large'} color={'primary'} variant={'contained'}>Sign
                                                up</Button>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </form>
                    </Container>
                </Box>
            </Layout>
        </div>
    );
};

export default SignIn;
