import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { logout, reset } from "../../features/auth/authSlice";

function Logout({ show, handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    localStorage.removeItem('token');

    navigate("/login");
    handleClose();

    
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center my-5">
          <h1>Logout</h1>
          <p>Are you sure you want to logout?</p>
          <Button className="btn-block rounded-4 mt-5" onClick={handleLogout} style={{ backgroundColor: '#21127b' }}>
            Logout
          </Button>
          <Button type="submit" variant="dark" className="btn-block rounded-4 mb-5" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Logout;
