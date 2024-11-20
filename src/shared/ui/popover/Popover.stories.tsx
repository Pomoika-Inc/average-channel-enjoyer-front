import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

export default {
    title: 'Components/Popover',
    component: Popover,
    argTypes: {
        triggerElement: { control: 'text' },
        content: { control: 'text' },
    },
} as Meta;

export const Default: StoryObj = {
    render: (args: any) => (
        <Popover
            triggerElement={
                <button style={{ padding: '8px', cursor: 'pointer' }}>
                    <MixerHorizontalIcon />
                </button>
            }
            content={<div style={{ padding: '16px', color: '#333' }}>{args.content}</div>}
        />
    ),
    args: {
        content: 'This is the popover content.',
    },
};
