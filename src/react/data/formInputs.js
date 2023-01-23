const formInputs = {
  profile: {
    name: '',
    surname: '',
    email: '',
    profession: '',
    phone: '',
    location: '',
    links: [''],
    social: {
      facebook: '',
      instagram: ''
    },
  },
  educations: [{
    name: '',
    school: '',
    location: '',
    start: '',
    end: '',
  }]
  ,
  skills: [''],
  works: [{
    position: '',
    company: '',
    location: '',
    start: '',
    end: '',
  }]
}

const testFormInputs = {
  profile: {
    name: 'Ivan',
    surname: 'Roomes',
    email: 'roomes@gmail.com',
    profession: 'Front End Developer',
    phone: '+37258651511',
    location: 'Tallinn',
    links: ['github.com', 'gitlab.com'],
    social: {
      facebook: 'facebook.com',
      instagram: 'instagram.com'
    },
  },
  educations: [{
    name: 'Automehanik',
    school: 'Tallina mehaanika kool',
    location: 'Tallinn',
    start: 1674597600000,
    end: 1674684000000,
  }, {
    name: 'IT spetsialist',
    school: 'Tallina polutehnikum',
    location: 'Tallinn',
    start: 1674597600000,
    end: 1674684000000,
  }],
  skills: ['Html', 'css', 'Javascript', 'react'],
  works: [{
    position: 'Web developer',
    company: 'Web company',
    location: 'Riga',
    start: 1674597600000,
    end: 1674684000000,
  }, {
    position: 'Front end developer',
    company: 'Front end company',
    location: 'Helsinki',
    start: 1674597600000,
    end: 1674684000000,
  }],
}

export default formInputs
