import { getAuth } from "firebase-admin/auth";

getAuth()
  .setCustomUserClaims("WavAb91XJEfXZAhS8OYwvRPO73g2", { admin: true })
  .then(() => {
    console.log("Admin definido com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao definir admin:", error);
  });
