// OriginModal.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image
} from 'react-native';

const OriginModal = ({ 
  isVisible, 
  origins, 
  selectedOrigin, 
  onSelectOrigin, 
  onClose,
  onConfirm
}) => {
  if (!isVisible) return null;
  
  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Выберите происхождение</Text>
        
        <ScrollView style={styles.originsList}>
          {origins.map(origin => (
            <TouchableOpacity
              key={origin.id}
              style={[
                styles.originItem,
                selectedOrigin?.id === origin.id && styles.selectedOriginItem
              ]}
              onPress={() => onSelectOrigin(origin)}
            >
              <Image source={origin.image} style={styles.originItemImage} resizeMode="contain" />
              <Text style={styles.originItemText}>{origin.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.modalButtons}>
          <TouchableOpacity 
            style={[styles.modalButton, styles.cancelButton]} 
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Отмена</Text>
          </TouchableOpacity>
          
          {selectedOrigin && (
            <TouchableOpacity 
              style={[styles.modalButton, styles.selectButton]} 
              onPress={onConfirm}
            >
              <Text style={styles.buttonText}>Выбрать</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#8B4513',
  },
  originsList: {
    maxHeight: '70%',
  },
  originItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedOriginItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  originItemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 5,
  },
  originItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 120,
  },
  selectButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OriginModal;