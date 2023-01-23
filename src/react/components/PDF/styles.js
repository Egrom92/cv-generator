import { StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#084c41',
    padding: 0
  },
  section_right: {
    padding: 10,
    paddingTop: 20,
    width: '70%',
    marginLeft: 'auto',
    backgroundColor: '#fff',
  },
  section_title: {
    fontSize: 25,
    marginBottom: 30,
  },



  educations: {

  },

  education: {
    marginBottom: 30,

  },
  education__name: {
    fontSize: 20,
    marginBottom: 5,
  },
  education__school: {
    fontSize: 16,
    marginBottom: 5,
  },
  education__location: {
    fontSize: 14,
    marginBottom: 5,
  },
  education__date_wrap: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  education__start: {
    marginRight: 20,
  },
  education__end: {
  },
  education__description: {
    fontSize: 14,
    marginTop: 20,
  },
  education_line: {
    marginBottom: 10,
    marginTop: 10,
    width: '10%',
    height: '1px',
    backgroundColor: '#000',
    textAlign: 'center',
  },



  skills: {
    marginBottom: 30,
  },
  skills_wrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  skill: {
    textTransform: 'uppercase',
    marginRight: 10,
  },



  works: {

  },
  work: {

  },
  work__position: {
    fontSize: 20,
    marginBottom: 5,
  },
  work__company: {
    fontSize: 16,
    marginBottom: 5,
  },
  work__location: {
    fontSize: 14,
    marginBottom: 5,
  },
  work__date_wrap: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  work__start: {
    marginRight: 20,
  },
  work__end: {

  },
  work__description: {
    fontSize: 14,
    marginTop: 20,
  },
  work_line: {
    marginBottom: 10,
    marginTop: 10,
    width: '10%',
    height: '1px',
    backgroundColor: '#000',
    textAlign: 'center',
  },







  section_left: {
    width: '30%',
    height: '100%',

  },
  profile_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20',
    marginBottom: '20px',
    fontFamily: 'Helvetica-Bold',

  },
  name_text: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: '900',
    color: 'white',
  },
  profile_point: {
    color: '#d1d5db',
    fontSize: '11px',
    marginBottom: '5px',
  },
  profile_line: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '10%',
    height: '1px',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
  profile_section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})