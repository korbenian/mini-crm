import { Description } from '@mui/icons-material'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      loading: {
        loading: 'Loading...',
        loadingdata: 'Loading data User'
      },
      login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
        button: 'Login',
        noAccount: 'Don’t have an account?',
        link: 'Click here',
        error: 'Unknown error'
      },
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
        edit: 'Edit',
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
      }
    }
  },

  ru: {
    translation: {
      loading: {
        loading: 'Загрузка...',
        loadingdata: 'Загрузка данных профиля'
      },
      login: {
        title: 'Вход',
        email: 'Почта',
        password: 'Пароль',
        button: 'Войти',
        noAccount: 'У вас нет аккаунта?',
        link: 'Нажмите сюда',
        error: 'Неизвестная ошибка'
      },
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
      }
    }
  },

  fr: {
    translation: {
      loading: {
        loading: 'Chargement...',
        loadingdata: 'Chargement des données utilisateur'
      },
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
        edit: 'Modifier',
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
      }
    }
  },

  de: {
    translation: {
      loading: {
        loading: 'Laden...',
        loadingdata: 'Benutzerdaten werden geladen'
      },
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
        profile: 'Profil',
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
      }
    }
  },

  nl: {
    translation: {
      loading: {
        loading: 'Laden...',
        loadingdata: 'Gebruikersgegevens laden'
      },
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
        edit: 'Bewerken',
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
      }
    }
  },

  pl: {
    translation: {
      loading: {
        loading: 'Ładowanie...',
        loadingdata: 'Ładowanie danych użytkownika'
      },
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
        edit: 'Edytuj',
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
      }
    }
  }
}


i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false 
  }
})

export default i18n
