/**
 * @providesModule defaultStyle
 * @flow
 */

 /**
  * Environment Styles
  */

  export const BUTTON = {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
    minWidth: 166,
    flexDirection: 'row',
    alignSelf: 'center',
    minHeight: 35,
    justifyContent: 'center'
  }

  export const BUTTON_TEXT = {
    justifyContent:'center',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8
  }

  export const BUTTON_DISABLED = {
    ...BUTTON,
    backgroundColor: "#e5e5e5",
    borderWidth: 0,
    marginTop: 99
  }

  export const TEXT_INPUT = {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderColor: "#5d5e5d",
    marginTop: 16,
    padding: 8,
    textAlign: 'center'
  }