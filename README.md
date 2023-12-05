# Guestbook

## Objetivo

Um app com o seguinte layout:

```
---------------------------------
|                               |
|       _____________           |
|       | ...       | <- nome   |
|       -------------           |
|       | ...       | <- texto  |
|       -------------           |
|                               |
|       ----------              |
|       | Enviar |    <- botao  |
|       ----------              |
|                               |
|                               |
| Usuario 2 em 19/11/2023:      |
| boa noite                     |
|                               |
| Usuario 1 em 18/11/2023:      |
| boa noite                     |
|                               |
--------------------------------
```

Ao ser carregada a página lista os documentos da coleção "messages".
Ao apertar no botão "Enviar" é feita uma requisição pro endpoint /api/message/submit, que cria uma nova entrada e reflete a mudança no frontend.

### Backend:

- TypeScript
- Node
- MongoDB

### Frontend:

- Vite
- Vue3
- Tailwind
