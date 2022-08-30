import React from "react";

export const AddReview = () => {
  function addReview(e) {
    e.preventDefault();
    console.log("review receivede");
  }
  return (
    <>
      <h2>Add Review</h2>
      <form onSubmit={addReview}>
        <label>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Write your review here..."
          />
        </label>
        <label>
          <input name="rating" type={Number} min="1" max="5" />
        </label>
      </form>
    </>
  );
};
