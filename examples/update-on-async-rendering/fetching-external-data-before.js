// Avant
class ExampleComponent extends React.Component {
  state = {
    externalData: null,
  };

  // highlight-range{1-8}
  componentWillMount() {
    this._asyncRequest = loadMyAsyncData().then(
      externalData => {
        this._asyncRequest = null;
        this.setState({externalData});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.externalData === null) {
      // Afficher un état de chargement...
    } else {
      // Afficher l’UI réelle...
    }
  }
}
