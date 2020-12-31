import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";


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
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          toggleCartHandler={toggleCartHandler}/>
        </Layout>

    )
};

export default Jackets;
