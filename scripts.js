        document.addEventListener('DOMContentLoaded', function() {
async function setDiscordPfp() {
    const apiUrl = 'https://discord-lookup-api-one-coral.vercel.app/v1/user/1108071513493614592';
    const imgElement = document.getElementById('pfp');

    if (!imgElement) {
        console.error("Error: HTML element with ID 'pfp' not found.");
        return;
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`API request failed: ${response.status} ${response.statusText}`);
            return;
        }
        const userData = await response.json();

        if (userData && userData.avatar && userData.avatar.link) {
            imgElement.src = userData.avatar.link;
        } else {
            console.warn("Avatar link not found in API response.");

        }
    } catch (error) {
        console.error("Error fetching or parsing Discord user data:", error);

    }
}
            setDiscordPfp();
        });
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('animated');
        setTimeout(() => icon.classList.remove('animated'), 400); // Remove class after animation
    });
});

