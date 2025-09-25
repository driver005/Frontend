#!/bin/bash

# === CONFIGURATION ===
KEY_NAME="maintu_deploy_key"
KEY_PATH="$HOME/.ssh/$KEY_NAME"

# === GENERATE SSH KEY ===
echo "==> Generating SSH key pair..."

if [[ -f "$KEY_PATH" ]]; then
    echo "⚠️  SSH key already exists at $KEY_PATH"
    read -p "Do you want to overwrite it? (y/N): " confirm
    if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
        echo "Aborted."
        exit 1
    fi
    rm -f "$KEY_PATH" "$KEY_PATH.pub"
fi

ssh-keygen -t rsa -b 4096 -C "github-actions@maintu" -f "$KEY_PATH" -N ""

echo ""
echo "✅ SSH key generated."

# === OUTPUT PUBLIC KEY ===
echo "==> STEP 1: Add this public key to your Maintu server (usually in ~/.ssh/$KEY_NAME):"
echo ""
cat "$KEY_PATH.pub"
echo ""
echo "👆 Copy and paste the above into your Maintu server's ~/.ssh/$KEY_NAME"
echo ""

# === OUTPUT PRIVATE KEY ===
echo "==> STEP 2: Add the following private key to your GitHub repository secrets:"
echo ""
echo "Go to: GitHub → Settings → Secrets → Actions → 'New repository secret'"
echo "Name it: SSH_PRIVATE_KEY"
echo ""
cat "$KEY_PATH"
echo ""
echo "⚠️  Make sure you NEVER commit this private key to your repo!"
echo ""

# === DONE ===
echo "✅ All done! Now you can use this key in your GitHub Actions workflow."