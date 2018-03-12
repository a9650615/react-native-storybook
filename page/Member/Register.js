import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { action } from '@storybook/addon-actions'
import { BUTTON, BUTTON_DISABLED, BUTTON_TEXT, TEXT_INPUT } from 'defaultStyle'

const style = {
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    maxWidth: 289,
    alignSelf: 'center'
  },
  fbBtn: {
    ...BUTTON,
    backgroundColor: "#4267b2",
    borderColor: "#4267b2",
    marginTop: 23,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: 188
  },
  fbBtnText: {
    ...BUTTON_TEXT,
    color: "#ffffff"
  },
  googleBtn: {
    ...BUTTON,
    marginTop: 17,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: 188
  },
  icon: {
    marginTop: 8,
    marginRight: 6,
    width: 19,
    alignSelf: 'flex-start'
  },
  registerView: {
    marginTop: 32
  },
  or_text: {
    ...BUTTON_TEXT,
    fontSize: 12,
    fontWeight: "300",
    color: "#5d5e5d",
    marginBottom: 3
  },
  nextText: {
    ...BUTTON_TEXT,
    color: '#fff'
  }
}

export default class Login extends React.Component {
  render() {
    return (
      <View style={style.view}>
        <TouchableOpacity style={style.fbBtn}>
          <Image style={style.icon} source={require('../../resource/social/googleLogin.png')}/>
          <Text style={style.fbBtnText}>Facebook 帳戶登入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.googleBtn}>
          <Image style={style.icon} source={require('../../resource/social/googleLogin.png')}/>
          <Text style={BUTTON_TEXT}>Google 帳戶登入</Text>
        </TouchableOpacity>
        <View style={style.registerView}>
          <Text style={style.or_text}>或者</Text>
          <TextInput placeholder="電子郵箱" underlineColorAndroid="transparent" style={TEXT_INPUT} />
          <TextInput placeholder="密碼" underlineColorAndroid="transparent" style={TEXT_INPUT} />
          <TouchableOpacity style={BUTTON_DISABLED}>
            <Text style={style.nextText}>下一步</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
