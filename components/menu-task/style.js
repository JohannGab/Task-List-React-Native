import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const style = StyleSheet.create({
    buttonChangeStatus: { backgroundColor: APP_COLORS.primaryAction },
        buttonDelete: { backgroundColor: 'red' },
        modal: {
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'space-around'
},
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
},
    buttonClose: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: -20
},
    textView: {
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
},
    textViewButton: {
        fontSize: 20,
        color: APP_COLORS.primaryAction 
}

});