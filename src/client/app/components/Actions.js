import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CopyIcon from 'material-ui/svg-icons/content/content-copy';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';

import { doDownload } from '_comms';

const styles = {
  smallIcon: {
    width: 24,
    height: 24,
    color: '#e5e5e5',
    fill: '#e5e5e5'
  },
  small: {
    width: 24,
    height: 24,
    padding: 0,
    cursor: 'pointer',
    margin: '0 10px'
  },
  snack: {
    background: '#4178be',
    color: '#ffffff',
    'font-family': 'inherit',
    'font-size': '18px',
    'font-weight': '300',
    'text-align': 'center'
  }
};

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackOpen: false
    }
  }

  getStore() {
    const { store } = this.props;
    return JSON.stringify(store, null, '  ');
  }

  onCopied = () => {
    this.setState({ snackOpen: true });
  }

  onCopiedClose = () => {
    this.setState({ snackOpen: false });
  }

  render() {
    const { snackOpen } = this.state;
    const { style = {} } = this.props;
    const text = this.getStore();
    return (
      <div className={'app-actions'} style={{ ...style }}>
        <CopyToClipboard text={text} onCopy={this.onCopied}>
          <IconButton title={'Copy Results'} touch iconStyle={styles.smallIcon} style={styles.small}>
            <CopyIcon className={'action-copy'} />
          </IconButton>
        </CopyToClipboard>
        <IconButton title={'Download Results'} touch iconStyle={styles.smallIcon} style={styles.small}>
          <DownloadIcon className={'action-download'} onClick={() => doDownload(text)}/>
        </IconButton>
        <IconButton title={'Refresh Results'} touch iconStyle={styles.smallIcon} style={styles.small}>
          <RefreshIcon className={'action-refresh'} onClick={() => window.location.reload()}/>
        </IconButton>
        <Snackbar
          open={snackOpen}
          message={'Results Copied!'}
          autoHideDuration={4000}
          onRequestClose={this.onCopiedClose}
          bodyStyle={styles.snack}
          contentStyle={styles.snack}
        />
      </div>
    );
  }
}