import React, { useState, useEffect } from 'react';
import InputSearch from './inputSearch';
import { timeDifference } from '../utility';
import styles from '../styles';

const style = styles.PointComments;

const PointComments = ({ selectedImage, points, newPoint, selectedPoint, pointId, initialComments, setComments }) => {
  const [thisPointComments, setThisPointComments] = useState(initialComments || []);

  useEffect(() => {
    setThisPointComments(initialComments);
  }, [initialComments]);

  if (selectedPoint !== pointId) {
    return <div />;
  }

  const commentComponent = comment => (
    <div style={style.commentComponent} key={comment.id}>
      <div style={style.commentBody}>
        <span style={style.commentUser}>{comment.user}</span>
        <span style={style.commentTime}>{timeDifference(comment.time)}</span>
        <span
          style={style.commentDelete}
          onClick={event => {
            event.stopPropagation();
            const newComments = thisPointComments.filter(singleComment => singleComment.id !== comment.id);
            setThisPointComments(newComments);
            setComments(prevComments => ({
              ...prevComments,
              [pointId]: newComments
            }));
          }}
        >
          X
        </span>
      </div>
      <span style={style.commentSpan}>{comment.comment}</span>
    </div>
  );

  return (
    <div
      onClick={event => {
        event.stopPropagation();
      }}
      style={style.main}
    >
      <div style={style.header}>
        <span style={style.headerSpan}>
          {newPoint ? 'Add comment' : 'Comments'}
        </span>
      </div>
      <div style={style.commentsWrapper}>
        {thisPointComments.map(commentComponent)}
      </div>
      <InputSearch
        autoFocus
        clearOnSearch
        placeholder="comment here"
        style={style.input}
        onSearch={comment => {
          if (comment) {
            const newComment = {
              comment,
              id: new Date().getTime(),
              time: new Date().getTime(),
              user: 'User',
              pointId
            };
            const newComments = [newComment, ...thisPointComments];
            setThisPointComments(newComments);
            setComments(prevComments => ({
              ...prevComments,
              [pointId]: newComments
            }));
          }
        }}
      />
    </div>
  );
};

export default PointComments;