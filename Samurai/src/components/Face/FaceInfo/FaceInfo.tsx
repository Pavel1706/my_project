import React from 'react';
import p from './FaceInfo.module.css';

type FaceInfoType = {
    message: string
}


export const FaceInfo = (props:FaceInfoType ) => {
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={p.descriptionBlock}>
                {props.message}
            </div>

        </div>
    )
}