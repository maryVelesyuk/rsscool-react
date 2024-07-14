export async function loader({ params }: { params: unknown }) {
  const planetInfo = await fetch(
    `https://swapi.dev/api/planets/?search=${params!.planetName}`
  );
  return planetInfo.json();
}
