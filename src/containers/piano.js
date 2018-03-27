import { Container } from 'unstated';

export default class PianoContainer extends Container {
  setupKeyStates({ startKey, endKey } = {}) {
    const keys = [];
    for (let i = startKey; i <= endKey; i++)
      keys.push({ note: i, active: false });
    this.setState({ keys });
  }

  toggle(note, active) {
    this.setState({
      keys: this.state.keys.map(key => {
        if (key.note === note) return Object.assign({}, key, { active });
        return key;
      })
    });
  }
}

export const pianoContainer = new PianoContainer();
