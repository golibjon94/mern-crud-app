import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

   
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({name: e.target.value})
  }

  onChangeStudentEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeStudentPhone(e) {
    this.setState({rollno: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.phone}`);

    this.setState({name: '', email: '', phone: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeStudentPhone}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}