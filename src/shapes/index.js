import * as yup from 'yup';

const userShape = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

const songShape = yup.object().shape({
    title: yup.string().required(),
    duration: yup.string().required(),
    releasedDate: yup.date().default(()=> new Date()),
    genres: yup.array(),
});

export {
    userShape,
    songShape
}