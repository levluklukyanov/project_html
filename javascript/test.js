const btn = document.querySelector('.hero__link');
const search = document.getElementById('poisk');
const openBtn = document.getElementById('vhod');
const modal = document.querySelector('#authModal');
const closeBtn = modal.querySelector('.modal__close');
const toRegBtn = document.querySelector('.toRegBtn')
const modalTitle = document.querySelector('.modal__title')
const submitBtn = document.querySelector('.modal__submit')
const loginForm = document.getElementById('loginForm')
const regForm = document.getElementById('registerForm')
const showRegBtn = document.getElementById('showRegBtn')
const showLoginBtn = document.getElementById('showLoginBtn')
const regPass = document.getElementById('regPass')
const repeatPass = document.getElementById('repeatPass')
const passError = document.getElementById('passError')
const regError = document.getElementById('regError')
const logError = document.getElementById('logError')
const whyBtn = document.querySelector('.why-btn')
const because = document.getElementById('becauseModal')
const becClose = document.getElementById('becauseClose')
const cardLink = document.querySelectorAll('.card__link')

btn.addEventListener('click', (e) => {
    window.scrollBy({
        top: 500,
        behavior: "smooth"
    });
});

search.addEventListener('click', (e) => {
    window.open("https://nanjicore.vercel.app", '_blank');
});

function openModal() {
    modal.classList.add('is_open');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    modal.classList.remove('is_open');
    document.body.style.overflow = '';
};

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
        logError.classList.add('hidden');
        regError.classList.add('hidden');
    };
});

document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && modal.classList.contains('is_open')) {
        closeModal();
        logError.classList.add('hidden');
        regError.classList.add('hidden');
    };
});

if (showRegBtn && loginForm && registerForm) {
    showRegBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
    });
};

if (showLoginBtn && loginForm && registerForm) {
    showLoginBtn.addEventListener('click', () => {
        regForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
};

if (regForm) {
    regForm.addEventListener('submit', (e) => {
        if (regPass.value !== repeatPass.value) {
            e.preventDefault();

            passError.textContent = 'Пароли не совпадают!';
            passError.classList.add('is-active');
            repeatPass.classList.add('input-error');
            repeatPass.focus();
            return
        } else {
            passError.classList.remove('is-active');
            repeatPass.classList.remove('input-error');

            e.preventDefault();
        };

        regError.classList.remove('hidden');
    });

    repeatPass.addEventListener('input', () => {
        passError.classList.remove('is-active');
        repeatPass.classList.remove('input-error');
    });
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    logError.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    logError.classList.add('hidden');
    regError.classList.add('hidden');
})

if (whyBtn && because) {
    whyBtn.addEventListener('click', () => {
        because.classList.add('is-open')
    })
}

if (becClose && because) {
    becClose.addEventListener('click', () => {
        because.classList.remove('is-open')
    })
}

if (because) {
    because.addEventListener('click', (e) => {
        if (e.target === because) {
            because.classList.remove('is-open')
        }
    })
}

cardLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
})