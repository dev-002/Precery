import React from "react";

function Feedback() {
  if (window?.location.pathname === "/feedback")
    require("../../styles/feedback.css");

  return (
    <div class="rating-css">
      <div>
        Feedback
        <br />
        Form
      </div>

      <div class="star-icon">
        <input type="radio" name="rating1" id="rating1" />

        <label for="rating1" class="fa fa-star"></label>

        <input type="radio" name="rating1" id="rating2" />

        <label for="rating2" class="fa fa-star"></label>

        <input type="radio" name="rating1" id="rating3" />

        <label for="rating3" class="fa fa-star"></label>

        <input type="radio" name="rating1" id="rating4" />

        <label for="rating4" class="fa fa-star"></label>

        <input type="radio" name="rating1" id="rating5" />

        <label for="rating5" class="fa fa-star"></label>

        <button type="submit" class="btn">
          <a href="Feedback Form Confirm HTML and CSS.html">Submit</a>
        </button>
      </div>
    </div>
  );
}

export default Feedback;