import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const Styles = StyleSheet.create({
    page:{
        flexDirection:'row',
        backgroundColor:'white'
    },
    section:{
        margin:10,
        padding:10,
        flexGrow:1
    }
});
const RenderMateri = ()=> {
    <Document>
        <Page size="A4" style={Styles.page}>
            <View style={Styles.section}>
                <Text>Hello Tes</Text>
            </View>
        </Page>
    </Document>
}
export default RenderMateri;