import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (email, password) => {
    return axios.post('api/signup', {email: email, password: password});
  },
  // save prospective club sponsor's application and test score
  saveApplication: (sponsorFirstName, sponsorLastName, sponsorImageLink, sponsorEmail, sponsorRolePosition, sponsorAboutMe, sponsorAboutMySchool, sponsorWhyInterested, sponsorTestScore) => {
    return axios.post('/api/certification', {
      // selectedOption: selectedOption,
      sponsorFirstName: sponsorFirstName,
      sponsorLastName: sponsorLastName,
      sponsorImageLink: sponsorImageLink,
      sponsorEmail: sponsorEmail,
      sponsorRolePosition: sponsorRolePosition,
      sponsorAboutMe: sponsorAboutMe,
      sponsorAboutMySchool: sponsorAboutMySchool,
      sponsorWhyInterested: sponsorWhyInterested,
      sponsorTestScore: sponsorTestScore
    });
  },

    // save admin entry to create a new five question video lesson
    saveFQVL: (title, linkToVideo, question1PauseTime, question1, question1AnswerA, question1AnswerB, question1AnswerC, question1AnswerD, question1CorrectAnswer) => {
      return axios.post('/api/fivequestionvideolesson', {
       title: title,
       linkToVideo: linkToVideo,
       question1PauseTime: question1PauseTime,
       question1: question1,
       question1AnswerA: question1AnswerA,
       question1AnswerB: question1AnswerB,
       question1AnswerC: question1AnswerC, 
       question1AnswerD: question1AnswerD,
       question1CorrectAnswer: question1CorrectAnswer
      });
    },

  // forDomale: (sponsorFirstName) => {
  //   return axios.get('/api/certification', {sponsorFirstName: sponsorFirstName});
  // }
  forDomale: () => {
    return axios.get('/api/certification');
  },

  sendEmail: (data) => {
    return axios.post('/api/send', data);
  }
};
