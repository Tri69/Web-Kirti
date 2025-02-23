import BeritaCom from "../Components/HomeComponent/BeritaCom";
import Layout from "../Components/Layout";
import {useState } from "react";
const NewsPage= () => {
	const [count, setCount] = useState(0);

	
function HandleClic(){
    setCount(count+5)
}


	return(
		<>
		<Layout><br/><br/><br/>
			<div>
				<BeritaCom/>

			</div>
			
			<div>
				<button onClick={HandleClic}>Klik : {count}</button>
				<div>
					<h5>Apa yang disebut JS...</h5><br/>
					<input type="radio" /><label>JavaScript</label><br/>
					<input type="radio" onClick={HandleClic}/><label>JavaScript</label><br/>
					<input type="radio" /><label>JavaScript</label><br/>
					<input type="radio" /><label>JavaScript</label>
				</div>
				<button>Submit</button>
				
			</div>
		</Layout>
		
		</>
	)
}

export default NewsPage;