import React, {ReactNode} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import styles from './modal.module.scss';

interface ModalProp {
    triggerContent: ReactNode;
    modalContent: ReactNode;
    parentClassName?: string;
    isOpen?: boolean;
    isCloseButton?: boolean
    // isWithArrow?: boolean;
    // onToggle?: (isOpen: boolean) => void
}

const Modal: React.FC<ModalProp> = ({triggerContent, modalContent, parentClassName, isCloseButton = false, isOpen}) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            {triggerContent}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={styles.Overlay}/>
            <Dialog.Content className={styles.Content}>
                {modalContent}
                {isCloseButton &&
                    <Dialog.Close asChild>
                        <button className={styles.IconButton} aria-label="Close">
                            <Cross2Icon/>
                        </button>
                    </Dialog.Close>
                }
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default Modal;
