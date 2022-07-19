import { StyleSheet } from 'react-native'
import colors from './colors'

const notificationStyles = StyleSheet.create({

  defaultShadow: {
    elevation: 1,
    shadowColor: colors.BORDER_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 4.8,
    shadowRadius: 0.8
  },
 
  container: {
    backgroundColor: colors.LIGHT_WHITE_BACKGROUND,
    paddingBottom: 5,
   
  },
  gestureContainer: {
    flex: 1
  },

  snackBarContainer: {
    backgroundColor: colors.WHITE,
    borderBottomColor: colors.TEXT_COLOR,
    borderBottomWidth: 0,
    marginHorizontal: 0,
    minHeight: 80,
    padding: 0,
  },
  snackBarDesc: {
    backgroundColor: colors.TRANSPARENT,
    color: colors.TEXT_COLOR,
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    paddingLeft: 10,
    
  },
  snackBarMessageContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingVertical: 6,
  },
  snackBarStatuserror: {
    borderBottomColor: colors.DANGER
  },
  snackBarStatusinfo: {
    borderBottomColor: colors.BLUE
  },
  snackBarStatussuccess: {
    borderBottomColor: colors.SUCCESS
  },
  snackBarStatuswarning: {
    borderBottomColor: colors.WARNING
  },
  snackBarTitle: {
    backgroundColor: colors.TRANSPARENT_WHITE,
    borderRadius: 4,
    color: colors.TEXT_COLOR,
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 4
  }
})

export default notificationStyles