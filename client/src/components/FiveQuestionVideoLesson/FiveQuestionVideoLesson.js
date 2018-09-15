import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import certAnswers from '../../certAnswers.json'
import "./FiveQuestionVideoLesson.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom'


class FiveQuestionVideoLesson extends React.Component {

    state = {
        sponsorFirstName: "",
        sponsorLastName: "",
        sponsorImageLink: "",
        sponsorEmail: "",
        sponsorRolePosition: "",
        sponsorAboutMe: "",
        sponsorAboutMySchool: "",
        sponsorWhyInterested: "",
        submitFlag: false,
        redirect: false
    };


    checkAnswers = (event) => {
        // console.log("The entire state: " , this.state);
        event.preventDefault();
        
        this.setState({
            submitFlag : true
        });

                // API
                // .saveApplication(
                //     this.state.sponsorFirstName,
                //     this.state.sponsorLastName,
                //     this.state.sponsorImageLink,
                //     this.state.sponsorEmail,
                //     this.state.sponsorRolePosition,
                //     this.state.sponsorAboutMe,
                //     this.state.sponsorAboutMySchool,
                //     this.state.sponsorWhyInterested,
                //     this.state.sponsorTestScore
                // )
                // .then(res => {
                // this.setState({
                //     selectedOption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                //     sponsorFirstName: "",
                //     sponsorLastName: "",
                //     sponsorImageLink: "",
                //     sponsorEmail: "",
                //     sponsorRolePosition: "",
                //     sponsorAboutMe: "",
                //     sponsorAboutMySchool: "",
                //     sponsorWhyInterested: "",
                //     sponsorTestScore: "",
                //     redirect: true
                // });

                // }).catch(err => {
                // console.log(err);

        }


    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

    render() {
        
        const {redirect} = this.state;
         console.log(redirect);
        if (redirect) {
            return <Redirect to='/thankyou' />
        }
        
        return (
            <div className="certification-page">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6 text-center">
                    <h3>Welcome Admin!  Here is where you can create a five question video lesson!</h3>
                    <br />
                    </div>
                    <div className="col-3">
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6 text-center">
                    <h3>Create a lesson here:</h3>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
              
                <br/>
                <form>
                <div className="form-group">
                    First Name: <br/> <input 
                        type="text" 
                        name="sponsorFirstName" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorFirstName}
                        /> 
                         {(!this.state.sponsorFirstName && this.state.submitFlag ) ? <div className="error-text">Firstname required</div> : " "}
                        </div>
                        <div className="form-group">
                    Last Name: <br/>
                     <input 
                        type="text" 
                        name="sponsorLastName"
                        onChange={this.handleInputChange}
                        value={this.state.sponsorLastName} 
                        /> 
                       {(!this.state.sponsorLastName && this.state.submitFlag ) ? <div className="error-text">Lastname required</div> : " "}
                        </div>
                        <div className="form-group">
                    Photo: <br/> <input
                        type="text" 
                        name="sponsorImageLink" 
                        placeholder="Image link for profile"
                        onChange={this.handleInputChange}
                        value={this.state.sponsorImageLink}
                        /> 
                        {(!this.state.sponsorImageLink && this.state.submitFlag ) ? <div className="error-text">Image URL required</div> : " "}
                        </div>
                        <div className="form-group">
                    Email Address: <br/> <input 
                        type="email" 
                        name="sponsorEmail" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorEmail}
                        />
                        {(!this.state.sponsorEmail && this.state.submitFlag ) ? <div className="error-text">Email required</div> : " "}
                        </div>
                        <div className="form-group">
                    Role/Position: <br/> <input 
                        type="text" 
                        name="sponsorRolePosition" 
                        placeholder="Teacher, Counselor, etc"
                        onChange={this.handleInputChange}
                        value={this.state.sponsorRolePosition}
                        /> 
                        {(!this.state.sponsorRolePosition && this.state.submitFlag ) ? <div className="error-text">Enter a role/position</div> : " "}
                        </div>
                        <div className="form-group">
                    About Me: <br/> <textarea 
                        rows="4" 
                        cols="100" 
                        name="sponsorAboutMe" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorAboutMe}
                        /> 
                        {(!this.state.sponsorAboutMe && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                        </div>
                        <div className="form-group">
                    About My School: <br/> <textarea
                        rows="4" 
                        cols="100" 
                        name="sponsorAboutMySchool" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorAboutMySchool}
                        /> 
                        {(!this.state.sponsorAboutMySchool && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                        </div>
                        <div className="form-group">
                    Why we are interested in starting a PAN club: <br/> <textarea 
                     rows="4" 
                        cols="100" 
                        name="sponsorWhyInterested" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorWhyInterested}
                        /> 
                        {(!this.state.sponsorWhyInterested && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                        </div>

                    <button type="button" className="btn btn-info" onClick={this.checkAnswers} id="Submit Button">SUBMIT</button>
                </form>
    
            </div>
        </div>
        )
    }
}

export default FiveQuestionVideoLesson;