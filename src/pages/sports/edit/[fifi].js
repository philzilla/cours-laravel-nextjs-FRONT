import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const Edit = ({ toto }) => {
  // console.log("params vaut :", toto)

  // Route
  const router = useRouter();

  // Hook pour le name
  const [name, setName] = useState();


  useEffect(() => {
    getSport()
  }, [])

  // Récupère les valeurs de la fiche avec l'API
  const getSport = async () => {
    await axios
        .get(`/api/sports/${toto}`)
        .then(res => {
          // console.log(res.data.data[0].name)
          setName(res.data.data[0].name)
        })
        .catch(error => {
            if (error.response.status !== 409) throw error
        })
}



  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Add player
        </h2>
      }>

      <Head>
        <title>Laravel - Player</title>
      </Head>


      <div className="flex flex-col">
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="px-2 py-6 md:px-6 py-6 bg-white border-b border-gray-200">
                <form >

                  <div className="mt-4">
                    <Label htmlFor="name">
                      Name
                    </Label>
                    <Input
                      name="name"
                      type="text"
                      value={`${name}`}
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

export default Edit



export async function getServerSideProps({ params }) {
  return {
    props: { toto: params.fifi },
  }
}