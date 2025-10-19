# Fix Cursor and VSCode Third-Party Endpoint Issues

![Cursor and VSCode Third-Party Endpoint Login Issue](https://ctok.ai/images/vscode-cursor-need-login-problem.png)

0. [Claude Code Install](/en/claude-code-setup-ctok) - Complete Claude Code CLI installation and environment variable configuration guide
1. Create ~/.claude/config.json If it already exists, edit it directly.
2. Add the following content: (XXX can remain unchanged or be changed to your service name or key)

```json
{ 
    "primaryApiKey":"xxx"
}
```

3. Restart VSCode and Cursor

## The following are test solutions. Skip if the above step was successful.

### Using Claude Code CLI (Recommended)

Claude Code CLI is the most flexible solution with full support for custom API endpoints.

#### Step 1: Install Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

#### Step 2: Configure Environment Variables

**macOS / Linux:**

Edit `~/.zshrc` or `~/.bashrc`:

```bash
# Add the following configuration
export ANTHROPIC_AUTH_TOKEN="your-auth-token"
export ANTHROPIC_BASE_URL="third-party-endpoint-URL"
```

Refresh configuration:

```bash
source ~/.zshrc  # or source ~/.bashrc
```

**Windows:**

Using PowerShell (administrator privileges):

```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'your-auth-token', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'third-party-endpoint-URL', 'User')
```

:::tip Environment Variable Description
- `ANTHROPIC_AUTH_TOKEN`: Your API authentication token (format: `cr_...`)
- `ANTHROPIC_BASE_URL`: Complete URL of the third-party endpoint
:::

#### Step 3: Verify Configuration

```bash
cd ~/your-project
claude hello
```

If configured correctly, Claude should respond normally.

### Logging and Debugging

Enable verbose logging for troubleshooting:

```bash
# Enable Claude Code CLI verbose logging
export DEBUG=claude:*
claude hello

# Or use --verbose flag
claude --verbose hello
```

## Related Resources

- [Claude Code Install](/en/claude-code-setup-ctok) - Complete CLI installation guide
- [Cursor Claude Code Integration](/en/cursor-claude-code-integration) - Cursor usage tutorial
- [Opcode Guide](/en/opcode-guide) - Desktop client usage
- [Claude Code Complete Guide](/en/claude-code-complete-guide) - Comprehensive feature introduction
- [Windows Environment Variable Setup](/en/claude-code-windows-env-setup) - Windows configuration details

## Summary

The key to solving VSCode and Cursor's inability to use third-party endpoints is:

1. ✅ **Prioritize using Claude Code CLI**, which provides the most complete custom endpoint support
2. ✅ **Properly configure environment variables**, including `ANTHROPIC_AUTH_TOKEN` and `ANTHROPIC_BASE_URL`

If you encounter issues during configuration, feel free to check our other tutorials or contact technical support.

---

**Need Help?** Join [Claude Code Carpool Community](/en/claude-code-group) for professional technical support!

