import Layout from "../Components/Layout"
//import {useState, useEffect} from 'react'
import { useState, useEffect } from "react";
import AnggotaComp from '../Components/AnggotaComp'

const AnggotaPage = ()=> {
    
    return (
        <>
            <Layout>
                <br/><br/>
                <br/>
                <h1>Anggota Page</h1>
                <AnggotaComp/>
            </Layout>
        </>
    )
}
export default AnggotaPage;