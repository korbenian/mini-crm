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
        error: 'Неизвестная ошибка',
        age: 'Возраст',
        name: 'Имя',
        description: 'Описание'
      },
      dashboard: {
        age: 'Возраст',
        name: 'Имя',
        description: 'описание',
        mycards: 'Мои карточки',
        addcard: 'Добавить карточку',
        account: 'Аккаунт',
        exit: 'Выйти',
        edit: 'Редактировать',
        profile: 'Профиль',
        aboutuser: 'О себе'
      },
      profile: {
        exit: 'Выйти',
        edit: 'Редактировать',
        profile: 'Профиль',
        aboutuser: 'О себе',
        age: 'Возраст',
        name: 'Имя',
        email: 'Почта'
      },
      edit: {
        edit: 'Редактировать Профиль',
        save: 'Сохранить',
        exit: 'Выйти',
        name: 'Имя',
        aboutuser: 'О себе'
      },
      createprofile: {
        createprofile: 'Создать Профиль',
        age: 'Возраст',
        name: 'Имя',
        description: 'О себе',
        create: 'Создать',
        exit: 'Выйти'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ru', // Устанавливаем язык из localStorage или 'ru'
  fallbackLng: 'ru', // Язык по умолчанию
  interpolation: {
    escapeValue: false // Для React
  }
})

export default i18n
