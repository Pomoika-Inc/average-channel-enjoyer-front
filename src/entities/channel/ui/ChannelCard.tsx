import React from 'react';
import css from "./Channel.module.scss";
import {Tag} from "@/shared/ui/tags/Tag";
import {Channel} from "@/entities/channel/model/channelTypes";

interface ChannelCardProps {
    channel: Channel}

export const ChannelCard: React.FC<ChannelCardProps> = ({channel}) => {
    return (
        <div className="gap-4 items-center border rounded-lg shadow-lg py-3 px-2">
            <div className="grid grid-cols-12 ">
                <div className="col-span-3 flex items-center">
                    <img src={channel.image} alt="image"/>
                </div>

                <div className="col-span-6 flex flex-col justify-center h-full px-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{channel.title}</h2>
                    </div>
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