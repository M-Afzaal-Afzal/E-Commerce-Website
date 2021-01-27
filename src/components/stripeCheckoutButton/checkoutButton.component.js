import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IE6lXDTaOmfhSaIRHScO2EnHiAJLe4i25GPfRBakm0Zew0o1COKrum0iNVhFXSdX3RmNgZw0bHSKuwmmvoNjGQE00TgBD8SaA';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            name={'Clothing App'}
            label={'Pay Now'}
            token={onToken}
            amount={priceForStripe}
            panelLabel={'Pay Now'}
            billingAddress
            shippingAddress
            image={'/logo.png'}
            stripeKey={publishableKey}
            description={`Your total is ${price}`}
        />
    );
};

export default StripeCheckoutButton;
