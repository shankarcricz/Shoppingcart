import { useFetchElectronicsQuery, useFetchJewelQuery, useFetchMensQuery, useFetchWomensQuery } from "./store";

export const fetchProds = () => {
    const { data, error, isLoading } = useFetchProductsQuery();
    return data;
}

export const fetchJewel = () => {
    const {data, error, isLoading} = useFetchJewelQuery();
    return data;

}

export const fetchElectronics = () => {
    const {data, error, isLoading} = useFetchElectronicsQuery();
    return data;

}
export const fetchMen = () => {
    const {data, error, isLoading} = useFetchMensQuery();
    return data;

}
export const fetchWomen = () => {
    const {data, error, isLoading} = useFetchWomensQuery();
    return data;
}
