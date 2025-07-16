import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  background: {
    flex: 1
  },
  container: {
    flex: 1
  },
  scrollContent: {
    padding: 12,
    paddingBottom: 20
  },
  header: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5a5a5a',
  },
  pressableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pressableTitle: {
    color: '#333',
    fontSize: 14,
    marginRight: 8,
  },
  pressableValue: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  placeholderText: {
    color: '#888',
    fontStyle: 'italic',
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  levelLabel: {
    color: '#333',
    fontSize: 14,
    marginRight: 8,
  },
  columnsContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  leftColumn: {
    width: '40%',
    marginRight: 8
  },
  rightColumn: {
    width: '60%'
  },
  section: {
    marginBottom: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5a5a5a',
  },
  sectionHeader: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  skillsCount: {
    color: '#d4af37',
    fontSize: 12,
  },
  derivedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  derivedTitle: {
    color: '#000',
    fontSize: 13
  },
  derivedValue: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13
  },
  luckRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  luckTitle: {
    color: '#000',
    fontSize: 13,
    maxWidth: '40%',
    lineHeight: 16,
  },
  luckValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  luckButton: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 2,
  },
  luckButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  disabledLuckButton: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
  },
  skillsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d4af37',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  skillsHeaderText: {
    color: '#d4af37',
    fontSize: 12,
    fontWeight: 'bold'
  },
  evenRow: {
    backgroundColor: '#fecc99'
  },
  oddRow: {
    backgroundColor: '#ffebcd'
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d4af37',
  },
  skillSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    backgroundColor: '#000'
  },
  checkboxForced: {
    backgroundColor: '#800000',
    borderColor: '#800000',
  },
  checkboxRequired: {
    borderColor: '#FF0000',
    borderWidth: 2,
  },
  skillName: {
    color: '#333',
    fontSize: 12,
    flexShrink: 1
  },
  skillNameSelected: {
    color: '#000',
    fontWeight: 'bold'
  },
  skillNameForced: {
    color: '#800000',
    fontWeight: 'bold',
  },
  skillNameRequired: {
    color: '#FF0000',
  },
  skillValue: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    minWidth: 40,
    textAlign: 'center',
  },
  compactCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  counterButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#000',
  },
  counterButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
  },
  disabledText: {
    color: '#ccc',
  },
  counterValue: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 4,
    minWidth: 20,
    textAlign: 'center',
  },
  imageSection: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5a5a5a',
    padding: 5,
    aspectRatio: 2 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 3
  },
  buttonsContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
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
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#9E9E9E',
  },
  confirmButton: {
    backgroundColor: '#f44336',
  },
});

export default styles;
