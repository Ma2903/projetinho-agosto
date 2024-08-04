const messages = {
    "lago.jpeg": {
        title: "Reflexão e Paz",
        text: "Pai, este momento à beira do lago é um reflexo da tranquilidade e paz que você sempre traz à minha vida. Feliz Dia dos Pais!"
    },
    "shopping.jpeg": {
        title: "Diversão ao Seu Lado",
        text: "Lembrar dos momentos divertidos que passamos juntos, explorando e aproveitando o tempo em família, é uma verdadeira alegria. Feliz Dia dos Pais, pai!"
    },
    "praia.jpeg": {
        title: "Momentos de Sol e Alegria",
        text: "A praia sempre foi um lugar especial para nós, repleto de risos e alegria. Obrigado por fazer cada dia parecer uma nova aventura. Feliz Dia dos Pais!"
    },
    "pastel.jpeg": {
        title: "Sabores e Sorrisos",
        text: "Nada como compartilhar um pastel e uma boa risada com você. Esses pequenos momentos são os que mais valorizo. Feliz Dia dos Pais!"
    },
    "formatura.jpeg": {
        title: "Orgulho e Conquista",
        text: "Sua presença no dia da minha formatura foi um testemunho do seu apoio incondicional. Estou eternamente grato por tudo o que você fez por mim. Feliz Dia dos Pais!"
    },
    "diadospais.jpeg": {
        title: "Celebração do Seu Amor",
        text: "Neste Dia dos Pais, celebro a incrível pessoa que você é. Seu amor e dedicação são um presente diário. Feliz Dia dos Pais, pai!"
    },
    "selfie.jpeg": {
        title: "Memórias Felizes",
        text: "Cada selfie e cada sorriso compartilhado com você são lembranças preciosas. Obrigado por ser a fonte de tanta felicidade em minha vida. Feliz Dia dos Pais!"
    },
    "luta.jpeg": {
        title: "Superação Juntos",
        text: "Enfrentamos desafios e lutamos juntos, sempre saindo mais fortes. Sua força e coragem são inspiradoras. Feliz Dia dos Pais, pai!"
    }
};

let currentImageIndex = -1;
let images = [];

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionTitle = document.getElementById("caption-title");
    const captionText = document.getElementById("caption-text");

    const imageSrc = img.src.split('/').pop(); // Obtém o nome da imagem
    images = Array.from(document.querySelectorAll('.gallery img')).map(img => img.src.split('/').pop());
    currentImageIndex = images.indexOf(imageSrc);

    updateModal();

    modal.style.display = "flex"; // Exibe o modal
}

function updateModal() {
    const modalImg = document.getElementById("modal-image");
    const captionTitle = document.getElementById("caption-title");
    const captionText = document.getElementById("caption-text");

    const imageSrc = images[currentImageIndex];
    const message = messages[imageSrc] || { title: "Título", text: "Mensagem" };

    modalImg.src = imageSrc; // Atualiza o caminho da imagem
    captionTitle.innerHTML = message.title;
    captionText.innerHTML = message.text;
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateModal();
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}