const rus = [
	{ name: "Syrmanak", img: "/baiuly/shomekey.png" },
	{ name: "Aryktynym", img: "/baiuly/каракесек.png" },
	{ name: "Baychigir", img: "/baiuly/карасакал.png" },
	{ name: "Balgaly", img: "/baiuly/кете.png" },
	{ name: "Kayshyly", img: "/baiuly/торткара.png" },
	{ name: "Kushuk", img: "/baiuly/шекты.png" },
	{ name: "Shumanak", img: "/baiuly/шекты.png" },
	{ name: "Andas", img: "/baiuly/шекты.png" },
	{ name: "Myrza", img: "/baiuly/шекты.png" },
	{ name: "Karashapal", img: "/baiuly/шекты.png" },
	{ name: "Orakty", img: "/baiuly/шекты.png" },
	{ name: "Akbium", img: "/baiuly/шекты.png" },
	{ name: "Kalpe", img: "/baiuly/шекты.png" },
	{ name: "Syptay", img: "/baiuly/шекты.png" },
	{ name: "Birmanak", img: "/baiuly/шекты.png" },
	{ name: "Chashyn", img: "/baiuly/шекты.png" },
	{ name: "Kara-Bulak", img: "/baiuly/шекты.png" },
	{ name: "Kushak", img: "/baiuly/шекты.png" },
	{ name: "Syrzhy", img: "/baiuly/шекты.png" },
	{ name: "Tarbagatay", img: "/baiuly/шекты.png" },
	{ name: "Zhusup", img: "/baiuly/шекты.png" },
	{ name: "Ysty-Bulak", img: "/baiuly/шекты.png" },
	{ name: "Shok", img: "/baiuly/шекты.png" },
];

const TaipaPage = () => {
	const res = rus.map((ru) => {
		return (
			<li className="">
				<img
					src={ru.img}
					className="w-[100px] m-auto drop-shadow-md"
				></img>
				<h2 className="text-xl text-center">{ru.name}</h2>
			</li>
		);
	});

	return (
		<>
			{" "}
			<img src="/bg-all.jpg" className="bg-pic"></img>
			<div className="font-extrabold text-7xl text-center pt-48 pb-16 text-white">
			Jalayyry
			</div>
			<div className="text-center font-light w-[600px] text-lg m-auto text-white">
				The Jalayyry tribe of Kazakhstan is a captivating
				Kazakh tribe known for their rich cultural heritage
				and remarkable traditions. With a history deeply
				rooted in nomadic life, the Jalayyry tribe exudes
				resilience and a strong sense of community, while
				their customs and artistry showcase their deep
				connection to nature and their ancestral roots.
				<span className="font-bold">
					exemplary bravery and courage
				</span>
				. That is why there are still many batyrs or
				warriors, brave people, among them to this day.
			</div>
			<h2 className="text-gray-800 pt-80 text-center pb-8 text-3xl font-extrabold">
				Rular
			</h2>
			<ul className="text-gray-800 w-[600px] m-auto grid grid-cols-4 pb-24">
				{res}
			</ul>
		</>
	);
};

export default TaipaPage;
