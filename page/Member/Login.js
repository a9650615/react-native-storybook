import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { action } from '@storybook/addon-actions';
import { BUTTON, BUTTON_TEXT } from 'defaultStyle'

const style = {
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fcd194'
  },
  title: {
    ...BUTTON_TEXT,
    fontSize: 50,
    marginTop: 140,
    marginBottom: 104,
    flex: 1
  },
  btnView: {
    flex: 3
  },
  blackBtn: {
    ...BUTTON,
    backgroundColor: '#000000'
  },
  blackBtnText: {
    ...BUTTON_TEXT,
    color: '#ffffff'
  },
  hasMember: {
    ...BUTTON_TEXT,
    fontSize: 12,
    fontWeight: "300",
    color: "#5d5e5d",
    marginBottom: 3
  },
  guest: {
    marginTop: 32
  }
}

export default class Login extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <Text style={style.title}>PopDaily</Text>
        <View style={style.btnView}>
          <TouchableOpacity style={style.blackBtn} onPress={this.props.toRegister}>
            <Text style={style.blackBtnText}>建立帳戶</Text>
          </TouchableOpacity>
          <Text style={style.hasMember}>已經是使用者了嗎？</Text>
          <TouchableOpacity style={BUTTON}>
            <Text style={BUTTON_TEXT}>登入</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.guest}>
            <Text style={BUTTON_TEXT}>先以訪客身分參觀</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
