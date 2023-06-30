const rus = [
	{ name: "Shekty", img: "/baiuly/shomekey.png " },
	{ name: "Karakesek", img: "/baiuly/каракесек.png" },
	{ name: "Karasakal", img: "/baiuly/карасакал.png" },
	{ name: "Kete", img: "/baiuly/кете.png" },
	{ name: "Tortkara", img: "/baiuly/торткара.png" },
	{ name: "Shomekey", img: "/baiuly/шекты.png" }
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
			Alimuly
			</div>
			<div className="text-center font-light w-[600px] text-lg m-auto text-white">
			Alimuly (Kazakh: Әlīmuly, Әlīm) is a tribal association within the large Alshyn tribe of the Kazakh people. According to the shezhire (genealogical tree) originated from the Alshyns. The tamga looks like their double tamga. It has six branches, so it is popularly referred to as "Alty ata alim".
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
