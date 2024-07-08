export const typeDefs = `#graphql
type Classe {
  id: Int!
  nom: String!
  salle: String!
}

type Cour {
  classe: Classe!
  debut: String!
  duree: Int!
  fin: String!
  id: Int!
  intervenant: Intervenant!
  jour: Jours!
  matiere: Matiere!
}

type Ecole {
  adresse: String!
  description: String!
  id: Int!
  nom: String!
}

type Etudiant {
  classe: Classe!
  email: String!
  id: Int!
  matiere: [Matiere!]!
  nom: String!
  prenom: String!
  telephone: String!
}

type Intervenant {
  classe: [Classe!]!
  email: String!
  id: Int!
  matiere: Matiere!
  nom: String!
  prenom: String!
  telephone: String!
}

enum Jours {
  Jeudi
  Lundi
  Mardi
  Mercredi
  Vendredi
}

type Matiere {
  id: Int!
  nom: String!
}

type Note {
  classe: Classe!
  etudiant: Etudiant!
  id: Int!
  intervenant: Intervenant!
  matiere: Matiere!
  val: Int!
}

type Utilisateur {
  id: Int!
  motdepasse: String!
  pseudo: String!
}`;