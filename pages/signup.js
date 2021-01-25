import React, {useEffect, useState} from 'react';
import Layout from "../src/components/Layout/Layout";
import {
    Box,
    Button,
    Container,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {auth, createUserProfileDocument} from '../src/firebaseUtils/firebaseUtils';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

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

    const user = useSelector(state => state.user.currentUser);
    const router = useRouter();

    const classes = useStyles();
    const {register, handleSubmit, errors, control, watch, reset} = useForm();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    },[user])

    const nameReg = register({
        required: "Please Enter Your Real Name",
    })

    const password = watch("password");

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

    const repeatPasswordReg = register({
        validate: value =>
            value === password || "The passwords do not match"
    })

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        const {name, email, password} = data;
        // console.log(name, email, password, repeatPassword);

        try {
            setIsLoading(true);
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName: name})
            setIsLoading(false);
            reset();
            router.push('/');
        } catch (err) {
            setIsLoading(false)
            console.log(err.message)
        }
    })

    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.mainContainer}>
            <Layout>
                <Box pt={matchesXs ? 13 : 18} pb={15}>

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
                                                fullWidth
                                                id="name"
                                                helperText={errors.name ? errors.name.message : ''}
                                                name={'name'}
                                                error={Boolean(errors.name)}
                                                inputRef={nameReg}
                                                aria-controls={control}
                                                label="Name" variant="outlined"/>
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField size={"small"} type={'email'} fullWidth id="email"
                                                       label="E-Mail" variant="outlined"
                                                       name={'email'}
                                                       helperText={errors.email ? errors.email.message : ''}
                                                       error={Boolean(errors.email)}
                                                       inputRef={emailReg}
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
                                                       helperText={errors.password ? errors.password.message : ''}
                                                       error={Boolean(errors.password)}
                                                       inputRef={passwordReg}
                                                       aria-controls={control}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item container justify={'center'}>
                                        <Box mt={5} style={{width: '90%'}}>
                                            <TextField size={"small"} type={'password'} fullWidth id="confirmPassword"
                                                       label="Confirm Password" variant="outlined"
                                                       name={'repeatPassword'}
                                                       error={Boolean(errors.repeatPassword)}
                                                       helperText={errors.repeatPassword ? errors.repeatPassword.message : ''}
                                                       inputRef={repeatPasswordReg}
                                                       aria-controls={control}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item container direction={'column'} alignItems={'center'} justify={'center'}>
                                        {
                                            isLoading ?
                                                (<Box mt={3} mb={-2} mx={'auto'}>
                                                    <CircularProgress color={'primary'}/>
                                                </Box>)
                                                :
                                                ('')
                                        }

                                        <Box mt={5} mb={2} style={{width: '90%'}}>
                                            <Button name={'sign_up'} type={"submit"} fullWidth size={'large'}
                                                    color={'primary'} variant={'contained'}>Sign
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

export default React.memo(SignIn);
