import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { COLORS } from './colors';
import { ALL_BRANDS } from './allBrands';

export const BANNER_SECTION = {
    title: 'No compres coche. Hazte un R.A.C',
    text: `Suscríbete a un coche con todo incluido. Di adiós a las largas permanencias. Entrega a domicilio. Prueba 15 días sin compromiso.Conducción neutra de CO₂.`,
};

export const SECTIONS = [
    {
        title: '¿Qué es R.A.C?',
        text: `Con R.A.C puedes tener un coche por suscripción con todo incluido y disfrutar de la manera más inteligente, económica y flexible de un coche sin necesidad de comprarlo. Sólo tendrás que conducir. Del resto nos encargamos nosotros.`,
        _id: uuidv4(),
        button: true,
    },
    {
        title: 'Todo incluido en una cuota mensual',
        text: `Sin entrada y sin sorpresas. Con R.A.C paga mes a mes una cuota mensual que incluye todo lo que necesitas para disfrutar de tu coche.`,
        _id: uuidv4(),
        background: COLORS.PRIMARY,
        color: COLORS.WHITE,
    },
    {
        title: '¿Cómo funciona R.A.C?',
        _id: uuidv4(),
    },
    {
        title: 'Elige tu coche entre las mejores marcas',
        _id: uuidv4(),
        icons: ALL_BRANDS.map((brand) => ({
            _id: brand._id,
            img: brand.img,
        })),
    },
];
