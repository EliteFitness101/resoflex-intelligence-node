export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send();
  res.status(200).json({
    score: 94,
    tier: "Aesthetic Elite",
    verdict: "Hourglass integrity verified. THE RESULT GO CLEAR."
  });
}

