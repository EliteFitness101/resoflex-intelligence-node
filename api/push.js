export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send();
  // Logic for Firebase Cloud Messaging (FCM) would go here
  res.status(200).json({ status: "SENT", message: "THE RESULT GO CLEAR" });
}

