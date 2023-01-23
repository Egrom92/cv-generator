import React from 'react'
import {Document, Page, PDFViewer, PDFDownloadLink} from '@react-pdf/renderer'
import {RightSection, LeftSection} from './index'
import styles from './styles'


import {useSelector} from "react-redux";


const PDF = () => {
  const {formInputs} = useSelector(state => state.step)


  return (
    <div style={{flexGrow: 1, height: '500px', width: '432px'}}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={formInputs.profile}
                  educations={formInputs.educations}
                  skills={formInputs.skills}
                  works={formInputs.works}/>
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={formInputs.profile}/>}
        fileName='CV.pdf'
      >
        {({loading}) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const Template = ({profile, ...props}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <LeftSection profile={profile}/>
        <RightSection {...props}/>
        {profile.about ? <RightSection about={profile.about}/> : null}
      </Page>
    </Document>
  )
}

export default PDF