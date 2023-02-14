import * as vscode from 'vscode';

export class msedgeDebugConfigurationProvider implements vscode.DebugConfigurationProvider {
    resolveDebugConfiguration(
        folder: vscode.WorkspaceFolder | undefined,
        config: vscode.DebugConfiguration,
        token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration> {

        return config;
    }
}
