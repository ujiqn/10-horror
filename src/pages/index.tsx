import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/index.module.scss';

declare global {
  interface Window {
    gtag: (name: string, value: string) => void;
  }
  interface ShareData {
    files?: File[];
    text?: string;
    title?: string;
    url?: string;
  }
}

export default function IndexPage() {
  const [ isInit, setIsInit ] = useState(false);
  const [ img, setImg ] = useState<HTMLImageElement>(null);
  const [ text, setText ] = useState([]);
  const [ href, setHref ] = useState('');
  const [ novel, setNovel ] = useState('一部屋だけ異様に安い');
  const [ info, setInfo ] = useState([]);
  const [ hashtags, setHashtags ] = useState('#10文字ホラー');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);
  const WIDTH = 800;
  const HEIGHT = 450;
  const TXT_LENGTH = 10;
  const TXT_SIZE = 80;
  const SCALE = .9;

  useEffect(() => {
    if (isInit) {
      return;
    }

    (async () => {
      const headers = { 'X-API-KEY': '973afc71-353d-4807-8a9e-b518b44d77dc' };

      await Promise.all([
        axios.get('https://10moji.microcms.io/api/v1/novel', {
          headers
        }),
        axios.get('https://10moji.microcms.io/api/v1/info', {
          headers
        }),
        axios.get('https://10moji.microcms.io/api/v1/hashtags', {
          headers
        })
      ]).then((res) => {
        setNovel(res[0].data.novel);
        setInfo(res[1].data.contents.reverse());
        setHashtags(res[2].data.hashtags);
      });
    })();

    const imgElm = new Image();

    imgElm.onload = () => {
      setIsInit(true);
      setImg(imgElm);
    };
    imgElm.src = './frame.png';

    ([].slice.call(document.querySelectorAll('[data-ga]'))).forEach(function(elm: HTMLElement) {
      elm.addEventListener('click', () => {
        handleClickGa(elm);
      });
    });

    const txt = txtRef.current;

    setInterval(() => {
      setText([...txt.innerText.substr(0, TXT_LENGTH)]);
    }, 100);
  }, [isInit]);

  useEffect(() => {
    if (!img) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const subCanvas = document.createElement('canvas');
    const subCtx = subCanvas.getContext('2d');

    render();

    function render():void {
      subCanvas.width = WIDTH * 2;
      subCanvas.height = HEIGHT * 2 * SCALE;

      subCtx.save();
        subCtx.fillStyle = '#000';
        subCtx.textAlign = 'center';
        subCtx.textBaseline = 'middle';
        subCtx.font = `${ TXT_SIZE }px "Shippori Mincho"`;
        subCtx.fillText([...text].join('  '), subCanvas.width / 2, subCanvas.height / 2);
      subCtx.restore();

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      ctx.save();
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(subCanvas, 0, canvas.height * ((1 - SCALE) / 4) - 16, canvas.width, canvas.height);
      ctx.restore();

      setHref(canvas.toDataURL('image/png'));
    }
  }, [text]);

  function handleClickGa(elm: HTMLElement) {
    window.gtag('event', String(elm.dataset.ga));
  }

  function getInfoItem(item, i) {
    return (
      <div
        key={ i }
        className={ styles.box }
      >
        <h1>{ item.title }</h1>
        <div dangerouslySetInnerHTML={{__html: item.html}} />
      </div>
    );
  }

  function getInfo() {
    return info.map((item, i) => {
      return getInfoItem(item, i);
    });
  }

  function canvasToPngFile(canvas) {
    const type = 'image/png';
    const dataUrl = canvas.toDataURL(type);
    const decodedData = window.atob(dataUrl.replace(/^.*,/, ''));
    const buffers = new Uint8Array(decodedData.length);

    for (let i = 0; i < decodedData.length; ++i) {
      buffers[i] = decodedData.charCodeAt(i);
    }

    try {
      const blob = new Blob([buffers.buffer], {
        type
      });

      return new File([ blob ], '10.png', { type });

    } catch {
      return null;
    }
  }

  function handleClickBtnShare() {
    const file = canvasToPngFile(canvasRef.current);

    navigator.share({
      text: `${ text.join('') }${ hashtags ? ` ${ hashtags }` : '' }`,
      // url: `${ location.protocol }//${ location.hostname }${ location.pathname }`,
      files: file ? [ file ] : undefined
    }).then(() => {
      window.gtag('event', 'share');
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <div
      className={ styles.index }
      style={{ opacity: isInit ? 1 : 0 }}
    >
      <p>
        <canvas ref={ canvasRef } />
        <img src={ href } />
      </p>
      <div
        ref={ txtRef }
        className={ styles.txt } 
        contentEditable={ true }
        suppressContentEditableWarning={ true }
      >{ novel }</div>
      <a
        id="btn-download"
        className={ `${ styles.btn }` }
        href={ href }
        download="10"
      >画像を保存</a>
      {(() => {
        if (process.browser && !window.navigator.share) {
          return;
        }

        return (
          <a
            onClick={ handleClickBtnShare }
            id="btn-share"
            className={ `${ styles.btn }` }
          >画像をシェア</a>
        );
      })()}
      <div className={ styles.info }>{ getInfo() }</div>
    </div>
  );
}