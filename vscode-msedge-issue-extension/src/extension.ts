import * as vscode from 'vscode';
import { msedgeDebugConfigurationProvider } from './debugConfigurationProvider';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider("pwa-msedge", new msedgeDebugConfigurationProvider()));
    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider("msedge", new msedgeDebugConfigurationProvider()));
}