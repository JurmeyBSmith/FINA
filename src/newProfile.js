import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Header, Segment, Grid, Divider } from 'semantic-ui-react';
import axios from 'axios';



class newProfile extends Component {

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
    
        // alert(
        //   'Tracking Number "' + this.state.trackingNumber + '", was submitted' +
        //   '\nStatus "' + this.state.status + '", was submitted' +
        //   '\nDelivery Date "' + this.state.deliveryDate + '", was submitted' +
        //   '\nShip Date "' + this.state.shipDate + '", was submitted' +
        //   '\nCity "' + this.state.shipcity + '", was submitted' +
        //   '\nState "' + this.state.shipState + '", was submitted' +
        //   '\nCountry "' + this.state.shipCountry + '", was submitted' +
        //   '\nReference Number "' + this.state.reference + '", was submitted'
    
        // );
    
      }


    render() {
        return (
            <Header className="App-header">
                <h1>New Profile</h1>
                <Segment size="massive" inverted>
            <hr ></hr>
            <Grid columns={1} relaxed='very'>
              

              <Grid.Column>
                <Form onSubmit={this.handleSubmit} inverted>
                  <Form.Field>
                    <label>First Name</label>
                    <input
                      name='Fname'
                      value={this.state.Fname}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input defaultValue={"Last Name"} onChange={this.handleChange} name='Lname' />
                  </Form.Field>
                  <Form.Field>
                    <label>Best Record</label>
                    <input defaultValue={"00:00:00"} onChange={this.handleChange} name='BestRec' />
                  </Form.Field>
                  <Form.Field>
                    <label>Country</label>
                    <input type="text" list="countries" placeholder={"US"} onChange={this.handleChange} name='CountryID' />
                    <datalist id="countries">
                      <option value="US"></option>
                      <option value="CA"></option>
                      <option value="UK"></option>
                      <option value="MX"></option>
                    </datalist>
                  </Form.Field>
                  
                  

                  <Button type='submit'>Submit</Button>
                </Form>
              </Grid.Column>
            </Grid>
            
          </Segment>
                
            </Header>
        )
    }
}
export default newProfile;