// Custom Contact us page builder.

(async function() {
    const contactDiv = document.getElementById('contact');

    if (!contactDiv) {
        console.error("Error: The div with ID 'contact' was not found. Cannot initialize contact module.");
        return;
    }

    let config; // Declare config here, will be assigned entirely
    const defaultContactConfig = {
        theme: "dark",
        title: "Get in Touch",
        message: "We'd love to hear from you! Reach out via email, phone, or connect with us on social media.",
        email: "contact@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown USA",
        socialIcons: [
            { platform: "twitter", handle: "YourTwitterHandle", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/twitter.svg" },
            { platform: "linkedin", handle: "your-linkedin-profile", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/linkedin-in.svg" },
            { platform: "github", handle: "YourGitHubUsername", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/github.svg" }
        ]
    };

    await new Promise(resolve => setTimeout(resolve, 50));

    if (window.contactConfig && typeof window.contactConfig === 'object' && Object.keys(window.contactConfig).length > 0) {
        config = window.contactConfig;
        if (!config.theme) {
            config.theme = defaultContactConfig.theme;
        }
        console.log("Custom configuration loaded for contact module. Only specified fields will be displayed.");
    } else {
        console.warn("No custom configuration detected for the contact module. Using full default settings.");
        config = defaultContactConfig;
    }

    contactDiv.className = 'p-6 rounded-lg shadow-xl max-w-md w-full transition-colors duration-300';
    switch (config.theme) {
        case 'light':
            contactDiv.classList.add('bg-gray-100', 'text-gray-900', 'border', 'border-gray-300', 'shadow-md');
            break;
        case 'dark':
            contactDiv.classList.add('bg-gray-800', 'text-gray-100');
            break;
        case 'app':
        default:
            contactDiv.classList.add('bg-gray-800', 'text-gray-100');
            break;
    }

    contactDiv.innerHTML = '';

    if (config.title) {
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-2xl font-bold mb-4';
        titleElement.textContent = config.title;
        contactDiv.appendChild(titleElement);
    }

    if (config.message) {
        const messageElement = document.createElement('p');
        messageElement.className = 'text-gray-300 mb-4';
        messageElement.textContent = config.message;
        contactDiv.appendChild(messageElement);
    }

    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.className = 'space-y-2 mb-6';
    contactDiv.appendChild(contactInfoDiv);

    if (config.email) {
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${config.email}`;
        emailLink.className = 'block text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200';
        emailLink.innerHTML = `<i class="fas fa-envelope mr-2"></i>Email: ${config.email}`;
        contactInfoDiv.appendChild(emailLink);
    }

    if (config.phone) {
        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${config.phone.replace(/\s/g, '')}`;
        phoneLink.className = 'block text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200';
        phoneLink.innerHTML = `<i class="fas fa-phone mr-2"></i>Phone: ${config.phone}`;
        contactInfoDiv.appendChild(phoneLink);
    }

    if (config.address) {
        const addressPara = document.createElement('p');
        addressPara.className = 'text-gray-300';
        addressPara.innerHTML = `<i class="fas fa-map-marker-alt mr-2"></i>Address: ${config.address}`;
        contactInfoDiv.appendChild(addressPara);
    }

    if (config.socialIcons && Array.isArray(config.socialIcons) && config.socialIcons.length > 0) {
        const socialTitle = document.createElement('h3');
        socialTitle.className = 'text-lg font-semibold mt-6 mb-3 border-t border-gray-700 pt-4';
        socialTitle.textContent = 'Connect with us:';
        contactDiv.appendChild(socialTitle);

        const socialList = document.createElement('div');
        socialList.className = 'flex flex-wrap gap-4';
        contactDiv.appendChild(socialList);

        const shuffledSocialIcons = config.socialIcons.sort(() => Math.random() - 0.5);

        shuffledSocialIcons.forEach(socialItem => {
            if (socialItem.platform && socialItem.handle) {
                const link = document.createElement('a');
                let linkHref = '';
                let iconHtml = '';

                if (socialItem.icon) {
                    iconHtml = `<img src="${socialItem.icon}" alt="${socialItem.platform} icon" class="w-5 h-5 mr-2 inline-block align-middle" />`;
                } else {
                    let faIconClass = '';
                    switch (socialItem.platform.toLowerCase()) {
                        case 'twitter': faIconClass = 'fab fa-twitter'; break;
                        case 'linkedin': faIconClass = 'fab fa-linkedin-in'; break;
                        case 'github': faIconClass = 'fab fa-github'; break;
                        case 'discord': faIconClass = 'fab fa-discord'; break;
                        case 'instagram': faIconClass = 'fab fa-instagram'; break;
                        case 'facebook': faIconClass = 'fab fa-facebook'; break;
                        default: faIconClass = 'fas fa-link'; break;
                    }
                    iconHtml = `<i class="${faIconClass} mr-2"></i>`;
                }

                switch (socialItem.platform.toLowerCase()) {
                    case 'twitter': linkHref = `https://twitter.com/${socialItem.handle}`; break;
                    case 'linkedin': linkHref = `https://www.linkedin.com/in/${socialItem.handle}`; break;
                    case 'github': linkHref = `https://github.com/${socialItem.handle}`; break;
                    case 'discord': linkHref = `https://discord.gg/${socialItem.handle}`; break;
                    case 'instagram': linkHref = `https://www.instagram.com/${socialItem.handle}`; break;
                    case 'facebook': linkHref = `https://www.facebook.com/${socialItem.handle}`; break;
                    default: linkHref = socialItem.handle.startsWith('http') ? socialItem.handle : `https://${socialItem.handle}`; break;
                }

                link.href = linkHref;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.className = 'flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200';
                link.innerHTML = `${iconHtml}${socialItem.platform.charAt(0).toUpperCase() + socialItem.platform.slice(1)}`;
                socialList.appendChild(link);
            }
        });
    }

    console.log("Contact module elements have been dynamically added.");
})();
