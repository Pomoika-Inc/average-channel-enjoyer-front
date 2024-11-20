import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CoinWithCounter from './CoinWithCounter';

export default {
    title: 'Components/CoinWithCounter',
    component: CoinWithCounter,
    argTypes: {
        counter: {
            control: { type: 'number' },
            defaultValue: 5,
        },
    },
} as Meta;

export const Default: StoryObj = {
    args: {
        counter: 10,
    },
};
