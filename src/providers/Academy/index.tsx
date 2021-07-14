import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { apiMyGym } from "../../services/api";
import { useEffect } from "react";
interface AcademyProvidersProps {
  children: ReactNode;
}
interface Coach {
  email: string;
  academyId: number;
  userId: number;
  id?: number;
}

interface Student {
  email: string;
  academyId: number;
  coachId: number;
  userId: number;
  id?: number;
}

interface InfosToLogin {
  email: string;
  password: string;
}

interface AcademyInformation {
  token: string;
  id: any;
}

interface AcademyProviderData {
  loadInfoAcademy: () => void;
  academyResume: any;
  academyAuthInfo: any;
}

const AcademyContext = createContext<AcademyProviderData>(
  {} as AcademyProviderData
);

export const AcademyProvider = ({ children }: AcademyProvidersProps) => {
  let typeUser = localStorage.getItem("@typeUser") || "";
  let idUser = localStorage.getItem("@idUser") || "";
  let token = localStorage.getItem("@tokenMyGym") || "";

  if (token !== "") {
    token = JSON.parse(token);
    idUser = JSON.parse(idUser);
  }

  const [academyAuthInfo, setAcademyAuthInfo] = useState(
    {} as AcademyInformation
  );
  const [academyResume, setAcademyResume] = useState({});

  const loadInfoAcademy = () => {
    apiMyGym
      .get(`academys?userId=${idUser}&_embed=coaches&_embed=students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setAcademyResume(response.data[0])).catch((err) => console.log(err));
  };


  useEffect(() => {
   
    if (typeUser !== "academys") {
      loadInfoAcademy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AcademyContext.Provider
      value={{
        loadInfoAcademy,     
        academyResume,
        academyAuthInfo,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);
