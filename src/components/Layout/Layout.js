import React, {Fragment, useEffect} from 'react';
import Header from "../Header/Header";
import {auth} from '../../firebaseUtils/firebaseUtils'
import {createUserProfileDocument} from "../../firebaseUtils/firebaseUtils";
import * as actions from "../../store/actions/index.actions";
import {useDispatch} from "react-redux";

const Layout = ({children}) => {

    let unsubscribeFromAuth = null;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(actions.fetchCollections());

        unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => {
                    const user = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    dispatch(actions.setCurrentUser(user));
                })

            } else {
                dispatch(actions.setCurrentUser(user));
            }
        })
        return () => {
            unsubscribeFromAuth();
        }
    }, [])

    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    );
};

export default React.memo(Layout);
