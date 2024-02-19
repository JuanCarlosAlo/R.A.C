import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

export const SPECS_CARDS = [
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Seguro a todo riesgo',
        _id: uuid.v4(),
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Asistencia',
        _id: uuid.v4(),
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Mantenimiento',
        _id: uuid.v4(),
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Impuestos',
        _id: uuid.v4(),
    },
];
