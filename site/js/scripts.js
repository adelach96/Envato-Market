window.onload = () => {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const content = button.nextElementSibling;
    
            // Si l'élément est déjà actif, on le ferme
            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                // Ferme toutes les autres sections
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                });
    
                // Ouvre la section actuelle
                accordionItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

}