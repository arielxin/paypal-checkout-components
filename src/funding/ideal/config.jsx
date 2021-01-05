/* @flow */
/** @jsx node */

import { IdealLogo } from '@paypal/sdk-logos/src';
import { Fragment, node } from 'jsx-pragmatic/src';

import { BUTTON_LABEL, BUTTON_LAYOUT } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, type FundingSourceConfig, BasicLabel } from '../common';
import { Text, Space } from '../../ui/text';

export function getIdealConfig() : FundingSourceConfig {
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

        Logo: ({ logoColor, optional }) => IdealLogo({ logoColor, optional }),

        Label: ({ logo, ...opts }) => {
            if (__WEB__) {
                return logo;
            }

            const idealLogo = (
                <Fragment>
                    { logo }<Space /><Text>Online betalen</Text>
                </Fragment>
            );

            return (<BasicLabel
                { ...opts }
                logo={ idealLogo }
            />);
        }
    };
}
