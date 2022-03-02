import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('failed to logout');
      console.log(error);
    }
  };
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>User Dashboard</h2>

          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email: {currentUser?.email}</strong>

          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update profile
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
