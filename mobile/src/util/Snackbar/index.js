import Snackbar from 'react-native-snackbar';

export function showSnackbar(message, type) {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    action: {
      title: 'DISMISS',
      color: type === 'error' ? 'red' : 'green',
    },
    color: '#FFF',
  });
}
