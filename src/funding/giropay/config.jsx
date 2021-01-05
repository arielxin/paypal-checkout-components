/* @flow */
/** @jsx node */

import { GiropayLogo } from '@paypal/sdk-logos/src';

import { BUTTON_LABEL, BUTTON_LAYOUT } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, type FundingSourceConfig } from '../common';

export function getGiropayConfig() : FundingSourceConfig {
    return {
        ...DEFAULT_FUNDING_CONFIG,

        shippingChange: false,
    
        layouts: [
            BUTTON_LAYOUT.VERTICAL
        ],

        labels: [
            BUTTON_LABEL.PAYPAL,
            BUTTON_LABEL.CHECKOUT,
            BUTTON_LABEL.BUYNOW,
            BUTTON_LABEL.PAY,
            BUTTON_LABEL.INSTALLMENT,
            BUTTON_LABEL.SUBSCRIBE
        ],
    
        Logo: ({ logoColor, optional }) => GiropayLogo({ logoColor, optional })
    };
}
