// ====================== main.js ======================
// كود عام لكل صفحات StudyWise

document.addEventListener('DOMContentLoaded', () => {
    console.log('%cStudyWise Frontend Loaded Successfully! 🚀', 'color:#a855f7; font-size:16px; font-weight:bold');

    // إضافة تأثيرات Hover للأزرار
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // Dark Mode Toggle (لو حابة تضيفيه بعدين)
    // window.toggleDarkMode = () => { ... }

    // دالة مساعدة لإظهار رسائل (Toast)
    window.showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '8px';
        toast.style.color = 'white';
        toast.style.zIndex = '9999';

        if (type === 'success') toast.style.background = '#10b981';
        else if (type === 'error') toast.style.background = '#ef4444';
        else toast.style.background = '#3b82f6';

        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transition = '0.3s';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // منع إعادة إرسال الفورم عند الـ Refresh
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // يمكنك إضافة لوجيك هنا لاحقاً
        });
    });

    console.log('✅ Common functions loaded');
});