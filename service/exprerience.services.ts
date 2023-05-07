export const fetchExperiences = async () => {
    const res = await fetch("https://api.brainiax.com.br/api/v1/experiences", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
  
    if (!res.ok) {
      throw new Error();
    }
  
    return res;
  };