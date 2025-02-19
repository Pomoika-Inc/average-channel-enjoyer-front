import CoinWithCounter from "@/shared/ui/coin/CoinWithCounter";

export function HeaderContent() {

    return (
        <div className="flex justify-between items-center w-full pl-3">
            <div>
                <span>pic</span>
                <span className="px-3">Channel name</span>
            </div>
            <CoinWithCounter counter={78}/>
        </div>
    );
}