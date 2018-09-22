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
        title: "",
        linkToVideo: "",
        question1PauseTime: "",
        question1: "",
        question1AnswerA: "",
        question1AnswerB: "",
        question1AnswerC: "",
        question1AnswerD: "",
        question1CorrectAnswer: "",
        submitFlag: false,
        redirect: false
    };

    inputFieldValidation() {
        if (!this.state.title||!this.state.linkToVideo||!this.state.question1PauseTime||!this.state.question1||!this.state.question1AnswerA||!this.state.question1AnswerB||!this.state.question1AnswerC||!this.state.question1AnswerD||!this.state.question1CorrectAnswer)
        {
            return(false);
            console.log(false);
        }
        else {
            return(true);
            console.log(true);
        }
    }

    checkAnswers = (event) => {
        // console.log("The entire state: " , this.state);
        event.preventDefault();
        this.setState({
            submitFlag : true
        });
        let validationFlag = this.inputFieldValidation();
        if (validationFlag){
            () => {
                API
                .saveFQVL(
                    this.state.title,
                    this.state.linkToVideo,
                    this.state.question1PauseTime,
                    this.state.question1,
                    this.state.question1AnswerA,
                    this.state.question1AnswerB,
                    this.state.question1AnswerC,
                    this.state.question1AnswerD,
                    this.state.question1CorrectAnswer
                )
                .then(res => {
                this.setState({
                    title: "",
                    linkToVideo: "",
                    question1PauseTime: "",
                    question1: "",
                    question1AnswerA: "",
                    question1AnswerB: "",
                    question1AnswerC: "",
                    question1AnswerD: "",
                    question1CorrectAnswer: "",
                    redirect: true
                });

                }).catch(err => {
                console.log(err);
                })
            }
            }
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
                    Lesson Title: <br/> <input 
                        type="text" 
                        name="title" 
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        /> 
                         {(!this.state.title && this.state.submitFlag ) ? <div className="error-text">Title required</div> : " "}
                        </div>
                        <div className="form-group">
                    Link to Video: <br/>
                     <input 
                        type="text" 
                        name="linkToVideo"
                        onChange={this.handleInputChange}
                        value={this.state.linkToVideo} 
                        /> 
                       {(!this.state.linkToVideo && this.state.submitFlag ) ? <div className="error-text">Link to Video required</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1 Pause Time: <br/> <input
                        type="text" 
                        name="question1PauseTime" 
                        onChange={this.handleInputChange}
                        value={this.state.question1PauseTime}
                        /> 
                        {(!this.state.question1PauseTime && this.state.submitFlag ) ? <div className="error-text">Pause Time required</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1: <br/> <input 
                        type="email" 
                        name="question1" 
                        onChange={this.handleInputChange}
                        value={this.state.question1}
                        />
                        {(!this.state.question1 && this.state.submitFlag ) ? <div className="error-text">Question 1 required</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1 Answer A: <br/> <input 
                        type="text" 
                        name="question1AnswerA" 
                        onChange={this.handleInputChange}
                        value={this.state.question1AnswerA}
                        /> 
                        {(!this.state.question1AnswerA && this.state.submitFlag ) ? <div className="error-text">Question 1 answer A required</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1 Answer B: <br/> <textarea 
                        rows="4" 
                        cols="100" 
                        name="question1AnswerB" 
                        onChange={this.handleInputChange}
                        value={this.state.question1AnswerB}
                        /> 
                        {(!this.state.question1AnswerB && this.state.submitFlag ) ? <div className="error-text">Question 1 answer B requried</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1 Answer C: <br/> <textarea
                        rows="4" 
                        cols="100" 
                        name="question1AnswerC" 
                        onChange={this.handleInputChange}
                        value={this.state.question1AnswerC}
                        /> 
                        {(!this.state.question1AnswerC && this.state.submitFlag ) ? <div className="error-text">Question 1 answer C required</div> : " "}
                        </div>
                        <div className="form-group">
                    Question 1 Answer D: <br/> <textarea
                        rows="4" 
                        cols="100" 
                        name="question1AnswerD" 
                        onChange={this.handleInputChange}
                        value={this.state.question1AnswerD}
                        /> 
                        {(!this.state.question1AnswerD && this.state.submitFlag ) ? <div className="error-text">Question 1 answer D required</div> : " "}
                        </div>
                        <div className="form-group">
                        {/* Make these radio buttons later */}
                    Question 1 Correct Answer: <br/> <textarea
                        rows="4" 
                        cols="100" 
                        name="question1CorrectAnswer" 
                        onChange={this.handleInputChange}
                        value={this.state.question1CorrectAnswer}
                        /> 
                        {(!this.state.question1CorrectAnswer && this.state.submitFlag ) ? <div className="error-text">Question 1 correct answer required</div> : " "}
                        </div>
                        

                    <button type="button" className="btn btn-info" onClick={this.checkAnswers} id="Submit Button">SUBMIT</button>
                </form>
    
            </div>
        </div>
        )
    }
}

export default FiveQuestionVideoLesson;