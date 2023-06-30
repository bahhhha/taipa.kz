import data from "/data/data.json";
import Link from "next/link";
const MiddleJuzPage = () => {
	const taipalar = data["orta_juz"]["taipalar"].map((taipa) => (
	  <Link
		href={`/juzes/middle_juz/${taipa.taipa}`}
		key={taipa.taipa}
		className="hover:text-gray-600 duration-150"
	  >
		{taipa.taipa}
	  </Link>
	));
	return (
		<div className="flex flex-col">
			<div className="pb-40">
				<img src="/bg-middle2.jpg" className="bg-pic"></img>
				<img
					src="/medium.png"
					className="w-[480px] m-auto pt-24 pb-6 drop-shadow-xl"
				></img>
				<h2 className="text-white text-5xl text-center font-extralight">
					Orta Jüz
				</h2>
			</div>
			<div className="w-[720px] m-auto text-xl text-gray-900">
				Within the{" "}
				<span className="font-bold">Middle Juz</span>, we
				encounter the epitome of Kazakh grace and wisdom.
				People of Middle Juz are possess an innate
				understanding of their rich heritage and traditions.
				With dignified countenance and gentle eyes, they
				carry the stories of their ancestors in their
				hearts, embodying the resilience and harmony of the
				Kazakh people. Their voices, like the melodic tunes
				of the dombra, resonate with the collective wisdom
				of generations, guiding their community with
				compassion and reverence for their cultural roots.
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
export default MiddleJuzPage;
