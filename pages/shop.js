import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import {Box, Typography} from "@material-ui/core";
import Layout from "../src/components/Layout/Layout";


const Shop = () => {

    const dispatch = useDispatch();

    const sneakerProducts = useSelector(state => {
        return state.sneakers.products.slice(0, 4);
    });
    const hatProducts = useSelector(state => {
        return state.hats.products.slice(0, 4);
    })

    const menProducts = useSelector(state => {
        return state.mens.products.slice(0, 4);
    })

    const womenProducts = useSelector(state => {
        return state.womens.products.slice(0, 4);
    })

    const glassProducts = useSelector(state => {
        return state.glasses.products.slice(0, 4);
    })

    const jacketProducts = useSelector(state => {
        return state.jackets.products.slice(0, 4);
    })

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

    return (
        <Layout>
            <Box mt={18} pl={8} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>SNEAKERS</Typography>
            </Box>
            <ProductsList products={sneakerProducts} subHandler={subSneakersHandler} addHandler={addSneakersHandler}
                          toggleCartHandler={toggleSneakersCartHandler}/>
            <Box pl={8} mt={6} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>HATS</Typography>
            </Box>
            <ProductsList products={hatProducts} subHandler={subHatsHandler} addHandler={addHatsHandler}
                          toggleCartHandler={toggleHatsCartHandler}/>

            <Box pl={8} mt={6} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>MENS</Typography>
            </Box>
            <ProductsList products={menProducts} subHandler={subMensHandler} addHandler={addMensHandler}
                          toggleCartHandler={toggleMensCartHandler}/>

            <Box pl={8} mt={6} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>WOMENS</Typography>
            </Box>
            <ProductsList products={womenProducts} subHandler={subWomensHandler} addHandler={addWomensHandler}
                          toggleCartHandler={toggleWomensCartHandler}/>

            <Box pl={8} mt={6} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>JACKETS</Typography>
            </Box>
            <ProductsList products={jacketProducts} subHandler={subJacketsHandler} addHandler={addJacketsHandler}
                          toggleCartHandler={toggleJacketsCartHandler}/>

            <Box pl={8} mt={6} mb={-18}>
                <Typography variant={'h3'} color={'primary'}>GLASSES</Typography>
            </Box>
            <ProductsList products={glassProducts} subHandler={subGlassesHandler} addHandler={addGlassesHandler}
                          toggleCartHandler={toggleGlassesCartHandler}/>
        </Layout>

    )
};

export default Shop;
