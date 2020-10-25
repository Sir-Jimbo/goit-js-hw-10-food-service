const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Добавь функционал изменения темы при нажатии (событие change)
//на чекбокс #theme -switch-toggle в тулбаре.

const refs = {
    themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
};

//По умолчанию тема светлая.
const lightTheme = refs.body.className = `${Theme.LIGHT}`;

//При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
//Выбранная тема должна сохраняться между перезагрузками страницы.
//Для хранения темы используй localStorage.

refs.themeSwitchToggle.addEventListener('change', themeSwitchControl);

function themeSwitchControl(e) {
    if (e.target.checked) {
        refs.body.classList.add(`${Theme.DARK}`);
        refs.body.classList.remove(`${Theme.LIGHT}`); 
        localStorage.setItem('theme', `${Theme.DARK}`);
    }
    else {
        refs.body.classList.add(`${Theme.LIGHT}`);
        refs.body.classList.remove(`${Theme.DARK}`); 
        localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
}

const bodyTheme = localStorage.getItem('theme');

 refs.body.className = `${bodyTheme}`;

//Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
//чтобы ползунок сдвинулся в правильное положение.

if (bodyTheme === `${Theme.DARK}`) {
    refs.themeSwitchToggle.checked = true;
}
