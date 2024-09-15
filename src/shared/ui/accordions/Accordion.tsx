import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './Accordion.module.scss';


const AccordionDemo: React.FC = () => (
    <Accordion.Root className={styles.Root} type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className={styles.Item} value="item-1">
            <AccordionTrigger>Read more?</AccordionTrigger>
            <AccordionContent>
                W3Schools is optimized for learning and training. Examples might be
                simplified to improve reading and learning. <br/><br/>Tutorials, references,
                and examples are constantly reviewed
                to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree.
                <br/><br/>
                To have read and accepted our terms of use, cookie and privacy policy.
                Copyright 1999-2024 by Refsnes Data.
                All Rights Reser.</AccordionContent>
        </Accordion.Item>
    </Accordion.Root>
);


const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.Header}>
        <Accordion.Trigger className={classNames(styles.Trigger, className)}{...props} ref={forwardedRef}>
            {children}
            <ChevronDownIcon className={styles.Chevron} aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames(styles.Content, className)}
        {...props}
        ref={forwardedRef}
    >
        <div className={styles.ContentText}>{children}</div>
    </Accordion.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default AccordionDemo;
