import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

const DataContext = React.createContext();

function MenuFetchData({ children }) {
    const [data, setData] = useState([]);
    const { category } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const foodCollection = collection(db, "Menu");
                let menuQuery = foodCollection;

                if (category) {
                    menuQuery = query(foodCollection, where("category", "==", category));
                }

                const res = await getDocs(menuQuery);
                console.log("Fetched data:", res.docs);

                const list = res.docs.map((doc) => ({

                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Formatted data:", list);
                setData({ Menu: list });
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false); 
            }
        }
        fetchData();
    }, [category]);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

function useMenuFetchData() {
    return useContext(DataContext);
}

export { MenuFetchData, useMenuFetchData };