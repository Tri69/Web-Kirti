import Layout from "../Components/Layout"
//import {useState, useEffect} from 'react'
import { useState, useEffect } from "react";
import AnggotaComp from '../Components/AnggotaComp'

const AnggotaPage = ()=> {
    
    return (
        <>
            <Layout title="Anggota Page | KIRTI SMKN 1 Gombong" content="KIRTI STEMSAGO">
                <br/><br/>
                <br/>
                <h1 class="text-center">Anggota Page</h1>
                <AnggotaComp/>
            </Layout>
        </>
    )
}
export default AnggotaPage;