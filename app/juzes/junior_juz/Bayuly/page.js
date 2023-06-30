const rus = [
	{ name: "Sherkesh", img: "/baiuly/shomekey.png" },
	{ name: "Adai", img: "/baiuly/каракесек.png" },
	{ name: "Alasha", img: "/baiuly/карасакал.png" },
	{ name: "Altyn", img: "/baiuly/кете.png" },
	{ name: "Baibakty", img: "/baiuly/торткара.png" },
	{ name: "Bersh", img: "/baiuly/шекты.png" },
	{ name: "Esentemir", img: "/baiuly/шекты.png" },
	{ name: "Zhappas", img: "/baiuly/шекты.png" },
	{ name: "Kyzyl-Kurt", img: "/baiuly/шекты.png" },
	{ name: "Maskar", img: "/baiuly/шекты.png" },
	{ name: "Taz", img: "/baiuly/шекты.png" },
	{ name: "Tana", img: "/baiuly/шекты.png" },
	{ name: "Ysyk", img: "/baiuly/шекты.png" },
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
				Baiuly
			</div>
			<div className="text-center font-light w-[600px] text-lg m-auto text-white">
				The Bayuly tribe of Kazakhstan is a captivating
				Kazakh tribe known for their rich cultural heritage
				and remarkable traditions. With a history deeply
				rooted in nomadic life, the Bayuly tribe exudes
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
