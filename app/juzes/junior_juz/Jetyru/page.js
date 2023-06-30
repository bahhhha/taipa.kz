const rus = [
	{ name: "Tabyn", img: "/jetyru/табын.png" },
	{ name: "Tama", img: "/jetyru/tama.png" },
	{ name: "Jagalbayly", img: "/jetyru/жагалбайлы.png" },
	{ name: "Kereit", img: "/jetyru/керейит.png" },
	{ name: "Tileu", img: "/jetyru/тилеу.png" },
	{ name: "Ramadan", img: "/jetyru/рамадан.png" },
	{ name: "Kerdery", img: "/jetyru/кердеры.png" },
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
				Jetyru
			</div>
			<div className="text-center font-light w-[600px] text-lg m-auto text-white">
				Their main distinction, among others, lies in the
				fact that in ancient times they were engaged in more
				military actions against the enemies of their horde
				and were distinguished in battles by their{" "}
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
