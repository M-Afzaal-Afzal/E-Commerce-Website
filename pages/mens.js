import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";


const Mens = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => {
        return state.mens.products;
    })

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleMenCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneMens(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneMens(id));
    }

    return (
        <Layout>
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          toggleCartHandler={toggleCartHandler}/>
        </Layout>

    )
};

export default Mens;
