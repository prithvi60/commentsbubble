import React from 'react';
import BlankCenterDiv from '../components/blankCenterDiv';
import ImagePreview from '../components/imagePreview';
import AllComments from '../components/allComments';
const SelectedImage = ({
  images,
  setImages,
  selectedImage,
  setSelectedImage,
  points,
  setPoints,
  comments,
  setComments,
  dimensions,
  setDimensions,
  showPoints,
  setShowPoints,
  showAllComments,
  setShowAllComments
}) => {
  if (!selectedImage) {
    return <BlankCenterDiv text="Please Select a Picture or Upload an Image" />;
  }

  const imagePreViewProps = {
    dimensions,
    selectedImage,
    points,
    setPoints,
    setDimensions,
    setSelectedImage,
    showPoints
  };

  return (
    <div  className='flex flex-col items-center justify-center w-full'>
      <div>
        <button onClick={() => setShowPoints(!showPoints)} className='bg-white p-4'>
          {showPoints ? 'Hide Points' : 'Show Points'}
        </button>
        <button onClick={() => setShowAllComments(!showAllComments)}  className='bg-white p-4'>
          {showAllComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      <ImagePreview {...imagePreViewProps} />
      <AllComments comments={comments[selectedImage.id] || []} />
    </div>
  );
};

export default SelectedImage;