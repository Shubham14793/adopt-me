const breedList = async ({ queryKey }) => {
    const animal = queryKey[1];
    if (!animal) {
      return [];
    }
    const breedListRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    if(!breedListRes.ok) {
      throw new Error(`unable to fetch breed list for /breeds/${animal}`);
    }

    return breedListRes.json();
};

export default breedList;