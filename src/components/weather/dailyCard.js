import React from "react";
// import PropTypes from "prop-types";

function DailyCard(props) {
  return (
    <div className="dailyCard">
      <span>{props.dec}</span>
    </div>
  );
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default DailyCard;
