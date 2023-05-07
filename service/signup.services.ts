export const fetchSignup = async ({
    name,
    email,
    password,
    race,
    birthday,
    gender,
    disabilities
  }: {
    name: string;
    email: string;
    password: string;
    race: string;
    birthday: string;
    gender: string;
    disabilities?: string[] | null;
  }) => {
    const res = await fetch("https://api.brainiax.com.br/api/v1/user/signup", {
      method: "POST",
      body: JSON.stringify({ 
        name,
        email,
        password,
        race,
        birthday,
        gender,
        disabilities 
      }),
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