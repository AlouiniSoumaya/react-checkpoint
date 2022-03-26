import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Input from "./input";
export default function CustomModals({ samia, Data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstname, setFirstName] = useState(samia.firstname);
  const [role, setRole] = useState([]);

  const alertHandler = (e) => {
    e.preventDefault();
    alert(
      `Hello you have changed ${e.target[1].value} \n ${e.target[2].value} \n ${e.target[3].value}`
    );
  };

  useEffect(() => {
    let newData = new Set();
    Data.map((el) => {
      newData.add(el.roles[0].role);
    });

    setRole([...newData]);
  }, []);
  console.log("roles", role);
  return (
    <>
      <span className="btn" onClick={handleShow}>
        {" "}
        <i class="fas fa-cogs"></i>{" "}
      </span>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={alertHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              type="text"
              placeholder="firstname"
              defaultValue={samia.firstname}
              className="form-controls"
              label="Avatar"
            />
            <Input
              type="text"
              placeholder="lastname"
              defaultValue={samia.lastname}
              className="form-controls"
              label="Username"
            />
            <Input
              type="text"
              placeholder="Email"
              defaultValue={samia.email}
              className="form-controls"
              label="Email"
            />
            <Input
              type="password"
              placeholder="password"
              defaultValue={samia.password}
              className="form-controls"
              label="password"
            />
            <Form.Select aria-label="Default select example">
              <option selected>{samia.roles[0].role} </option>
              {role.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
