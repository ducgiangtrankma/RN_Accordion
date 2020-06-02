/*
  Custom by DucGiangKma using 'react-native-collasible' lib
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
const contents = 'Show content or custom contetn FlatList ....';
const data = [
  {
    title: 'Title 1',
    content: contents,
  },
  {
    title: 'Title 2',
    content: contents,
  },
  {
    title: 'Title 3',
    content: contents,
  },
  {
    title: 'Title 4',
    content: contents,
  },
];
const Example = () => {
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [activeSections, setActiveSections] = useState([]);
  const renderHeader = (section, _, isActive) => {
    return (
      <View
        style={[
          styles.header,
          {
            borderBottomRightRadius: isActive ? 0 : 8,
            borderBottomLeftRadius: isActive ? 0 : 8,
          },
        ]}>
        <Text> {section.title} </Text>
        {isActive ? (
          <Image source={require('./acssets/up-arrow.png')} />
        ) : (
          <Image source={require('./acssets/down-arrow.png')} />
        )}
      </View>
    );
  };
  const renderContent = (section, _, isActive) => {
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text> {section.content} </Text>
      </View>
    );
  };
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.multipleToggle}>
          <Text style={styles.multipleToggle__title}>Multiple SelectItem</Text>
          <Switch
            value={multipleSelect}
            onValueChange={(value) => setMultipleSelect(value)}
          />
        </View>
        <Accordion
          activeSections={activeSections}
          sections={data}
          touchableComponent={TouchableOpacity}
          expandMultiple={multipleSelect}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    padding: 16,
  },
  multipleToggle__title: {
    marginTop: 20,
    marginBottom: 20,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  header: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    padding: 8,
  },
  active: {},
  inactive: {},
});
export default Example;
