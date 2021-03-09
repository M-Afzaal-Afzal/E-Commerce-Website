import React, {useEffect, useState} from 'react';
import {
    Box,
    Button, CircularProgress,
    Container,
    FormControl,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography, useMediaQuery,
    useTheme
} from "@material-ui/core";
import Link from '../src/utils/Link'
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../src/store/actions/index.actions';
import {selectIsLoading} from "../src/store/selectors/userSelectors";

const useStyles = makeStyles(() => ({
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

    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.user.currentUser);

    const {register, handleSubmit, errors, control, reset} = useForm();

    const isLoading =useSelector(selectIsLoading) ;

    const onSubmit = handleSubmit( data => {
         dispatch(actions.emailSignInStart(data.email, data.password));

        // try {
        //     setIsLoading(true);
        //     await auth.signInWithEmailAndPassword(data.email, data.password);
        //     setIsLoading(false);
        //     reset();
        //     router.replace('/');
        // } catch (err) {
        //     setIsLoading(false);
        //     console.log(err.message)
        // }

        // console.log(data);
        // console.log(data.email);
        // console.log(data.password);

    })

    const signInWithGoogle = () => {
        dispatch(actions.googleSignInStart());
    }

    const emailReg = register({
        required: "You must specify an email",
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid Email'
        }
    })

    const passwordReg = register({
        required: "You must specify a password",
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        }
    })


    useEffect(() => {
        if (user) {
            router.replace('/');
        }
    }, [user])

    const classes = useStyles();
    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <div className={classes.mainContainer}>
            <React.Fragment>
                <Grid container justify={'center'}>


                    <Box pt={matchesXs ? 13 : 18} pb={15}>
                        <Container maxWidth={'lg'}>

                            <Paper component={FormControl} elevation={5} className={classes.cardContainer}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container justify={'center'} direction={'column'}>
                                        <Grid item container justify={'center'}>
                                            <Box>
                                                <Typography style={{textAlign: 'center'}} variant={'h5'}
                                                            color={'primary'}>Log
                                                    in to your
                                                    account</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            <Box mt={5} style={{width: '90%'}}>
                                                <TextField inputRef={emailReg}
                                                           aria-controls={control}
                                                           name={'email'}
                                                           error={Boolean(errors.email)}
                                                           helperText={errors.email && errors.email.message}
                                                           size={"small"} type={'email'} fullWidth id="email"
                                                           label="E-Mail" variant="outlined"/>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            <Box mt={5} style={{width: '90%'}}>
                                                <TextField size={"small"}
                                                           aria-controls={control}
                                                           name={'password'}
                                                           error={Boolean(errors.password)}
                                                           helperText={errors.password && errors.password.message}
                                                           inputRef={passwordReg}
                                                           type={'password'} fullWidth id="password" label="Password"
                                                           variant="outlined"/>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            {
                                                isLoading ?
                                                    (<Box mt={2}>
                                                        <CircularProgress color={'primary'}/>
                                                    </Box>)
                                                    :
                                                    (' ')
                                            }
                                            <Box mt={isLoading ? 2 : 5} mb={-2} style={{width: '90%'}}>
                                                <Button
                                                    name={'sign in'}
                                                    type={'submit'}
                                                    fullWidth
                                                    size={'large'}
                                                    color={'primary'} variant={'contained'}
                                                    disabled={isLoading}
                                                >
                                                    Sign In
                                                </Button>
                                            </Box>
                                        </Grid>

                                        <Grid item container justify={'center'}>
                                            <Box mt={5}>
                                                <Button
                                                    type={'button'}
                                                    name={'sign in with google'}
                                                    onClick={signInWithGoogle} color={'primary'}>Sign In with
                                                    Google</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            <Box mt={1} mb={2}>
                                                <Button
                                                    name={'Don\'t have account, go to signup'}
                                                    style={{textAlign: 'center'}} className={classes.link}
                                                    component={Link} href={'/signup'}
                                                    color={'secondary'}>Don't have account, go to signup</Button>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </form>
                            </Paper>

                        </Container>
                    </Box>
                </Grid>
            </React.Fragment>
        </div>
    );
};

export default React.memo(SignIn);
