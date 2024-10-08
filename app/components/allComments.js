import React from 'react';
import BlankCenterDiv from './blankCenterDiv';
import InputSearch from './inputSearch';

const AllComments = ({ comments }) => {
  return (
    <div>
      <h2>All Comments</h2>
      {comments.length === 0 ? (
        <BlankCenterDiv text="No Comments" />
      ) : (
        comments.map(comment => (
          <div key={comment.id}>
            <span>{comment.user}</span>
            <span>{comment.comment}</span>
          </div>
        ))
      )}
      <InputSearch placeholder="Comment here" />
    </div>
  );
};

export default AllComments;