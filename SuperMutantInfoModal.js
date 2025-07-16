import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const SuperMutantInfoModal = ({ 
  visible, 
  trait, 
  onClose 
}) => {
  if (!trait || trait.origin !== 'Супермутант') return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Особенность: {trait.origin}</Text>
          
          {trait.description && (
            <Text style={styles.modalText}>{trait.description}</Text>
          )}

                    <TouchableOpacity
            style={[styles.modalButton, styles.closeButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Понятно</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#ecf0f1',
    textAlign: 'center',
  },
  infoSection: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#ecf0f1',
    marginBottom: 5,
  },
  modalButton: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuperMutantInfoModal;