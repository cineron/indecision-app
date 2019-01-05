export const isAdult = (age) => {
    return (age >= 18);
};

const canDrink = (age) => {
    return (age >+ 21);
};

const isSenior = (age) => age > 64;

export { canDrink, isSenior as default };
