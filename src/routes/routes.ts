export const getBaseUrl = () => '/';

const main = {
    newUser: {
        path: `${getBaseUrl()}/NewUser`,
    },
    login: {
        path: `${getBaseUrl()}/Login`,
    },
};

export const routes = {
    main,
};
