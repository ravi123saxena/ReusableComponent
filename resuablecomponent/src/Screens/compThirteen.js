
import HeaderBar from '../Components/Header';
import React, { useRef } from "react";
import { Button, View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CustomActionSheet from '../Components/ActionSheet'
import MDIcon from "react-native-vector-icons/MaterialIcons";

export default CompThirteen = ({ navigation }) => {
  const refRBSheet = useRef();
  let lists = [
    {
      "icon": "photo-camera",
      "label": "Take photo"
    },
    {
      "icon": "photo",
      "label": "Choose image"
    },
    {
      "icon": "brush",
      "label": "Drawing"
    },
    {
      "icon": "mic",
      "label": "Recording"
    },
    {
      "icon": "check-box",
      "label": "Checkboxes"
    }
  ]

  const renderItem = ({ item }) => {
    console.log(item) 
    return (
    <TouchableOpacity
      key={item.icon}
      style={styles.listButton}
      onPress={() => this.Standard.close()}
    >
      <MDIcon name={item.icon} style={styles.listIcon} />
      <Text style={styles.listLabel}>{item.label}</Text>
    </TouchableOpacity>)
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderBar
        leftIconName={'chevron-left'}
        text={'Home'}
        handleLeftIconPress={() => { navigation.goBack() }}
      />
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <CustomActionSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Create</Text>
          <FlatList
            data={lists}
            renderItem={renderItem}
            keyExtractor={item => item.icon}
          />
        </View>
      </CustomActionSheet >
    </View >
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 25
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666"
  },
  listButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  listIcon: {
    fontSize: 26,
    color: "#666",
    width: 60
  },
  listLabel: {
    fontSize: 16
  },
})
