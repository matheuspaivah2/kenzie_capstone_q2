import { Container } from "./styles";
import PurpleButton from "../../../components/PurpleButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiMyGym } from "../../../services/api";
import RegisterWorkout from "../../../components/RegisterWorkout";
import RegisterPhisicalAssessment from "../../../components/RegisterPhisicalAssessment";
import Modal from "../../../components/Modal";

interface RoomParams {
  id: string,
}

interface Treino {
  treino: string,
  peso?: string,
}

interface Snack {
  snack: string,
  peso?: number,
}

interface Student {
  name: string,
  email: string,
  coachId: number,
  academyId: number,
  userId: number,
  id: number,
  workouts: Treino[],
  physicalAssessment?: {peso: number, imc: number,},
  snacks?: Snack[],
}


const InfoStudent = () => {
  const [info, setInfo] = useState<any>({});
  const [newWorkout, setNewWorkout] = useState(false);
  const [newPhisical, setNewPhisical] = useState(false);
  const params = useParams<RoomParams>();
  const Id = params.id;
  let token = localStorage.getItem("token") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }

  const GetInfo = () => {
    apiMyGym
      .get(`students?userId=${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => setInfo(response))
  }

  const OpenRegisterWorkout = () => {
    setNewWorkout(!newWorkout);
  }

  const OpenPhisical = () => {
    setNewPhisical(!newPhisical);
  }

  useEffect(() => {
    GetInfo();
  },[])

  return (
    <section className="home--Student" >
      <Container percentage={(16 / 20) * 100}>
        <div className="container--user">
          <div className="status">
            <figure>
              <img
                src="http://s2.glbimg.com/c-WVrLcmkvQbU_7kolZlss_kZ3k=/e.glbimg.com/og/ed/f/original/2015/06/09/thinkstockphotos-478000165.jpg"
                alt="Usuário"
              />
              <figcaption>name</figcaption>
            </figure>
          </div>
          <div className="trainingPerformed">
            <h2>Treinos Realizados: 16/18</h2>
            <div className="percentageBar">
              <div>
                <span>16/20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="boxs">
          <div className="workouts--chart">
            <h2>Treinos Cadastrados</h2>
            <div/>
            
            <PurpleButton small={false} onClick={OpenRegisterWorkout}>Novo Treino</PurpleButton>
          </div>
          <div className="progression--chart">
            <h2>Progressão</h2>
            <div />
            <PurpleButton small={false} onClick={OpenPhisical}>Nova Avaliação</PurpleButton>
          </div>
        </div>
      </Container>
      {newWorkout && <Modal open={newWorkout} handleClose={OpenRegisterWorkout}><RegisterWorkout name="Maromba" setOpen={OpenRegisterWorkout} /></Modal> }
      {newPhisical && <Modal open={newPhisical} handleClose={OpenPhisical}><RegisterPhisicalAssessment nome="Grilo" setOpen={OpenPhisical}/></Modal>}
    </section>
  );
};

export default InfoStudent;
