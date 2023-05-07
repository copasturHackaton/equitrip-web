export const fetchLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch("https://api.brainiax.com.br/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
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

export const whoami = async () => {
  const res = await fetch("/api/user/whoami", {
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

}