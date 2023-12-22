import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent {
  classes = [
    {
      id: 1,
      nom: "Seconde L",
      annescolaire: "2023-2024",
      apprenants: [
        {
          id: 2,
          nomComplet: "apprenant",
          email: "apprenant@gmail.com",
          password: "passer",
          role: "apprenant",
          etat: "actif",
          image: "https://img.freepik.com/photos-gratuite/page-accueil-vue-ecran-ordinateur_23-2149416735.jpg?size=626&ext=jpg&ga=GA1.2.1069740416.1690285243&semt=ais",
          note: []
        },
      ]
    }
  ];

  matieres = [
    {
      id: 1,
      nom: "francais",
      formateur_id: 3,
      classe_id: 1,
      evaluation: [],
    },
    {
      id: 2,
      nom: "math",
      formateur_id: 4,
      classe_id: 1,
      evaluation: [],
    }
  ]

  ngOnInit(): void {
    if (!localStorage.getItem("classes")) {
      localStorage.setItem("classes", JSON.stringify(this.classes));
    }

    if (!localStorage.getItem("matieres")) {
      localStorage.setItem("matieres", JSON.stringify(this.matieres));
    }
  }
  
}

