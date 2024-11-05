import React, {ReactNode} from 'react';
import {Tag} from "@/shared/ui/tags/Tag";
import {Channel} from "@/entities/channel/model/channelTypes";
import combine from "classnames";
import css from './Channel.module.scss'

interface ChannelCardProps {
    channel: Channel,
    actionSlot?: ReactNode
}

export const ChannelCard: React.FC<ChannelCardProps> = ({channel, actionSlot}) => {
    return (
        <div className={combine( css.channelCard ,"gap-4 items-center border rounded-lg shadow-lg py-3 px-2")}>
            <div className="grid grid-cols-12 ">
                <div className="col-span-3 flex items-center">
                    <img src={channel.image} alt="image"/>
                </div>

                <div className="col-span-6 flex flex-col h-full px-3">
                        <h2 className="text-xl font-semibold">{channel.title}</h2>
                        {actionSlot}
                </div>

                <div className="col-span-3 flex flex-col justify-between items-end h-full">
                    <Tag className="py-1 px-1">
                        <span className="text-white">NEW!</span>
                    </Tag>
                </div>
            </div>
        </div>
    )
}