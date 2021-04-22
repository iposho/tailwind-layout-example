import axios from 'axios';
import React from 'react';

import { isEmpty } from '../../../tools/usefulFunctions';

const randomLoremIpsumUrl = 'https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum';

class RandomText extends React.Component {
  state = {
    text: null,
    loading: true,
  }

  async componentDidMount() {
    this.getRandomText();
  }

  getRandomText = async () => {
    this.setState({
      loading: true,
    });

    await axios.get(randomLoremIpsumUrl)
      .then((response) => {
        if (!isEmpty(response.data)) {
          const longText = response.data.very_long_sentence;
          const shortText = response.data.long_sentence;
          const text = `${longText}\n${shortText}`;

          this.setState({
            loading: false,
            text,
          });
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    const { loading, text } = this.state;
    return (
      !loading
      && (
        <div className="container mx-auto flex justify-center">
          <p className="max-w-screen-lg text-xl py-5 font-serif">{text}</p>
        </div>
      )
    );
  }
}

export default RandomText;
