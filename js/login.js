document.addEventListener('DOMContentLoaded', () => {
    console.log('%cStudyWise Login Page Loaded Successfully! 🚀', 'color:#a855f7; font-size:16px;');

    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // هنا هتحط الـ API call لاحقاً
            console.log('Login attempt with:', email);
            alert('تم تسجيل الدخول بنجاح! (Demo)');
            // window.location.href = "/dashboard"; 
        }
    });
});