#!/bin/bash
# ResoFlex™ Intelligence Node: Auto-Builder
# Authorized by: Coach Buchi (CEO)

echo "🏛️ Building ResoFlex™ Intelligence Node..."

mkdir -p api

# Create .gitignore
cat <<EOF > .gitignore
.env
node_modules
.vercel
*.log
EOF

# Create vercel.json
cat <<EOF > vercel.json
{
  "version": 2,
  "name": "resoflex-intelligence-node",
  "alias": "api.resofit.fit",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/\$1.js" },
    { "source": "/", "destination": "/api/index.js" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "X-Sovereign-Status", "value": "THE RESULT GO CLEAR" }
      ]
    }
  ]
}
EOF

# Create package.json
cat <<EOF > package.json
{
  "name": "resoflex-intelligence-node",
  "version": "1.0.0",
  "dependencies": {
    "node-fetch": "^3.3.0"
  }
}
EOF

echo "✅ Folders and configs generated. Ready for logic injection."

