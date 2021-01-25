import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import {Box, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Layout from "../src/components/Layout/Layout";
import React from "react";
import * as selectors from '../src/store/selectors/index.selectors'

const Shop = () => {

    const theme = useTheme();

    const dispatch = useDispatch();

    const sneakerProducts = useSelector(selectors.selectSneakersProducts);
    const hatProducts = useSelector(selectors.selectHatsProducts)

    const menProducts = useSelector(selectors.selectMensProducts)

    const womenProducts = useSelector(selectors.selectWomensProducts)

    const glassProducts = useSelector(selectors.selectGlassesProducts)

    const jacketProducts = useSelector(selectors.selectJacketsProducts)

    // console.log(menProducts);

    const toggleSneakersCartHandler = (id) => {
        dispatch(actions.toggleSneakerCart(id))
    }

    const toggleHatsCartHandler = (id) => {
        dispatch(actions.toggleHatCart(id))
    }

    const toggleMensCartHandler = (id) => {
        dispatch(actions.toggleMenCart(id))
    }

    const toggleWomensCartHandler = (id) => {
        dispatch(actions.toggleWomenCart(id))
    }

    const toggleJacketsCartHandler = (id) => {
        dispatch(actions.toggleJacketCart(id))
    }

    const toggleGlassesCartHandler = (id) => {
        dispatch(actions.toggleGlassCart(id))
    }

    const addSneakersHandler = (id) => {
        dispatch(actions.addOneSneaker(id))
    }

    const addHatsHandler = (id) => {
        dispatch(actions.addOneHat(id))
    }

    const addMensHandler = (id) => {
        dispatch(actions.addOneMens(id))
    }

    const addWomensHandler = (id) => {
        dispatch(actions.addOneWomen(id))
    }

    const addJacketsHandler = (id) => {
        dispatch(actions.addOneJacket(id))
    }

    const addGlassesHandler = (id) => {
        dispatch(actions.addOneGlass(id))
    }


    const subHatsHandler = (id) => {
        dispatch(actions.subOneHat(id));
    }

    const subSneakersHandler = (id) => {
        dispatch(actions.subOneSneaker(id));
    }

    const subMensHandler = (id) => {
        dispatch(actions.subOneMens(id));
    }

    const subWomensHandler = (id) => {
        dispatch(actions.subOneWomen(id));
    }

    const subJacketsHandler = (id) => {
        dispatch(actions.subOneJacket(id));
    }

    const subGlassesHandler = (id) => {
        dispatch(actions.subOneGlass(id));
    }

    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Layout>
            <Box mt={matchesXs ? 12 : 18} pl={matchesXs ? 4 : 8} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>SNEAKERS</Typography>
            </Box>
            <ProductsList products={sneakerProducts} subHandler={subSneakersHandler} addHandler={addSneakersHandler}
                          toggleCartHandler={toggleSneakersCartHandler}/>
            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>HATS</Typography>
            </Box>
            <ProductsList products={hatProducts} subHandler={subHatsHandler} addHandler={addHatsHandler}
                          toggleCartHandler={toggleHatsCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>MENS</Typography>
            </Box>
            <ProductsList products={menProducts} subHandler={subMensHandler} addHandler={addMensHandler}
                          toggleCartHandler={toggleMensCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>WOMENS</Typography>
            </Box>
            <ProductsList products={womenProducts} subHandler={subWomensHandler} addHandler={addWomensHandler}
                          toggleCartHandler={toggleWomensCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>JACKETS</Typography>
            </Box>
            <ProductsList products={jacketProducts} subHandler={subJacketsHandler} addHandler={addJacketsHandler}
                          toggleCartHandler={toggleJacketsCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>GLASSES</Typography>
            </Box>
            <ProductsList products={glassProducts} subHandler={subGlassesHandler} addHandler={addGlassesHandler}
                          toggleCartHandler={toggleGlassesCartHandler}/>
        </Layout>

    )
};

export default React.memo(Shop);
