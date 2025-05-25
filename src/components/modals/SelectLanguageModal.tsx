import { useSettingsStore } from '@/stores';
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

const LANGUAGES = [
  { code: 'en', label: 'English 🇬🇧' },
  { code: 'ua', label: 'Українська 🇺🇦' },
];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const SelectLanguageModal = ({ visible, onClose }: Props) => {
  const { language, updateLanguage } = useSettingsStore();

  const handleSelect = (lang: 'en' | 'ua') => {
    updateLanguage(lang);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Language</Text>
          {LANGUAGES.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              onPress={() => handleSelect(lang.code as 'en' | 'ua')}
              style={[
                styles.option,
                language === lang.code && styles.selectedOption,
              ]}
            >
              <Text style={styles.text}>{lang.label}</Text>
            </TouchableOpacity>
          ))}
          <Pressable onPress={onClose}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  option: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#d0e8ff',
  },
  text: {
    fontSize: 16,
  },
  close: {
    textAlign: 'center',
    color: '#007bff',
    marginTop: 10,
    fontSize: 16,
  },
});
