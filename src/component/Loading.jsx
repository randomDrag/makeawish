import React from 'react';
import '@lottiefiles/lottie-player';

function Loading() {
    return (
        <lottie-player
            id="firstLottie"
            loop
            autoplay
            background="transparent"
            mode="bounce"
            src="https://assets1.lottiefiles.com/temp/lf20_67OOiY.json"
            style={{ width: '100px', height: "70px" }}
        ></lottie-player>
    )
}

export default Loading;