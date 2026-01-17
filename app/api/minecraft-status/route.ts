export const revalidate = 60; // Кешировать на 60 секунд

// Статические данные сервера (обновляй вручную когда нужно изменить)
const SERVER_STATUS = {
  online: true,
  players: {
    online: 1,
    max: 50,
  },
};

export async function GET() {
  try {
    console.log("[Minecraft API] Returning server status:", SERVER_STATUS);
    return Response.json(SERVER_STATUS);
  } catch (error) {
    console.error("[Minecraft API] Error:", error);
    
    return Response.json({
      online: false,
      players: {
        online: 0,
        max: 50,
      },
    });
  }
}
