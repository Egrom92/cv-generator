import React, {useEffect, useState} from 'react'
import styles from './styles'
import {View} from '@react-pdf/renderer'
import {Educations, Works, Skills} from "./index";
import {hasNonEmptyValue} from "../../helpers";


const RightSection = ({educations, skills, works}) => {

  const [hasEducations, setHasEducations] = useState(false);
  const [hasSkills, setHasSkills] = useState(false);
  const [hasWorks, setHasWorks] = useState(false);

  useEffect(() => {
    setHasWorks(hasNonEmptyValue(works));
  }, [works]);
  useEffect(() => {
    setHasSkills(hasNonEmptyValue(skills));
  }, [skills]);
  useEffect(() => {
    setHasEducations(hasNonEmptyValue(educations));
  }, [educations]);

  return (
    <View style={styles.section_right} wrap>
      <View style={{width: '100%', height: 30}} fixed/>

      {hasEducations ? <Educations educations={educations}/> : null}
      {hasSkills ? <Skills skills={skills}/> : null}
      {hasWorks ? <Works works={works}/> : null}

      <View style={{width: '100%', height: 30}} fixed/>
    </View>
  )
}

export default RightSection