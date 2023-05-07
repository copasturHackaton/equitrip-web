import React, { createContext } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-query";
import { whoami, fetchLogin } from "@/service/login.services";
import { SignUpProps } from "@/types/signUp";
import { fetchExperiences } from "@/service/exprerience.services";

interface GlobalContextData {
  loginHandler: (param: { email: string; password: string }) => void;
  loginError: boolean;
  loginLoading: boolean;
  signUpHandler: (param: SignUpProps) => void;
  signUpError: boolean;
  signUpLoading: boolean;
  experiencesListHandler: () => void,
  experiencesListError: boolean,
  experiencesListLoading: boolean,
  experiencesData: any,
  trailsListHandler: () => void,
  trailsListError: boolean,
  trailsListLoading: boolean,
  trailsData: any,
  // authenticationState: "loading" | "authenticated" | "unauthenticated";
}

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

const GlobalContextProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const { pathname, push } = useRouter();

  // const { error, isLoading } = useQuery(["whoami", pathname], whoami, {
  //   onError: () => {
  //     // push('/login')
  //   },
  // });

  // const authenticationState: "loading" | "authenticated" | "unauthenticated" =
  //   isLoading ? "loading" : error ? "unauthenticated" : "authenticated";

  // useEffect(() => {
  //   if (authenticationState == "unauthenticated") {
  //     push("/login");
  //   }
  // }, [authenticationState]);

  const {
    mutate: loginHandler,
    isError: loginError,
    isLoading: loginLoading,
  } = useMutation(fetchLogin, {
    onSuccess: () => {
      push("/");
    },
  });

  const {
    mutate: signUpHandler,
    isError: signUpError,
    isLoading: signUpLoading,
  } = useMutation(fetchLogin, {
    onSuccess: () => {
      push("/signin");
    },
  });
  
  const {
    mutate: experiencesListHandler,
    isError: experiencesListError,
    isLoading: experiencesListLoading,
    data: experiencesData
  } = useMutation(fetchExperiences);

    const {
      mutate: trailsListHandler,
      isError: trailsListError,
      isLoading: trailsListLoading,
      data: trailsData
    } = useMutation(fetchExperiences);

  return (
    <GlobalContext.Provider
      value={{
        loginHandler,
        loginError,
        loginLoading,
        signUpHandler,
        signUpError,
        signUpLoading,
        experiencesListHandler,
        experiencesListError,
        experiencesListLoading,
        experiencesData: experiencesData ?? [],
        trailsListHandler,
        trailsListError,
        trailsListLoading,
        trailsData: experiencesData ?? [],
        // authenticationState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
