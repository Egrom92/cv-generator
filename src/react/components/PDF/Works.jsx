import React from 'react'
import styles from './styles'
import {View, Text} from '@react-pdf/renderer'
import {formatTimestamp} from "../../helpers";

const Works = ({works}) => {
  return (
    <View style={styles.works}>
      <Text style={styles.section_title}>Work</Text>

      {works?.map((work, index) => {
        return <React.Fragment key={index}>
          {index ? <View style={styles.work_line}/> : null}
          <View key={index} style={styles.work}>
            {work.position ? <Text style={styles.work__position}>{work.position}</Text> : null}
            {work.company ? <Text style={styles.work__company}>{work.company}</Text> : null}
            {work.location ? <Text style={styles.work__location}>{work.location}</Text> : null}
            <View style={styles.work__date_wrap}>
              {work.start ? <Text style={styles.work__start}>{formatTimestamp(work.start)}</Text> : null}
              {work.end ? <Text style={styles.work__end}>{formatTimestamp(work.end)}</Text> : null}
            </View>

          </View>
          </React.Fragment>
      })}

    </View>

  )
}

export default Works
