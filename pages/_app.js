import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/utils/theme';
import {Provider} from 'react-redux'
import {useStore} from '../src/store/store'

export default function MyApp(props) {
    const store = useStore(props.pageProps.initialReduxState)
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Clothing App by M Afzaal Afzal</title>
                <meta charSet='utf-8'/>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                <meta name='viewport'
                      content='width=device-width,initial-scale=1'/>
                <meta name='description' content='An Ecommerce website from where the users can buy different things according to their choice. Developed by M Afzaal Afzal'/>
                <meta name='keywords' content='E-Commerce Web App by M Afzaal Afzal'/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="theme-color" content='#556cd6'/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
