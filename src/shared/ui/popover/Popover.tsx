import React, {ReactNode} from 'react';
import * as PopoverComponent from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import styles from './Popover.module.scss';


interface PopoverProps {
    triggerElement: ReactNode,
    content: ReactNode
}

const Popover: React.FC<PopoverProps> = ({triggerElement, content}) => (
    <PopoverComponent.Root>
        <PopoverComponent.Trigger asChild>
            {triggerElement}
        </PopoverComponent.Trigger>
        <PopoverComponent.Portal>
            <PopoverComponent.Content className={styles.Content} sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {content}
                </div>
                <PopoverComponent.Close className={styles.Close} aria-label="Close">
                    <Cross2Icon />
                </PopoverComponent.Close>
                <PopoverComponent.Arrow className={styles.Arrow} />
            </PopoverComponent.Content>
        </PopoverComponent.Portal>
    </PopoverComponent.Root>
);

export default Popover
