import React from "react";
import Layout from "@/shared/ui/layouts/Layout";
import {HeaderContent} from "./HeaderContent";
import {ChannelCard} from "@/entities/channel";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "@/app/appStore";

export function ChannelListPage() {

    const channels = useSelector((state: RootState) => state.channel.channels)

    return (
        <>
            <Layout headerContent={<HeaderContent/>}/>
            <div className="flex flex-col items-center">
                <ul className="flex flex-col w-full p-3 gap-2">
                    {channels.map((channel) => (
                        <li key={channel.id}>
                            <Link to={`/channels/${channel.id}`}>
                                <ChannelCard channel={channel}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}