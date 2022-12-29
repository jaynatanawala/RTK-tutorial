import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTutorialThunk,
  getTutorialThunk,
  searchTutorialThunk,
  updateTutorialThunk,
} from "../../redux/slice/tutorial";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function ListTutorials(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tutorialId, setTutorialId] = useState(0);
  const [searchtext, setSearchText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchTutorials();
  }, []);

  const fetchTutorials = async () => {
    dispatch(getTutorialThunk());
  };

  const tutorialList = useSelector((state) => state.tutorial.tutorials);

  const callEdit = (e) => {
    dispatch(updateTutorialThunk({ tutorialId, title, description }));

    fetchTutorials();
  };

  const callDelete = (id) => {
    dispatch(deleteTutorialThunk(id));

    fetchTutorials();
  };

  const callSearch = async () => {
    dispatch(searchTutorialThunk(searchtext));
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          placeholder="Search Tutorial by title"
          className="mt-3"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="primary" onClick={() => callSearch()}>
          Go
        </Button>
      </div>
      <div className="mt-3 mb-3">
        <Button variant="primary" onClick={() => navigate("/add")}>
          + New Tutorial
        </Button>
      </div>
      <Table responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tutorialList?.map((tutorial, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{tutorial.title}</td>
              <td>{tutorial.description}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();
                    setTitle(tutorial.title);
                    setDescription(tutorial.description);
                    setTutorialId(tutorial.id);
                  }}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => callDelete(tutorial.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tutorial</Modal.Title>
        </Modal.Header>
        <Form onSubmit={callEdit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default ListTutorials;
