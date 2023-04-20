import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authObj.first_name}?`)) {
      deleteSingleAuthor(authObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={authObj.image} alt={authObj.title} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{authObj.first_name} {authObj.last_name}</Card.Title>
        <p className="card-text bold">{authObj.favorite && <span>Favorite<br /></span> } {authObj.favorite}</p>
        <p className="card-text bold"> {authObj.email}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/author/${authObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${authObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
