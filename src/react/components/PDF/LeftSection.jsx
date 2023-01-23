import React, {useState, useEffect} from 'react'
import styles from './styles'
import {View, Text} from '@react-pdf/renderer'
import {hasNonEmptyValue} from "../../helpers";
import {Profile} from "./index";

const LeftSection = ({profile}) => {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    setHasProfile(hasNonEmptyValue(profile));
  }, [profile]);

  return hasProfile ? <View style={styles.section_left}><Profile profile={profile}/></View> : null
}

export default LeftSection