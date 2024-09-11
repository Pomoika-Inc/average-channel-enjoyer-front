import React from 'react';
import css from "./Coin.module.scss";
import CoinIcon from "@/shared/ui/icons/CoinIcon";

interface CoinWithCounterProps {
    counter: number
}

const CoinWithCounter: React.FC<CoinWithCounterProps> = ({counter}) => {
    return (
        <div className="flex items-center gap-1">
            <span className={css.counter}>
                {counter}
            </span>
            <CoinIcon/>
        </div>
    );
};

export default CoinWithCounter;
