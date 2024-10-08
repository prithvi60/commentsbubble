import React from 'react';
import PointComments from './pointComments';
import { getPointData } from '../utility';
import { colors } from '../styles';

const pointRadius = 5;

const Point = ({ id, selectedPoint, newPoint, showPoints, setSelectedPoint, dimensions, comments, setComments }) => {
  const { width, height } = dimensions ? getPointData({ id, dimensions }) : { width: 0, height: 0 };
  
  const marginTop = height - pointRadius;
  const marginLeft = width - pointRadius;
  const backgroundColor = showPoints
    ? selectedPoint === id ? colors.selectedPoint : colors.primary
    : colors.transparent;
console.log("comments",comments)
  return (
    <div
      style={{
        position: 'absolute',
        marginTop,
        marginLeft
      }}
    >
      <div
        style={{
          width: pointRadius * 4,
          height: pointRadius * 4,
          backgroundColor,
          borderRadius: '50%'
        }}
        onClick={event => {
          event.stopPropagation();
          const newSelectedPoint = id === selectedPoint ? null : id;
          setSelectedPoint(newSelectedPoint);
        }}
      />
      <PointComments 
        newPoint={newPoint} 
        pointId={id} 
        initialComments={
          // comments[id] || 
          []} 
        setComments={setComments} 
      />
    </div>
  );
};

export default Point;