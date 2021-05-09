const GetCat = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?q=api_key=8d351156-6ee0-4f2f-926b-62fea133a318`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  console.log({ data });

  return <h2>Gatos</h2>;
};

export default GetCat;
