import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ModalButton from './ModalButton';

function GoalModal({ isVisible, onClose, goalID, remove }) {

    function removeGoal() {
        remove(goalID);
        onClose();
    }

    return (
        <Modal style={styles.modal} visible={isVisible} animationType="slide" transparent={true}>
            <View style={styles.closeContainer}>
                <Pressable style={styles.closeArea} onPress={onClose} />
            </View>
            <View style={styles.contentContainer}>
                <ModalButton onPress={removeGoal}>Delete</ModalButton>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {

    },
    closeContainer: {
        flex: 1,
    },
    closeArea: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 32,
        paddingVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#20bbff",
        borderRightColor: "#20bbff",
        borderLeftColor: "#20bbff",
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
});

export default GoalModal;