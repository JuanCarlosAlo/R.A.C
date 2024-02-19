import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

export const WORKS_CARDS = [
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Elige tu coche y contrata tu renting 100% online',
        _id: uuid.v4(),
        text: 'Elige el coche que mejor se adapte a ti y completa el proceso de contratación de tu coche en muy pocos minutos.',
        img: require('../assets/images/banner.webp'),
        button: true,
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Te lo entregamos donde quieras',
        _id: uuid.v4(),
        text: 'Te entregamos tu nuevo coche en la puerta de tu casa, de tu trabajo o donde tú quieras.',
        img: require('../assets/images/banner.webp'),
        button: true,
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Disfruta la nueva forma de tener coche con REVEL',
        _id: uuid.v4(),
        text: 'En REVEL queremos que disfrutes conduciendo sin preocupaciones. Puedes cambiar de coche o finalizar tu renting cuando quieras a partir del primer año. Nosotros nos ocupamos de todo.',
        img: require('../assets/images/banner.webp'),
        button: true,
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Todo incluido en una cuota mensual',
        _id: uuid.v4(),
        text: 'Seguro a todo riesgo, mantenimiento, asistencia, impuestos...',
        img: require('../assets/images/banner.webp'),
        button: true,
    },
];
