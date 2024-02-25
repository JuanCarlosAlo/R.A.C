import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const DESCRIPTION_CARDS = [
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Puedes cambiar o cancelar cuando quieras después de 12 meses',
        _id: uuidv4(),
        text: 'Mucho más flexible que un renting tradicional.',
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Entrega a domicilio gratuita',
        _id: uuidv4(),
        text: 'Te entregamos tu nuevo coche en casa, en tu oficina o donde tú quieras.',
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Contratación 100% online en pocos minutos',
        _id: uuidv4(),
        text: 'Hazte un REVEL fácilmente en pocos minutos.',
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Todo incluido en una cuota mensual',
        _id: uuidv4(),
        text: 'Seguro a todo riesgo, mantenimiento, asistencia, impuestos...',
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Compensamos el CO₂ de tu coche',
        _id: uuidv4(),
        text: 'Para que tu movilidad sea sostenible y respetuosa con el medio ambiente.',
    },
    {
        icon: require('../assets/images/banner.webp'),
        title: 'Flexibilidad asequible',
        _id: uuidv4(),
        text: 'Por fin una alternativa flexible un buen precio.',
    },
];
