export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST allowed"
    });
  }

  const {
    videoSessionId,
    agentEmail,
    conversationId
  } = req.body;

  console.log("===== 3RD PARTY PLATFORM API =====");
  console.log(JSON.stringify({
    videoSessionId,
    agentEmail,
    conversationId
  }, null, 2));
  console.log("==================================");

  return res.status(200).json({
    status: "SESSION_LINKED",
    videoRoomUrl: `https://talk.brave.com/${videoSessionId}`,
    assignedAgent: agentEmail
  });
}
