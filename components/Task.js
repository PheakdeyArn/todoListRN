import React,  { useState } from "react";
import { CheckBox, StyleSheet, Text, View } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';


const Task = (props) => {

    // const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = useState(props.isDone);


    return (
        <View style={styles.item}>      
        <View style={styles.itemLeft}>

            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text style={styles.itemText}>{props.title}</Text>
        </View>
        {/* <View style={styles.circular}></View> */}

        <View style={styles.btnContainer}>
            <Button icon="delete" onPress={async() => props.onRemove()}></Button>
        </View>
          
        </View>
    );
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },

      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },

      square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },

      itemText: {
        maxWidth: '80%',
      },

      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },

      btnContainer: {
  
      }
});

export default Task;