import { PlanetInfo } from "../../../components/shared";
import { PlanetsRequest } from "../../../components/shared/PlanetCard/PlanetCard.model";

const getData = async (slug: string) => {
  const res = await fetch(`https://swapi.dev/api/planets/?search=${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { results: planetData } = (await getData(slug)) as PlanetsRequest;
  return <PlanetInfo planetData={planetData} />;
};

export default Page;
