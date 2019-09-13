import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import { style } from './style';

const MenuTask = ({isVisible, onDisaspearCallBack, onDeleteCallBack, onChangeStatusCallBack}) => (
    <Modal 
    isVisible={isVisible}
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    animationInTiming={1000}
    animationOuTiming={1000}
    backdropTransitionIntiming={1000}
    backdropTransitionOutiming={1000}
    >
    <View style={style.modal}>
    <View style={style.buttonClose}>
        <TouchableWithoutFeedback onPress={()=> onDisaspearCallBack('')}>
            <Text style={style.textViewButton}>X</Text>
        </TouchableWithoutFeedback>
    </View>
    <View style={style.textView}>
        <Text>Que souhaitez vous faire sur la tâche</Text>
    </View>
    <View style={style.buttonView}>
        <Button 
        buttonStyle={style.buttonDelete}
        title= "Supprimer"
        onPress={() => onDeleteCallBack()} 
        />
        <Button
        buttonStyle={style.buttonChangeStatus}
        title= "Changer status"
        onPress={() => onChangeStatusCallBack()}
        />
    </View>
    </View>
    </Modal>
);

export default MenuTask;