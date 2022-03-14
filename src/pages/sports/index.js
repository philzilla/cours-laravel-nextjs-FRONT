import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import {useState, useEffect} from 'react'


const Sports = () => {

  // Hooks : useState, useEffect
  const [sports, setSports] = useState([]);

  console.log("avant useEffect", sports)

  useEffect( () => {
    url();      
  }, []) // Sans les crochets ça tourne en boucle
  
  const url = async () => {
      await axios.get('/api/sports')
     .then(res => {
        // console.log("axios :", res.data);
        setSports(res.data.data);
     });
  }

  return (
    <AppLayout
      header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Liste des sports
          </h2>
      }>

      {/* Titre de l'onglet */}
      <Head>
          <title>Liste des sports</title>
      </Head>

      {/*************************** Contenu ***************************/}
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">

              <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Liste des sports</h2>

                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {sports.map((sport) => (
                      <div key={sport.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                          <img
                            src="https://img.freepik.com/photos-gratuite/close-up-shoes-femme-coureur-attachant-ses-chaussures-pour-exercice-jogging_1150-4203.jpg?size=626&ext=jpg"                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                                {sport.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                            <a href={`http://localhost:3000/sports/edit/${sport.id}`}>Editer</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  </AppLayout>
  )
}

export default Sports
