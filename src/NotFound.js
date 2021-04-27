import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>SORRY!</h2>
      <p>The Page cannot be found!</p>
      <Link to="/">click me to go back to home page...</Link>
    </div>
  );
};

export default NotFound;
