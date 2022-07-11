import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import styles from './styles';
export default Tooltip = ({anchorname, iconStyle, visible, hideMenu, showMenu, item1, item2, item3, item4}) => {
    return (
        <Menu
          visible={visible}
          anchor={<Text onPress={showMenu}>{anchorname}</Text>}
          onRequestClose={hideMenu}
        >
          {/* <MenuItem style={{height: 40}} onPress={hideMenu}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <MaterialIcon name={'search'} style={[styles.icon, iconStyle, {top: 2}]} size={25} />
                <Text style={{fontSize: 16, color: '#000'}}>{item1}</Text>
            </View> 
          </MenuItem> */}
          <MenuItem onPress={hideMenu}><Text style={{fontSize: 16, color: '#000'}}>{item1}</Text></MenuItem>
          <MenuItem onPress={hideMenu}><Text style={{fontSize: 16, color: '#000'}}>{item2}</Text></MenuItem>
          <MenuItem disabled><Text style={{fontSize: 16, color: '#000'}}>{item3}</Text></MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}><Text style={{fontSize: 16, color: '#000'}}>{item4}</Text></MenuItem>
        </Menu>
  );
}

