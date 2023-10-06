import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getDealItemList } from "../deals/data/DealsData.js";



//Firebase Stuff
//==============================================
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";



export async function dealsLoader() {
    const products = await getDealItemList();
    return { products };
}



export default function DealItemList() {

    //const { products } = useLoaderData();



    //Firebase Stuff
    const [users, setUsers] = useState([]);

    //const [newUsers, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "deals");

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    console.log("44444444ttttttttttttttttt")

    const getAllUsers = async () => {
        //const userCollectionRef = collection(db, 'students');
        await getDocs(userCollectionRef).then((querySnapshot) => {
            console.log(querySnapshot.docs);
            const listOfAllUsers =  querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setUsers(listOfAllUsers)
        }).catch((err) => {
            console.error("Sorry can't fetch the docs due to error: ", err);
        })
    }

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        setUsers(users);

    };


    useEffect(() => {

        getUsers();
        //getAllUsers()


        //addDoc(usersCollectionRef, { name: "newName" });


    }, [])
    console.log("Deals:", users);



    console.log("LOCATION/////////",pathname)



    return (
        <div className="bg-white">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
