import React, {useState} from 'react';
import Layout from "../src/components/Layout/Layout";
import {
    Box,
    Button,
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
import {signInWithGoogle} from "../src/firebaseUtils/firebaseUtils";
import {useForm} from 'react-hook-form';

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

    const {register, handleSubmit, errors, control} = useForm();

    const onSubmit = handleSubmit(data => {

        console.log(data);
        console.log(data.email);
        console.log(data.password);

        // console.log(errors)
        // return (alert(JSON.stringify(data)));
    })


    const emailReg = register({
        required: true,
        pattern: /^\S+@\S+$/i,
    })

    const passwordReg = register({
        required: true,
        minLength: 6,
    })

    const classes = useStyles();

    // const [email,setEmail] = useState('');
    // const [password,setPassword]=useState('');

    // const emailHandler = (e) => {
    //     setEmail(e.target.value);
    // }
    //
    // const passwordHandler = (e) => {
    //     setPassword(e.target.value);
    // }
    // console.log(errors);

    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <div className={classes.mainContainer}>
            <Layout>
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
                                                           helperText={errors.email && 'Invalid Email'}
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
                                                           helperText={errors.password && 'Password must be of six characters'}
                                                           inputRef={passwordReg}
                                                           type={'password'} fullWidth id="password" label="Password"
                                                           variant="outlined"/>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            <Box mt={5} mb={-2} style={{width: '90%'}}>
                                                <Button type={'submit'} fullWidth size={'large'}
                                                        color={'primary'} variant={'contained'}>Sign
                                                    In</Button>
                                            </Box>
                                        </Grid>

                                        <Grid item container justify={'center'}>
                                            <Box mt={5}>
                                                <Button onClick={signInWithGoogle} color={'primary'}>Sign In with
                                                    Google</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item container justify={'center'}>
                                            <Box mt={1} mb={2}>
                                                <Button style={{textAlign: 'center'}} className={classes.link}
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
            </Layout>
        </div>
    );
};

export default SignIn;
