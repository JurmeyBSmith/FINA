import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Header, Segment, Grid, Divider } from 'semantic-ui-react';
import axios from 'axios';



class deleteProfile extends Component {

    constructor(props) {
        super(props);
        //var myVar = this.props.jsonData.data.data.data;
    
        console.log('The props: ', this.props);
        // sync state and props together
        this.state = {
          Fname: "",
          Lname: "",
          BestRec: "00:00:00",
          CountryID: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handleSubmit(event) {
        const { trackingNumber, reference } = this.state;
    
        // go get the values in the form 
        // update the state?
        this.setState({ submitted: true })
    
        console.log("State", this.state);
        //post
        var formObj = this.state;
    
        axios.post('http://localhost:3031/createProfile', {
          formObj
        }).then(
            alert(
                'New Profile "' + this.state.Fname + ' ' + this.state.Lname + '", was submitted'
            )
        )
    
       
    
      }


    render() {
        return (
            <Header className="App-header">
                <h1>Delete Profile</h1>
                <Segment size="massive" inverted>
            <hr ></hr>
            <Form onSubmit={this.handleSubmit} inverted>
                  <Form.Field>
                    <label>Profile ID: </label>
                    <input
                      name='Fname'
                      value={this.state.Fname}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
              </Form>    
            
          </Segment>
                
            </Header>
        )
    }
}
export default deleteProfile;