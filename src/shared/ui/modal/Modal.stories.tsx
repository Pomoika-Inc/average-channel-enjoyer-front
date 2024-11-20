import React from 'react';
import Modal from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
};

export const Default = () => (
    <Modal
        triggerContent={<button className="bg-blue-500 text-white px-4 py-2 rounded">Open Modal</button>}
        modalContent={<div className="p-4 text-lg">This is the default modal content.</div>}
        isCloseButton={true}
    />
);

export const WithoutCloseButton = () => (
    <Modal
        triggerContent={<button className="bg-green-500 text-white px-4 py-2 rounded">Open Modal</button>}
        modalContent={<div className="p-4 text-lg">This modal does not have a close button.</div>}
        isCloseButton={false}
    />
);

export const CustomStyledModal = () => (
    <Modal
        triggerContent={<button className="bg-purple-500 text-white px-4 py-2 rounded">Open Custom Modal</button>}
        modalContent={
            <div className="p-6 bg-purple-100 text-purple-800 rounded-lg">
                <h2 className="text-2xl font-semibold">Custom Modal</h2>
                <p>This modal has custom styles for its content.</p>
            </div>
        }
        isCloseButton={true}
    />
);
