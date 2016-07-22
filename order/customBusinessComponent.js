import React, { Component , PropTypes } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import CustomInput from './customTextInput';
import SelectButton from './customSelectButton';
import CustomButton from '../CustomButton';

const _window = Dimensions.get('window');

const SectionHeader = () => {
    return (
        <View style={styles.sectionHeaderStyle}/>
    )
}

const DescribelLabel = () => {
    return (
        <Text style={styles.describelLabelStyle}>
            本商品会通过快递寄送给您。若选择省、市时没有您所在的读取，说明快递无法配送。
        </Text>
    )
}

const Input = ({placeholder}) => {
    return (
        <CustomInput
            placeholder={placeholder}
            clearButtonMode='while-editing'
            onChangeText={(text) => {
            }}
            style={styles.inputStyle}
        />
    )
}
const AddressSelect = () => {
    let defaultTexts = ['省', '市', '区/县'];
    let buttons = [];
    defaultTexts.forEach((text) => {
        buttons.push((
            <SelectButton
                key={`title${text}`}
                defaultText={text}
                text=''
                style={{width: 80, height: 44}}
                onPress={() => {
                    alert('选择: ' + text);
                }}
            />
        ))
    })
    return (
        <View style={styles.addressSelectStyle}>
            {buttons}
        </View>
    )
}

const CommitButtom = () => {
    return (
        <CustomButton
            viewStyle={styles.commitButtonViewStyle}
            textStyle={styles.commitButtonTextStyle}
            onPress={()=>{}}
            title='提交'
        />
    )
}

const styles = StyleSheet.create({
    sectionHeaderStyle: {
        height: 10,
        backgroundColor: '#e9e9e9',
        borderColor: '#c1c1c1',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    describelLabelStyle: {
        marginTop: 20,
        lineHeight: 17,
        marginLeft: 14,
        marginRight: 14,
        fontSize: 13,
        color: 'gray',
    },
    inputStyle: {
        height: 44,
        marginTop: 20,
        marginLeft: 14,
        marginRight: 14,
    },
    addressSelectStyle: {
        marginTop: 20,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'space-between',
        paddingRight: 14,
        paddingLeft: 14,
    },
    commitButtonViewStyle: {
        marginLeft: (_window.width - 200)/2,
        marginTop: 20,
        backgroundColor: 'black',
        height: 44,
        width: 200,
        borderRadius: 22,
    },
    commitButtonTextStyle: {
        fontSize: 18,
        color: 'white',
    }
})

export { SectionHeader, DescribelLabel, Input, AddressSelect, CommitButtom };
