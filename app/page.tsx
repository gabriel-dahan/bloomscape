"use client"; // Indispensable pour utiliser les hooks React (useState, etc.)

import { useEffect, useState } from "react";
import { remult } from "remult";
import { User } from "../shared/user/User";

const userRepo = remult.repo(User);

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Fonction pour charger les utilisateurs
  useEffect(() => {
    userRepo.find().then(setUsers);
  }, []);

  // Fonction pour ajouter un utilisateur
  const addUser = async () => {
    try {
      const newUser = await userRepo.insert({ username: newTaskTitle, sap: 100 });
      setUsers([...users, newUser]); // Mise à jour optimiste de l'UI
      setNewTaskTitle("");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <main className="p-10 flex flex-col gap-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-green-600">BloomScape Admin~</h1>
      
      {/* Formulaire d'ajout */}
      <div className="flex gap-2">
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Nom du joueur"
          className="input input-bordered w-full" // Classe daisyUI
        />
        <button onClick={addUser} className="btn btn-primary">
          Ajouter
        </button>
      </div>

      {/* Liste des joueurs */}
      <ul className="menu bg-base-200 w-full rounded-box">
        {users.map((user) => (
          <li key={user.id}>
            <div className="flex justify-between">
              <span>{user.username}</span>
              <span className="badge badge-secondary">{user.sap} Sève</span>
            </div>
          </li>
        ))}
        {users.length === 0 && <p className="p-4 text-gray-500">Aucun joueur pour l'instant.</p>}
      </ul>
    </main>
  );
}