export const getSesionStorage = () => {
    const getSesionValue = sessionStorage.getItem('sesionNavValue');
    return getSesionValue ? getSesionValue : null
}