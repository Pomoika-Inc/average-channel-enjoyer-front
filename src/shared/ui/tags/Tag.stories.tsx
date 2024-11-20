import React from 'react';
import { Tag } from './Tag';

export default {
    title: 'Components/Tag',
    component: Tag,
} as const;

export const DefaultTag = () => (
    <Tag className="bg-red-500 text-white p-2 rounded-md">Default Tag</Tag>
);

export const CustomClassTag = () => (
    <Tag className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Custom Styled Tag</Tag>
);

export const LargeTag = () => (
    <Tag className="bg-green-500 text-white text-lg p-4 rounded-full">Large Tag</Tag>
);
