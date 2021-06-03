/* @flow */
/** @jsx node */

import { node, Fragment } from 'jsx-pragmatic/src';
import { LOGO_COLOR } from '@paypal/sdk-logos/src';
import { FUNDING_BRAND_LABEL } from '@paypal/sdk-constants/src';

import { BUTTON_COLOR, BUTTON_LABEL, BUTTON_LAYOUT, BUTTON_FLOW } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, type FundingSourceConfig } from '../common';
import { componentContent } from '../content';

import { ButtonPersonalization, Logo, WalletLabel, Tag } from './template';

export function getPayPalConfig() : FundingSourceConfig {
    return {
        ...DEFAULT_FUNDING_CONFIG,

        flows: [
            BUTTON_FLOW.PURCHASE,
            BUTTON_FLOW.BILLING_SETUP,
            BUTTON_FLOW.SUBSCRIPTION_SETUP
        ],

        layouts: [
            BUTTON_LAYOUT.VERTICAL,
            BUTTON_LAYOUT.HORIZONTAL
        ],

        colors: [
            BUTTON_COLOR.GOLD,
            BUTTON_COLOR.BLUE,
            BUTTON_COLOR.SILVER,
            BUTTON_COLOR.BLACK,
            BUTTON_COLOR.WHITE
        ],
    
        logoColors: {
            [BUTTON_COLOR.GOLD]:   LOGO_COLOR.BLUE,
            [BUTTON_COLOR.SILVER]: LOGO_COLOR.BLUE,
            [BUTTON_COLOR.BLUE]:   LOGO_COLOR.WHITE,
            [BUTTON_COLOR.BLACK]:  LOGO_COLOR.WHITE,
            [BUTTON_COLOR.WHITE]:  LOGO_COLOR.BLUE
        },
    
        labelText: `${ FUNDING_BRAND_LABEL.PAYPAL }`,

        Logo,

        Label: ({ ...opts }) => {
            const BasicLabel = ({ logo, label, period, locale: { lang } }) => {
                if (__WEB__) {
                    return logo;
                }
            
                const { Checkout, Pay, BuyNow, Installment, Subscribe, Donate } = componentContent[lang];
            
                if (label === BUTTON_LABEL.CHECKOUT) {
                    return <Checkout logo={ logo } />;
                }
            
                if (label === BUTTON_LABEL.SUBSCRIBE && Subscribe) {
                    return <Subscribe logo={ logo } />;
                }
                
                if (label === BUTTON_LABEL.DONATE && Donate) {
                    return <Donate logo={ logo } />;
                }
            
                if (label === BUTTON_LABEL.PAY) {
                    return <Pay logo={ logo } />;
                }
            
                if (label === BUTTON_LABEL.BUYNOW) {
                    return <BuyNow logo={ logo } />;
                }
            
                if (label === BUTTON_LABEL.INSTALLMENT && Installment) {
                    return <Installment logo={ logo } period={ period } />;
                }
            
                return logo;
            };

            return (
                <Fragment>
                    <BasicLabel { ...opts } />
                    <ButtonPersonalization { ...opts } />
                </Fragment>
            );
        },

        WalletLabel,
        Tag
    };
}
