import React from 'react'
import styles from './styles'
import {View, Text} from '@react-pdf/renderer'
import {formatTimestamp} from "../../helpers";

const Educations = ({educations}) => {
  return (
    <View style={styles.educations}>
      <Text style={styles.section_title}>Educations</Text>

      {educations?.map((education, index) => {
        return <React.Fragment key={index}>
          {index ? <View style={styles.education_line}/> : null}

          <View key={index} style={styles.education}>
            {education.name ? <Text style={styles.education__name}>{education.name}</Text> : null}
            {education.school ? <Text style={styles.education__school}>{education.school}</Text> : null}
            {education.location ? <Text style={styles.education__location}>{education.location}</Text> : null}
            <View style={styles.education__date_wrap}>
              {education.start ? <Text style={styles.education__start}>{formatTimestamp(education.start)}</Text> : null}
              {education.end ? <Text style={styles.education__end}>{formatTimestamp(education.end)}</Text> : null}
            </View>
          </View>
        </React.Fragment>

      })}


    </View>
  )
}

export default Educations