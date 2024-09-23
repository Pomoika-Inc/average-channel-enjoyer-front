import React, { ReactNode, useState, useEffect } from 'react';
import * as AccordionComponent from '@radix-ui/react-accordion';
import combine from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './Accordion.module.scss';

interface AccordionProp {
    triggerContent: ReactNode;
    accordionContent: ReactNode;
    parentClassName?: string;
    isOpen?: boolean;
    isWithArrow?: boolean;
    onToggle?: (isOpen: boolean) => void
}

const Accordion: React.FC<AccordionProp> = ({
        triggerContent,
        accordionContent,
        parentClassName,
        isOpen = false,
        isWithArrow = true,
        onToggle
    }) => {

    const [openValue, setOpenValue] = useState<string | undefined>(isOpen ? 'item-1' : undefined);

    useEffect(() => {
        // if(isOpen && openValue ==="")
            setOpenValue(isOpen ? 'item-1' : undefined);
        // console.log('da')
    }, [isOpen]);


    const handleValueChange = (value: string | undefined) => {
        setOpenValue(value);

        if (onToggle) onToggle(!!value)
    };

    return (
        <AccordionComponent.Root
            className={combine(parentClassName, styles.Root)}
            type="single"
            collapsible
            value={openValue}
            onValueChange={handleValueChange}
        >
            <AccordionComponent.Item className={styles.Item} value="item-1">
                <AccordionTrigger isWithArrow={isWithArrow}>{triggerContent}</AccordionTrigger>
                <AccordionContent>{accordionContent}</AccordionContent>
            </AccordionComponent.Item>
        </AccordionComponent.Root>
    );
};

interface AccordionTriggerProp extends React.ComponentPropsWithoutRef<typeof AccordionComponent.Trigger> {
    isWithArrow?: boolean;
}

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    AccordionTriggerProp
>(({ children, className, isWithArrow = true, ...props }, forwardedRef) => (
    <AccordionComponent.Header className={styles.Header}>
        <AccordionComponent.Trigger className={combine(styles.Trigger, className)} {...props} ref={forwardedRef}>
            {children}
            {isWithArrow && <ChevronDownIcon className={styles.Chevron} aria-hidden />}
        </AccordionComponent.Trigger>
    </AccordionComponent.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof AccordionComponent.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <AccordionComponent.Content className={combine(styles.Content, className)} {...props} ref={forwardedRef}>
        <div className={styles.ContentText}>{children}</div>
    </AccordionComponent.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default Accordion;
