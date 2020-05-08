import electron from 'electron';

function openInBrowser(link: string) {
  electron.shell.openExternal(link);
}

export default openInBrowser;
