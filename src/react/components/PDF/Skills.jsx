import React from 'react'
import styles from './styles'
import {View, Text} from '@react-pdf/renderer'

const Skills = ({skills}) => {

  return (
    <View style={styles.skills}>
      <Text style={styles.section_title}>Skills</Text>

      {skills ? <View style={styles.skills_wrap}>
        <Text style={styles.skill}>{skills?.join(', ')}</Text>
      </View> : null}
    </View>
  )
}

export default Skills
