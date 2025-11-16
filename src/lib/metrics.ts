import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function registrarEvento(sessionId: string, etapa: string, resposta?: string) {
  try {
    await addDoc(collection(db, "metrics"), {
      sessionId,
      etapa,
      resposta: resposta ?? null,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error("Erro ao registrar evento:", error);
  }
}
