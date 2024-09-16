import React, {ReactNode} from 'react';
import * as AccordionComponent from '@radix-ui/react-accordion';
import combine from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './Accordion.module.scss';

interface AccordionProp {
    triggerContent: ReactNode,
    accordionContent: ReactNode,
    parentClassName?: string
}

const Accordion: React.FC<AccordionProp> = ({triggerContent, accordionContent, parentClassName}) => (
    <AccordionComponent.Root className={combine(parentClassName, styles.Root)} type="single" defaultValue="item-1" collapsible>
        <AccordionComponent.Item className={styles.Item} value="item-1">
            <AccordionTrigger>{triggerContent}</AccordionTrigger>
            <AccordionContent>{accordionContent}</AccordionContent>
        </AccordionComponent.Item>
    </AccordionComponent.Root>
);

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof AccordionComponent.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
    <AccordionComponent.Header className={styles.Header}>
        <AccordionComponent.Trigger className={combine(styles.Trigger, className)}{...props} ref={forwardedRef}>
            {children}
            <ChevronDownIcon className={styles.Chevron} aria-hidden />
        </AccordionComponent.Trigger>
    </AccordionComponent.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof AccordionComponent.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <AccordionComponent.Content className={combine(styles.Content, className)}
        {...props}
        ref={forwardedRef}
    >
        <div className={styles.ContentText}>{children}</div>
    </AccordionComponent.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default Accordion;
