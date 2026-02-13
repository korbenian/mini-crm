import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      loading: {
        loading: 'Loading...',
        loadingdata: 'Loading data User'
      },
      registration: {
  title: 'Registration',
  haveAccount: 'Do you have an account?',
  link: 'Click here'
},tariff: {
  plans: 'Tariff Plans'
},
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
        button: 'Login',
        noAccount: 'Don’t have an account?',
        link: 'Click here',
        error: 'Unknown error'
      },navigation: {
  dashboard: 'Dashboard',
  articles: 'Articles',
  tasks: 'Tasks',
  chat: 'Chat with AI'
},dashboardMetrics: {
  title: 'Dashboard',
  totalUsers: 'Total Users',
  totalCards: 'Total Cards',
  avgAge: 'Average Age',doneCards: 'Done Cards',
  myCards: 'My Cards'
}
,
      dashboard: {
        age: 'Age',
        name: 'Name',
        description: 'Description',
        mycards: 'My cards',
        addcard: 'Add card',
        account: 'Account',
        exit: 'Exit',
        edit: 'Edit',
        
        profile: 'Profile',
        aboutuser: 'About me'
      },
      profile: {
        age: 'Age',
        name: 'Name',
        exit: 'Exit',
        technologies:'technologies',
        edit: 'Edit',
        enterTechnology: 'Enter technology',
        add: 'Add',
        other: 'Other...',
        profile: 'Profile',
        aboutuser: 'About me',
        email: 'Email'
      },
      edit: {
        edit: 'Edit Profile',
        save: 'Save',
        exit: 'Exit',
        name: 'Name',
        aboutuser: 'About me'
      },
      createprofile: {
        createprofile: 'Create Profile',
        age: 'Age',
        name: 'Name',
        description: 'Description',
        create: 'Create',
        exit: 'Exit'
      },tasks: {
  noTitle: 'Untitled',
  deadline: 'Deadline',
  delete: 'Delete',
  fill: 'Fill',
  close: 'Close',
  status: {
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done'
  }
},addtask: {
  search: 'Search task',
  filter: {
    all: 'All'
  },
  status: {
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done'
  }
},taskedit: {
  titlePlaceholder: 'Enter title',
  deadline: 'Deadline',
  create: 'Create',
  delete: 'Delete'
},mainTasks: {
  title: 'Tasks'
},art: {
  title: 'Articles',
  noDescription: 'No description'
},chat: {
  title: 'Chat with AI',
  thinking: 'AI thinks…',
  empty: 'Write the first question 👇',
  placeholder: 'Ask me something…'
}





    }
  },

  ru: {
    translation: {
      loading: {
        loading: 'Загрузка...',
        loadingdata: 'Загрузка данных профиля'
      },registration: {
  title: 'Регистрация',
  haveAccount: 'У вас есть аккаунт?',
  link: 'Нажмите здесь'
}
,tariff: {
  plans: 'Планы тарифов'
}
,
      login: {
        title: 'Вход',
        email: 'Почта',
        password: 'Пароль',
        
        button: 'Войти',
        noAccount: 'У вас нет аккаунта?',
        link: 'Нажмите сюда',
        error: 'Неизвестная ошибка'
      },navigation: {
  dashboard: 'Дашборд',
  articles: 'Статьи',
  tasks: 'Задачи',
  chat: 'Чат с ИИ'
}
,dashboardMetrics: {
  title: 'Дашборд',
  totalUsers: 'Всего пользователей',
  totalCards: 'Всего карточек',
  avgAge: 'Средний возраст',
  myCards: 'Ваши карточки',
    doneCards: 'Завершённые карточки',
}
,
      dashboard: {
        age: 'Возраст',
        name: 'Имя',
        description: 'Описание',
        mycards: 'Мои карточки',
        addcard: 'Добавить карточку',
        account: 'Аккаунт',
        exit: 'Выйти',
        edit: 'Редактировать',
      
        profile: 'Профиль',
        aboutuser: 'О себе'
      },
      profile: {
        age: 'Возраст',
        name: 'Имя',
        exit: 'Выйти',
        add: 'Добавить',
        enterTechnology: 'Введите технологию',
        other: 'Другая...',
        technologies:'Технологии',
        edit: 'Редактировать',
        profile: 'Профиль',
        aboutuser: 'О себе',
        email: 'Почта'
      },
      edit: {
        edit: 'Редактировать профиль',
        save: 'Сохранить',
        exit: 'Выйти',
        name: 'Имя',
        aboutuser: 'О себе'
      },
      createprofile: {
        createprofile: 'Создать профиль',
        age: 'Возраст',
        name: 'Имя',
        description: 'О себе',
        create: 'Создать',
        exit: 'Выйти'
      },tasks: {
  noTitle: 'Без названия',
  deadline: 'Дедлайн',
  delete: 'Удалить',
  fill: 'Заполнить',
  close: 'Закрыть',
  status: {
    todo: 'К выполнению',
    inProgress: 'В процессе',
    done: 'Готово'
  }
},addtask: {
  search: 'Поиск задачи',
  filter: {
    all: 'Все'
  },
  status: {
    todo: 'К выполнению',
    inProgress: 'В процессе',
    done: 'Готово'
  }
},taskedit: {
  titlePlaceholder: 'Введите название',
  deadline: 'Дедлайн',
  create: 'Создать',
  delete: 'Удалить'
},mainTasks: {
  title: 'Задачи'
},art: {
  title: 'Статьи',
  noDescription: 'Нет описания'
},chat: {
  title: 'Чат с ИИ',
  thinking: 'ИИ думает…',
  empty: 'Задайте первый вопрос 👇',
  placeholder: 'Спросите меня о чём-нибудь…'
}





    }
  },

  fr: {
    translation: {
      loading: {
        loading: 'Chargement...',
        loadingdata: 'Chargement des données utilisateur'
      },registration: {
  title: 'Inscription',
  haveAccount: 'Vous avez un compte ?',
  link: 'Cliquez ici'
},navigation: {
  dashboard: 'Tableau de bord',
  articles: 'Articles',
  tasks: 'Tâches',
  chat: 'Chat avec IA'
},tariff: {
  plans: 'Forfaits'
}
,dashboardMetrics: {
  title: 'Tableau de bord',
  totalUsers: 'Nombre total d’utilisateurs',
  totalCards: 'Nombre total de cartes',
  avgAge: 'Âge moyen',doneCards: 'Cartes terminées',
  myCards: 'Mes cartes'
}
,
      login: {
        title: 'Connexion',
        email: 'Email',
        password: 'Mot de passe',
        button: 'Se connecter',
        noAccount: 'Pas de compte ?',
        link: 'Cliquez ici',
        error: 'Erreur inconnue'
      },
      dashboard: {
        age: 'Âge',
        name: 'Nom',
        description: 'Description',
        mycards: 'Mes cartes',
        addcard: 'Ajouter une carte',
        account: 'Compte',
        exit: 'Quitter',
        edit: 'Modifier',
        
        profile: 'Profil',
        aboutuser: 'À propos de moi'
      },
      profile: {
        age: 'Âge',
        name: 'Nom',
        exit: 'Quitter',
        enterTechnology: 'Entrez la technologie',
        other: 'Autre...',
        add: 'Ajouter',
        edit: 'Modifier',
        technologies:'technologies',
        profile: 'Profil',
        aboutuser: 'À propos de moi',
        email: 'Email'
      },
      edit: {
        edit: 'Modifier le profil',
        save: 'Enregistrer',
        exit: 'Quitter',
        name: 'Nom',
        aboutuser: 'À propos de moi'
      },
      createprofile: {
        createprofile: 'Créer un profil',
        age: 'Âge',
        name: 'Nom',
        description: 'Description',
        create: 'Créer',
        exit: 'Quitter'
      },tasks: {
  noTitle: 'Sans titre',
  deadline: 'Date limite',
  delete: 'Supprimer',
  fill: 'Remplir',
  close: 'Fermer',
  status: {
    todo: 'À faire',
    inProgress: 'En cours',
    done: 'Terminé'
  }
},addtask: {
  search: 'Rechercher une tâche',
  filter: {
    all: 'Toutes'
  },
  status: {
    todo: 'À faire',
    inProgress: 'En cours',
    done: 'Terminée'
  }
},taskedit: {
  titlePlaceholder: 'Entrez le titre',
  deadline: 'Date limite',
  create: 'Créer',
  delete: 'Supprimer'
},mainTasks: {
  title: 'Tâches'
},art: {
  title: 'Articles',
  noDescription: 'Aucune description'
},chat: {
  title: 'Chat avec IA',
  thinking: 'L’IA réfléchit…',
  empty: 'Posez la première question 👇',
  placeholder: 'Demandez-moi quelque chose…'
}





    }
  },

  de: {
    translation: {
      loading: {
        loading: 'Laden...',
        loadingdata: 'Benutzerdaten werden geladen'
      },registration: {
  title: 'Registrierung',
  haveAccount: 'Haben Sie ein Konto?',
  link: 'Hier klicken'
},navigation: {
  dashboard: 'Dashboard',
  articles: 'Artikel',
  tasks: 'Aufgaben',
  chat: 'Chat mit KI'
},dashboardMetrics: {
  title: 'Dashboard',
  totalUsers: 'Gesamtanzahl Nutzer',
  totalCards: 'Gesamtanzahl Karten',
  avgAge: 'Durchschnittsalter',doneCards: 'Erledigte Karten',
  myCards: 'Meine Karten'
},tariff: {
  plans: 'Tarifpläne'
}

,
      login: {
        title: 'Anmelden',
        email: 'E-Mail',
        password: 'Passwort',
        button: 'Login',
        noAccount: 'Kein Konto?',
        link: 'Hier klicken',
        error: 'Unbekannter Fehler'
      },
      dashboard: {
        age: 'Alter',
        name: 'Name',
        description: 'Beschreibung',
        mycards: 'Meine Karten',
        addcard: 'Karte hinzufügen',
        account: 'Konto',
        exit: 'Abmelden',
        edit: 'Bearbeiten',
        
        profile: 'Profil',
        aboutuser: 'Über mich'
      },
      profile: {
        age: 'Alter',
        name: 'Name',
        exit: 'Abmelden',
        edit: 'Bearbeiten',
        add: 'Hinzufügen',
        other: 'Andere...',
        profile: 'Profil',
        enterTechnology: 'Technologie eingeben',
        technologies:'Technologie',
        aboutuser: 'Über mich',
        email: 'E-Mail'
      },
      edit: {
        edit: 'Profil bearbeiten',
        save: 'Speichern',
        exit: 'Abmelden',
        name: 'Name',
        aboutuser: 'Über mich'
      },
      createprofile: {
        createprofile: 'Profil erstellen',
        age: 'Alter',
        name: 'Name',
        description: 'Beschreibung',
        create: 'Erstellen',
        exit: 'Abmelden'
      },tasks: {
  noTitle: 'Ohne Titel',
  deadline: 'Frist',
  delete: 'Löschen',
  fill: 'Ausfüllen',
  close: 'Schließen',
  status: {
    todo: 'Zu erledigen',
    inProgress: 'In Bearbeitung',
    done: 'Erledigt'
  }
},addtask: {
  search: 'Aufgabe suchen',
  filter: {
    all: 'Alle'
  },
  status: {
    todo: 'Zu erledigen',
    inProgress: 'In Bearbeitung',
    done: 'Erledigt'
  }
},taskedit: {
  titlePlaceholder: 'Titel eingeben',
  deadline: 'Frist',
  create: 'Erstellen',
  delete: 'Löschen'
},mainTasks: {
  title: 'Aufgaben'
},art: {
  title: 'Artikel',
  noDescription: 'Keine Beschreibung'
},chat: {
  title: 'Chat mit KI',
  thinking: 'KI denkt nach…',
  empty: 'Stelle die erste Frage 👇',
  placeholder: 'Frag mich etwas…'
}




    }
  },

  nl: {
    translation: {
      loading: {
        loading: 'Laden...',
        loadingdata: 'Gebruikersgegevens laden'
      },registration: {
  title: 'Registratie',
  haveAccount: 'Heeft u een account?',
  link: 'Klik hier'
},navigation: {
  dashboard: 'Dashboard',
  articles: 'Artikelen',
  tasks: 'Taken',
  chat: 'Chat met AI'
}
,dashboardMetrics: {
  title: 'Dashboard',
  totalUsers: 'Totaal gebruikers',
  totalCards: 'Totaal kaarten',
  avgAge: 'Gemiddelde leeftijd', doneCards: 'Voltooide kaarten',
  myCards: 'Mijn kaarten'
}
,tariff: {
  plans: 'Tariefplannen'
}
,
      login: {
        title: 'Inloggen',
        email: 'E-mail',
        password: 'Wachtwoord',
        button: 'Inloggen',
        noAccount: 'Geen account?',
        link: 'Klik hier',
        error: 'Onbekende fout'
      },
      dashboard: {
        age: 'Leeftijd',
        name: 'Naam',
        description: 'Beschrijving',
        mycards: 'Mijn kaarten',
        addcard: 'Kaart toevoegen',
        account: 'Account',
        exit: 'Uitloggen',
        edit: 'Bewerken',
       
        profile: 'Profiel',
        aboutuser: 'Over mij'
      },
      profile: {
        age: 'Leeftijd',
        name: 'Naam',
        exit: 'Uitloggen',
        add: 'Toevoegen',
        edit: 'Bewerken',
        other: 'Andere...',
        enterTechnology: 'Voer technologie in',
        technologies:'technologie',
        profile: 'Profiel',
        aboutuser: 'Over mij',
        email: 'E-mail'
      },
      edit: {
        edit: 'Profiel bewerken',
        save: 'Opslaan',
        exit: 'Uitloggen',
        name: 'Naam',
        aboutuser: 'Over mij'
      },
      createprofile: {
        createprofile: 'Profiel aanmaken',
        age: 'Leeftijd',
        name: 'Naam',
        description: 'Beschrijving',
        create: 'Aanmaken',
        exit: 'Uitloggen'
      },tasks: {
  noTitle: 'Zonder titel',
  deadline: 'Deadline',
  delete: 'Verwijderen',
  fill: 'Invullen',
  close: 'Sluiten',
  status: {
    todo: 'Te doen',
    inProgress: 'Bezig',
    done: 'Klaar'
  }
},addtask: {
  search: 'Taak zoeken',
  filter: {
    all: 'Alles'
  },
  status: {
    todo: 'Te doen',
    inProgress: 'Bezig',
    done: 'Klaar'
  }
},taskedit: {
  titlePlaceholder: 'Titel invoeren',
  deadline: 'Deadline',
  create: 'Aanmaken',
  delete: 'Verwijderen'
},mainTasks: {
  title: 'Taken'
},art: {
  title: 'Artikelen',
  noDescription: 'Geen beschrijving'
},chat: {
  title: 'Chat met AI',
  thinking: 'AI denkt na…',
  empty: 'Stel de eerste vraag 👇',
  placeholder: 'Vraag me iets…'
}




    }
  },

  pl: {
    translation: {
      loading: {
        loading: 'Ładowanie...',
        loadingdata: 'Ładowanie danych użytkownika'
      },dashboardMetrics: {
  title: 'Panel',
  totalUsers: 'Łączna liczba użytkowników',
  totalCards: 'Łączna liczba kart',
  avgAge: 'Średni wiek',doneCards: 'Ukończone karty',
  myCards: 'Moje karty'
},tariff: {
  plans: 'Plany taryf'
}
,

      registration: {
  title: 'Rejestracja',
  haveAccount: 'Czy masz konto?',
  link: 'Kliknij tutaj'
},navigation: {
  dashboard: 'Panel',
  articles: 'Artykuły',
  tasks: 'Zadania',
  chat: 'Czat z AI'
}
,
      login: {
        title: 'Logowanie',
        email: 'Email',
        password: 'Hasło',
        button: 'Zaloguj się',
        noAccount: 'Nie masz konta?',
        link: 'Kliknij tutaj',
        error: 'Nieznany błąd'
      },
      dashboard: {
        age: 'Wiek',
        name: 'Imię',
        description: 'Opis',
        mycards: 'Moje karty',
        addcard: 'Dodaj kartę',
        account: 'Konto',
        exit: 'Wyloguj',
        edit: 'Edytuj',
       
        profile: 'Profil',
        aboutuser: 'O mnie'
      },
      profile: {
        age: 'Wiek',
        name: 'Imię',
        exit: 'Wyloguj',
        other: 'Inna...',
        add: 'Dodaj',
        edit: 'Edytuj',
        enterTechnology: 'Wprowadź technologię',
      technologies:'technologie',
        profile: 'Profil',
        aboutuser: 'O mnie',
        email: 'Email'
      },
      edit: {
        edit: 'Edytuj profil',
        save: 'Zapisz',
        exit: 'Wyloguj',
        name: 'Imię',
        aboutuser: 'O mnie'
      },
      createprofile: {
        createprofile: 'Utwórz profil',
        age: 'Wiek',
        name: 'Imię',
        description: 'Opis',
        create: 'Utwórz',
        exit: 'Wyloguj'
      },tasks: {
  noTitle: 'Bez tytułu',
  deadline: 'Termin',
  delete: 'Usuń',
  fill: 'Wypełnij',
  close: 'Zamknij',
  status: {
    todo: 'Do zrobienia',
    inProgress: 'W trakcie',
    done: 'Gotowe'
  }
},addtask: {
  search: 'Szukaj zadania',
  filter: {
    all: 'Wszystkie'
  },
  status: {
    todo: 'Do zrobienia',
    inProgress: 'W trakcie',
    done: 'Gotowe'
  }
},taskedit: {
  titlePlaceholder: 'Wpisz tytuł',
  deadline: 'Termin',
  create: 'Utwórz',
  delete: 'Usuń'
},mainTasks: {
  title: 'Zadania'
},art: {
  title: 'Artykuły',
  noDescription: 'Brak opisu'
},chat: {
  title: 'Czat z AI',
  thinking: 'AI myśli…',
  empty: 'Zadaj pierwsze pytanie 👇',
  placeholder: 'Zapytaj mnie o coś…'
}




    }
  }
}


i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false 
  }
})

export default i18n
