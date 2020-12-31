import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";
import {Box} from "@material-ui/core";


const Jackets = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => {
        return state.jackets.products;
    })

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleJacketCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneJacket(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneJacket(id));
    }

    return (
        <Layout>
            <Box mt={-5}>
                <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                              toggleCartHandler={toggleCartHandler}/>
            </Box>
        </Layout>

    )
};

export default Jackets;
