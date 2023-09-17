import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner'

export default function Roundspinner() {
        return (
                <div>
                        <CirclesWithBar
                                height="60"
                                width="60"
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                outerCircleColor=""
                                innerCircleColor=""
                                barColor=""
                                ariaLabel='circles-with-bar-loading'
                        />
                </div>
        )
}
