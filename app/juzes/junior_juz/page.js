import data from "/data/data.json";
import Link from "next/link";
const JuniorJuzPage = () => {
	const taipalar = data["kishi_juz"]["taipalar"].map((taipa) => (
		<Link
			href={`/juzes/junior_juz/${taipa.taipa}`}
			key={taipa.taipa}
			className="hover:text-gray-600 duration-150"
		>
			{taipa.taipa}
		</Link>
	));
	console.log(taipalar);
	return (
		<div className="flex flex-col">
			<div className="pb-40">
				<img src="/bg-junior.jpg" className="bg-pic"></img>
				<img
					src="/junior.png"
					className="w-[480px] m-auto pt-24 pb-6 drop-shadow-xl"
				></img>
				<h2 className="text-white text-5xl text-center font-extralight">
					Kışı Jüz
				</h2>
			</div>
			<div className="w-[720px] m-auto text-xl text-gray-900">
				The representatives of the{" "}
				<span className="font-bold">Junior Juz</span> exude
				a vibrant spirit and a thirst for exploration. They
				are the embodiment of youthful energy and curiosity,
				seeking to unravel the diverse tapestry of
				Kazakhstan's landscapes and cultures. With an
				adventurous glimmer in their eyes, they traverse the
				snow-capped mountains, vast deserts, and lush
				plains, embracing the nomadic traditions and forging
				connections between generations. They carry the
				torch of the Kazakh heritage, uniting the past and
				present in a harmonious celebration of diversity.
			</div>
			<div className="text-center pt-8 text-xl">
				<div className="text-2xl">Taipalar:</div>
				<ol className="flex m-auto space-x-4 pt-4 pb-4 justify-center font-light">
					{taipalar}
				</ol>
			</div>
		</div>
	);
};
export default JuniorJuzPage;
