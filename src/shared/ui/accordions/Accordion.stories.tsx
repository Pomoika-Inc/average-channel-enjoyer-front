import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        triggerContent: { control: 'text', defaultValue: 'Click to expand' },
        accordionContent: { control: 'text', defaultValue: 'This is the accordion content.' },
        parentClassName: { control: 'text' },
        isOpen: { control: 'boolean', defaultValue: false },
        isWithArrow: { control: 'boolean', defaultValue: true },
        arrowColor: { control: 'radio', options: ['white', 'purple'], defaultValue: 'white' },
    },
} as Meta;

export const Default: StoryObj = {
    render: (args: any) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleToggle = (open: boolean) => {
            setIsOpen(open);
            if (args.onToggle) args.onToggle(open);
        };

        return (
            <Accordion
                {...args}
                isOpen={isOpen}
                onToggle={handleToggle}
            />
        );
    },
    args: {
        triggerContent: 'Click to expand',
        accordionContent: 'This is the accordion content.',
        isOpen: false,
        isWithArrow: true,
        arrowColor: 'white',
    },
};
