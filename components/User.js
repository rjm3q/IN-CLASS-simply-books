import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

function UserCard({ userObj, onUpdate }) {
  const deleteThisUser = () => {
    if (window.confirm(`Delete ${userObj.Name}?`)) {
      deleteThisUser(userObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{width: '25rem', margin: '10px'}}>\
      <Card.Img variant="top" src={userObj.image} alt={userObj.Name} style={{ height: '400px'}} />
      <Card.Body>
        <Card.Title>{userObj.Name}</Card.Title>
        <Card.Text>{userObj.Email}</Card.Text>
        <Button variant="danger" onClick={deleteThisUser} className="m-2">DELETE</Button>
      </Card.Body>
    </Card>
  );
};

UserCard.propTypes = {
  userObj: PropTypes.shape({
    image: PropTypes.string,
    Name: PropTypes.string,
    Email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
