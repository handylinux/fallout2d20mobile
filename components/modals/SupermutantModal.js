import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
export const traitConfig = {
  originName: 'Супермутант',
  modalType: 'info'
};

const SupermutantModal = ({ 
  visible, 
  onSelect, 
  onCancel 
}) => {
  const trait = {
    name: "Принудительная эволюция",
    description: "Мощный мутант с огромной силой, но ограниченными умственными способностями",
    forcedSkills: ['Ближний бой', 'Тяжелое оружие', 'Выживание'],
    extraSkills: 1,
    attributeModifiers: {
      'СИЛ': +2,
      'ВЫН': +2,
      'ХАР': -2,
      'ИНТ': -2
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Супермутант</Text>
          <Text style={styles.traitName}>{trait.name}</Text>
          
          <Text style={styles.modalText}>{trait.description}</Text>
          <Text style={styles.modalText}>Атрибуты: СИЛ +2, ВЫН +2, ХАР -2, ИНТ -2</Text>

          {trait.forcedSkills?.map(skill => (
            <TouchableOpacity
              key={skill}
              style={[styles.modalButton, styles.skillOption]}
              onPress={() => onSelect(skill)}
            >
              <Text style={styles.buttonText}>{skill}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={[styles.modalButton, styles.cancelButton]}
            onPress={onCancel}
          >
            <Text style={styles.buttonText}>Отмена</Text>
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
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  skillOption: {
    backgroundColor: '#2196F3',
  },
  cancelButton: {
    backgroundColor: '#9E9E9E',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SupermutantModal;