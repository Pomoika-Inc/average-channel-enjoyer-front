import React, {ReactNode} from 'react';
import combine from "classnames";

interface CoinWithCounterProps {
    children: ReactNode,
    className?: string
}

export const Tag: React.FC<CoinWithCounterProps> = ({children, className}) => {
    return (
        <div className={combine(className, 'bg-red-500 text-center text-xs rounded-lg')} >
            {children}
        </div>
    );
};
