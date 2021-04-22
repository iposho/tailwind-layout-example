import axios from 'axios';
import React from 'react';

import Preloader from '../../layout/Preloader';

const catApiUrl = 'https://api.thecatapi.com/v1/images/search';

class RandomCat extends React.Component {
  state = {
    imageUrl: null,
    loading: true,
  }

  async componentDidMount() {
    this.getRandomCat();
  }

  getRandomCat = async () => {
    this.setState({
      loading: true,
    });

    await axios.get(catApiUrl, {
      params: {
        mime_types: 'jpg,png',
        api_key: process.env.REACT_APP_THE_CAT_API_KEY,
      },
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          const { url } = response.data[0];

          this.setState({
            imageUrl: url,
            loading: false,
          });
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    const { loading, imageUrl } = this.state;

    return (
      <div
        className="container mx-auto flex flex-col items-center justify-center"
      >
        {
          !loading
            ? (
              <img
                className="w-full max-w-screen-md mb-4 shadow-2xl rounded"
                src={imageUrl}
                alt="CAT"
              />
            )
            : <Preloader />
        }
      </div>
    );
  }
}

export default RandomCat;
