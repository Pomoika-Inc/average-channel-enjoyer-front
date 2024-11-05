import React from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ChannelCard} from "@/entities/channel";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";

export function ChannelsManagementPage() {

    const channels = useSelector((state: RootState) => state.channel.channels)

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {channels.map((channel) => (
                        <li key={channel.id}>
                            <ChannelCard channel={channel}
                                 actionSlot={
                                     <div className="flex items-center gap-2 mt-2">
                                         <Link to={`/management/channels/${channel.id}/products`}>
                                             <button className="p-2 text-white bg-pink-500 rounded-2xl">Products</button>
                                         </Link>

                                         <Link to={`/management/channels/${channel.id}/orders`}>
                                             <button className="p-2 text-white bg-blue-500 rounded-2xl">Orders</button>
                                         </Link>
                                     </div>
                                 }
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}