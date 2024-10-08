"use client"
import React, { useState } from 'react';
import SelectedImage from './containers/selectedImage';

const Remarks = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      file: '/drawing.jpg',
      name: 'Dummy Image 1'
    }
  ]);
  const [selectedImage, setSelectedImage] = useState(   {
    id: 1,
    file: '/drawing.jpg',
    name: 'Dummy Image 1'
  });
  const [points, setPoints] = useState([]);
  const [comments, setComments] = useState({});
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showPoints, setShowPoints] = useState(true);
  const [showAllComments, setShowAllComments] = useState(false);

  return (
    <div>
      <SelectedImage
        images={images}
        setImages={setImages}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        points={points}
        setPoints={setPoints}
        comments={comments}
        setComments={setComments}
        dimensions={dimensions}
        setDimensions={setDimensions}
        showPoints={showPoints}
        setShowPoints={setShowPoints}
        showAllComments={showAllComments}
        setShowAllComments={setShowAllComments}
      />
    </div>
  );
};

export default Remarks;