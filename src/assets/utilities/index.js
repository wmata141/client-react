const validateCampoEmail = (email) => {
    if (!email) {
        return 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Email address is invalid';
    } else return ''
};

const validateCampo = (campo, name, size) => {
    if (!campo) {
        return `${name} is required`;
    } else if (campo.length < size) {
        return `${name} is to small`;
    } else return ''
};

const validateCampoRequired = (campo, name) => {
    if (!campo) {
        return `${name} is required`;
    } else return ''
};

export const validateEmail = (values) => {
    let errors = {};
    errors.email = validateCampoEmail(values.email)
    return errors;
};

export const validateEmailPassword = (values) => {
    let errors = {};

    errors.email = validateCampoEmail(values.email)
    errors.password = validateCampo(values.password, 'Password', 2)

    return errors;
};

export const validateRegistro = (values) => {
    let errors = {};

    errors.name = validateCampo(values.name, 'name', 2)
    errors.lastName = validateCampo(values.lastName, 'lastName', 2)
    errors.email = validateCampoEmail(values.email)
    errors.password = validateCampo(values.password, 'password', 2)

    errors.daySelected = validateCampoRequired(values.daySelected, 'Day')
    errors.monthSelected = validateCampoRequired(values.monthSelected, 'Month')
    errors.yearSelected = validateCampoRequired(values.yearSelected, 'Year')

    if ((values.daySelected === 30 || values.daySelected === 31) && values.monthSelected === 2) {
        errors.daySelected = 'Error de Fecha';
        errors.monthSelected = 'Error de Fecha';
    }

    return errors;
};

export const validateRegistroCampo = (clave, valor, errors) => {
    switch (clave) {
        case 'name':
            errors.name = validateCampo(valor, 'name', 2)
            return errors;

        case 'lastName':
            errors.lastName = validateCampo(valor, 'lastName', 2)
            return errors;

        case 'email':
            errors.email = validateCampoEmail(valor);
            return errors;

        case 'password':
            errors.password = validateCampo(valor, 'Password', 2)
            return errors;

        case 'daySelected':
            errors.daySelected = validateCampoRequired(valor, 'Day', 2)
            return errors;

        case 'monthSelected':
            errors.monthSelected = validateCampoRequired(valor, 'Month', 2)
            return errors;

        case 'yearSelected':
            errors.yearSelected = validateCampoRequired(valor, 'Year', 2)
            return errors;

        default:
            return errors;
    }
}

export const reloadData = () => {
    const today = new Date();
    const yearToday = today.getFullYear();

    let day = []; let year = [];
    let month = [
        { id: 1, value: 'Ene' },
        { id: 2, value: 'Feb' },
        { id: 3, value: 'Mar' },
        { id: 4, value: 'Abr' },
        { id: 5, value: 'May' },
        { id: 6, value: 'Jun' },
        { id: 7, value: 'Jul' },
        { id: 8, value: 'Ago' },
        { id: 9, value: 'Sep' },
        { id: 10, value: 'Oct' },
        { id: 11, value: 'Nov' },
        { id: 12, value: 'Dic'}
    ]

    for (let i = 1; i <= 31; i++) {
        day.push(i)
    }
    for (let i = yearToday; i > yearToday - 100; i--) {
        year.push(i)
    }

    return { day, month, year }
}

export const withoutValues = (object) => {
    for (const property in object) {
        if (object[property] !== '') {
            return false
        }
    }
    return true
}

export const withValues = (object) => {
    for (const property in object) {
        if (object[property] === '') {
            return false
        }
    }
    return true
}

export const MayorEdad = (day, month, year) => {
    // const today = new Date();
    // const yearToday = today.getFullYear();
    // const monthToday = today.getMonth();
    // const dayToday = today.getDay();

    // if (year < yearToday - 18) {
    //     return false
    // } else {
    //     if ((year === yearToday - 18) && (month < monthToday)) {
    //         return false
    //     } else {
    //         if ((month === monthToday) && (day < dayToday)) {
    //             return false
    //         }
    //     }
    // }
    return true
}