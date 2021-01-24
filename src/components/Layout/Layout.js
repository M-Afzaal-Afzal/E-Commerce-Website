import React, {Fragment, useEffect, useState} from 'react';
import Header from "../Header/Header";
import {auth} from '../../firebaseUtils/firebaseUtils'
import {createUserProfileDocument} from "../../firebaseUtils/firebaseUtils";
import * as actions from "../../store/actions/index.actions";
import {useDispatch} from "react-redux";

const Layout = ({children}) => {

    // const [user, setUser] = useState(null);

    let unsubscribeFromAuth = null;
    const dispatch = useDispatch();

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            // setUser(user);
            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapshot => {
                    dispatch(actions.setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    }))
                })

            } else {
                dispatch(actions.setCurrentUser(user));
            }
        })

        return () => {
            unsubscribeFromAuth();
        }
    })

    // useEffect(() => {
    //     unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    //         // setUser(user);
    //         if (user) {
    //             const userRef = await createUserProfileDocument(user);
    //
    //             userRef.onSnapshot(snapshot => {
    //                 setUser({
    //                     id: snapshot.id,
    //                     ...snapshot.data()
    //                 })
    //             })
    //
    //         } else {
    //             setUser(user);
    //         }
    //     })
    //     console.log(user);
    //
    //     return () => {
    //         unsubscribeFromAuth();
    //     }
    // }, [])

    // console.log(user)

    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    );
};

export default React.memo(Layout);
