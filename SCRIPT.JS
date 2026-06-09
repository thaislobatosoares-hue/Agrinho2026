// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. FUNCIONALIDADE: MODO ESCURO / CLARO
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }

    // Evento de clique para alternar o tema
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙 Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================
    // 2. FUNCIONALIDADE: VALIDAÇÃO DA NEWSLETTER
    // ==========================================
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        
        const emailInput = newsletterForm.querySelector('input[type="email"]').value;
        
        if (emailInput) {
            // Aqui você conectaria com sua API de e-mail marketing (ex: Mailchimp)
            alert(`Sucesso! O e-mail [ ${emailInput} ] foi cadastrado para receber as tendências.`);
            newsletterForm.reset(); // Limpa o campo
        }
    });
});