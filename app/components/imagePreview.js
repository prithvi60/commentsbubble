import React, { useRef } from "react";
import Measure from "react-measure";
import Point from "./point";
import { setPoint } from "../utility";

const ImagePreview = ({
  dimensions,
  selectedImage,
  points,
  setPoints,
  showPoints,
  setDimensions,
}) => {
  const currentPosition = useRef(null);

  const setComment = (event) => {
    event.stopPropagation();
    currentPosition.current = { x: event.clientX, y: event.clientY };

    if (dimensions) {
      try {
        const newPoint = setPoint(dimensions, currentPosition.current);
        if (newPoint) {
          setPoints((prevPoints) => [...prevPoints, newPoint]);
        } else {
          console.error("Failed to create a new point: newPoint is null or undefined");
        }
      } catch (error) {
        console.error("Error setting point:", error);
      }
    }
  };

  return (
    <div>
      <Measure bounds onResize={(measure) => setDimensions(measure.bounds)}>
        {({ measureRef }) => (
          <div>
            <img
              alt="#"
              src={selectedImage.file}
              onClick={setComment}
              ref={measureRef}
            />
            {Array.isArray(points) && points.map((point, index) => (
              <Point key={point.id || index} id={point.id} /> // Ensure point.id is unique
            ))}
          </div>
        )}
      </Measure>
    </div>
  );
};

export default ImagePreview;