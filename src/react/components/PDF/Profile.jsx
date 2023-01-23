import React from "react";
import {Text, View} from "@react-pdf/renderer";
import styles from "./styles";

const Profile = ({profile}) => {
  return (
    <View style={styles.profile_container} fixed>

      <View style={styles.profile_section}>
        {profile.name ? <Text style={styles.name_text}>{profile.name}</Text> : null}
        {profile.surname ? <Text style={styles.name_text}>{profile.surname}</Text> : null}
      </View>

      <View style={styles.profile_line}/>

      <View style={styles.profile_section}>
        {profile.profession ? <Text style={styles.profile_point}>{profile.profession}</Text> : null}
      </View>

      <View style={styles.profile_line}/>

      <View style={styles.profile_section}>
        {profile.phone ? <Text style={styles.profile_point}>{profile.phone}</Text> : null}
        {profile.email ? <Text style={styles.profile_point}>{profile.email}</Text> : null}
        {profile.location ? <Text style={styles.profile_point}>{profile.location}</Text> : null}
      </View>

      <View style={styles.profile_line}/>

      <View style={styles.profile_section}>
        {profile.social.facebook ? <Text style={styles.profile_point}>{profile.social.facebook}</Text> : null}
        {profile.social.instagram ? <Text style={styles.profile_point}>{profile.social.instagram}</Text> : null}
      </View>

      {profile.links[0] && <>
        <View style={styles.profile_line}/>

        <View style={styles.profile_section}>
          {profile.links.map((link, index) => <Text key={index} style={styles.profile_point}>{link}</Text>)}
        </View>
      </>}
    </View>
  )
}

export default Profile