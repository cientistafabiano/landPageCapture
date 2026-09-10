//variaveis para o link do WhatsApp, incluindo o número e a mensagem pré-definida
export const whatsappNumber = '5532988156599';
export const whatsappMessage = 'Olá! Conheci o curso pelo site e gostaria de receber mais informações.';
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;