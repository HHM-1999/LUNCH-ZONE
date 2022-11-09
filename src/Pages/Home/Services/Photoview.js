import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Photoview = ({ photo }) => {
    return (
        <div>
            <PhotoProvider>
                <PhotoView src="/1.jpg">
                    <img src="/1-thumbnail.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
        </div>
    );
};

export default Photoview;