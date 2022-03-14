import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import {useState} from 'react'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const Ajouter = () => {
    // Route
    const router = useRouter();

    // Hook pour le name
    const [name, setName] = useState();
    // const [category, setCategory] = useState();

    // Méthode POST
    const submitForm = async (event) => {
        event.preventDefault(); // Je contrôle ma requête

        const ajouterSport = async () => {
            // SYNTAX await
            // await axios
            // .post("url", objet)
            // .then(res => {si succès reste sur cette page})
            // .catch()

            await axios
                .post('/api/sports', { name, /* category */ })
                .then(res => {
                    router.push('/sports')
                })
                .catch(error => {
                    setErrors(error)
                    if (error.response.status !== 409) throw error
                })
        }
        ajouterSport();
    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Ajouter un sport
                </h2>
            }>

            <Head>
                <title>Laravel - Sport</title>
            </Head>


        <div className="flex flex-col">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-2 py-6 md:px-6 py-6 bg-white border-b border-gray-200">
                            <form onSubmit={submitForm}>
                                <div className="mt-4">
                                    <Label htmlFor="name">
                                        Name
                                    </Label>
                                    <Input
                                        name="name"
                                        type="text"
                                        onChange = {
                                            event => {
                                                setName(event.target.value);
                                            }
                                        }
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                                
                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4">Ajouter</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AppLayout>
    )
}

export default Ajouter