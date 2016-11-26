import * as dom from 'dom-helpers';
import makeArtistElement from 'template-artist';
import makeGenreElement from 'template-genre';
import makeResultElement from 'template-result';

/** @enum {string} */
const Types = {
  ARTIST: {
    name: 'artist',
    renderer: makeArtistElement
  },
  GENRE: {
    name: 'genre',
    renderer: makeGenreElement
  }
};

/**
 * game data structure
 * @const
 * @type {object}
 */
const game = {
  questions: [
    {
      type: Types.ARTIST,
      text: 'Кто исполняет эту песню?',
      data: {
        audio: '/audio/42.mp3'
      },
      timer: {
        minutes: 2,
        seconds: 0
      },
      answers: [
        {
          isCorrect: true,
          data: {
            name: 'Пелагея',
            image: '/img/pelageya.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'Краснознаменная дивизия имени моей бабушки',
            image: '/img/babushka.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'Lorde',
            image: '/img/lorde.jpeg'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите инди-рок треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/1.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/2.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/3.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/4.mp3'
          }
        }
      ]
    },
    {
      type: Types.ARTIST,
      text: 'Кто исполняет эту песню?',
      data: {
        audio: '/audio/43.mp3'
      },
      timer: {
        minutes: 2,
        seconds: 0
      },
      answers: [
        {
          isCorrect: true,
          data: {
            name: 'Black Sabbath',
            image: '/img/black-sabbath.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'P.O.D',
            image: '/img/pod.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'USB',
            image: '/img/usb.jpeg'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите Industrial треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/11.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/12.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/13.mp3'
          }
        }
      ]
    },
    {
      type: Types.ARTIST,
      text: 'Кто исполняет эту песню?',
      data: {
        audio: '/audio/63.mp3'
      },
      timer: {
        minutes: 2,
        seconds: 0
      },
      answers: [
        {
          isCorrect: false,
          data: {
            name: 'ABBA',
            image: '/img/abba.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'UDO',
            image: '/img/udo.jpeg'
          }
        },
        {
          isCorrect: true,
          data: {
            name: 'A-HA',
            image: '/img/aha.jpeg'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите Hip-Hop треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/41.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/42.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/43.mp3'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите Reggae треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/71.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/72.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/73.mp3'
          }
        }
      ]
    },
    {
      type: Types.ARTIST,
      text: 'Кто исполняет эту песню?',
      data: {
        audio: '/audio/93.mp3'
      },
      timer: {
        minutes: 2,
        seconds: 0
      },
      answers: [
        {
          isCorrect: true,
          data: {
            name: 'U2',
            image: '/img/u2.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'Muse',
            image: '/img/muse.jpeg'
          }
        },
        {
          isCorrect: false,
          data: {
            name: 'Yes',
            image: '/img/yes.jpeg'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите Symphonic Metal треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/171.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/172.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/173.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/175.mp3'
          }
        }
      ]
    },
    {
      type: Types.GENRE,
      text: 'Выберите Heavy Metal треки',
      data: null,
      timer: null,
      answers: [
        {
          isCorrect: true,
          data: {
            audio: '/audio/721.mp3'
          }
        },
        {
          isCorrect: true,
          data: {
            audio: '/audio/722.mp3'
          }
        },
        {
          isCorrect: false,
          data: {
            audio: '/audio/723.mp3'
          }
        }
      ]
    }
  ]
};

/**
 * result page data structure
 * @const
 * @type {object}
 */
const result = {
  gameName: 'Угадай мелодию',
  content: {
    title: 'Вы настоящий меломан!'
  },
  stats: {
    time: 2,
    melodiesCount: 4,
    percents: 80
  },
  replayButton: 'Сыграть ещё раз'
};

export default (questionNumber) => {

  const questionsCount = game.questions.length;

  if (window.stopFn && questionNumber !== 0) {
    window.stopFn();
  }

  if (questionNumber === questionsCount) {

    dom.renderElement(makeResultElement(result));

  } else {

    const currentQ = game.questions[questionNumber];
    dom.renderElement(currentQ.type.renderer(currentQ, questionNumber));

    if (currentQ.timer !== null) {
      window.stopFn = window.initializeCountdown();
    }
  }
};
