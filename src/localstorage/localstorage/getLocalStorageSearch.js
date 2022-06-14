export const getLocalStorageSearch = () => {
   const getSearchValue = localStorage.getItem('searchInputValue');
   return getSearchValue ? getSearchValue : null
}
