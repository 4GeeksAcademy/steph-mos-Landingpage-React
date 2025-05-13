import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component

const Home = () => {

	let CardsInfo = [
		
		{
			img: "https://i.pinimg.com/736x/96/7e/b3/967eb35340364e573f66b29619b3006f.jpg",
			imgAlt: "concert",
			title: "Fist Concert",
			content: "One of the best days.",
			buttonURL: "https://www.youtube.com/watch?v=-Wh_-vAUlzg",
		},
		{
			img: "https://i.pinimg.com/736x/07/da/59/07da59436042cff446284b3ea6b873b8.jpg",
			imgAlt: "Clairo",
			title: "Clairo",
			content: "The singer Clairo in Los Angeles.",
			buttonURL: "https://www.youtube.com/watch?v=mcrf0-fIZhY",
		},
		{
			img: "https://i.pinimg.com/736x/8f/11/89/8f11892ce5a25f270bc9166e0aecc2f5.jpg",
			imgAlt: "Hayley Williams",
			title: "Paramore at Eras Tour",
			content: "Paramore playing in the uk.",
			buttonURL: "https://www.youtube.com/shorts/wWXIv8UYv-w",
		},
		{
			img: "https://i.pinimg.com/736x/ef/37/b7/ef37b7e757e8665188d0fa703642eeee.jpg",
			imgAlt: "Wolf Alice",
			title: "Wolf Alice Singer",
			content: "Ellie from Wolf Alice at Reading Festival",
			buttonURL: "https://www.youtube.com/watch?v=ZrF3Ncwwlvs",
		},
	];
	
	return(

        <>  
			<Navbar/>
			<div className="text-center">
				<Jumbotron/>

			<div className="row justify-content-center mx-5">
					{CardsInfo.map((card, index) => (
						<div key={index} className="col-xxl-3 col-xl-6 col-lg-12 col-sm-12 p-3">
							<Card
								img={card.img}
								imgAlt={card.imgAlt}
								title={card.title}
								content={card.content}
								buttonURL={card.buttonURL}
							/>

						</div>
					))}
				</div>
			
			</div>

			<Footer/>

		</>

	);
};

export default Home;