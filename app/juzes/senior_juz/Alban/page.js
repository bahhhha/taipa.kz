import { useNavigation } from 'next/navigation';
import data from '/data/data.json';

const TaipaPage = () => {
  const navigation = useNavigation();
  const { taipa } = navigation.route.params;

  const taipaData = data['orta_juz']['taipalar'].find(item => item.taipa === taipa);
  
  // TODO: Render your page using taipaData

  return (
    <div>
      {/* Your page content here */}
    </div>
  );
}

export async function getStaticPaths() {
  const taipalar = data['orta_juz']['taipalar'];
  const paths = taipalar.map((taipa) => ({
    params: { taipa: taipa.taipa },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const taipaData = data['orta_juz']['taipalar'].find(item => item.taipa === params.taipa);

  if (!taipaData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { taipaData }, // will be passed to the page component as props
  };
}

export default TaipaPage;
