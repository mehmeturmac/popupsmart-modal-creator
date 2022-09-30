import styles from './Content.module.scss';
import axios from 'axios';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

const imgSvg = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.1" d="M68 0H12C5.37258 0 0 5.37258 0 12V68C0 74.6274 5.37258 80 12 80H68C74.6274 80 80 74.6274 80 68V12C80 5.37258 74.6274 0 68 0Z" fill="#7D4AEA" />
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M50.5 29.5V50.5H29.5V29.5H50.5ZM50.5 26.5H29.5C27.85 26.5 26.5 27.85 26.5 29.5V50.5C26.5 52.15 27.85 53.5 29.5 53.5H50.5C52.15 53.5 53.5 52.15 53.5 50.5V29.5C53.5 27.85 52.15 26.5 50.5 26.5ZM43.21 39.79L38.71 45.595L35.5 41.71L31 47.5H49L43.21 39.79Z"
        fill="#7D4AEA"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect width="36" height="36" fill="white" transform="translate(22 22)" />
      </clipPath>
    </defs>
  </svg>
);

export default function Content() {
  const { contents, setContents, image, setImage } = React.useContext(MainContext) as MainContextInterface;

  const handleDrop = async (e: any) => {
    e.preventDefault();
    if (!e.dataTransfer.files[0]) return;
    if (e.dataTransfer.files[0].type === 'image/jpeg' || e.dataTransfer.files[0].type === 'image/png') {
      uploadImg(e.dataTransfer.files[0]);
    } else alert('Logo must be a picture (jpeg/png)');
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    if (!e.target.files[0]) return;
    if (e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/png') {
      uploadImg(e.target.files[0]);
    } else alert('Logo must be a picture (jpeg/png)');
  };

  const uploadImg = (img: any) => {
    const fd = new FormData();
    fd.append('key', `${process.env.NEXT_PUBLIC_API_KEY}`);
    fd.append('media', img, img.name);
    axios.post(`${process.env.NEXT_PUBLIC_API}`, fd).then(({ data }) => setImage(data.data.media));
  };

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h6>3</h6>
        <p>Content</p>
      </div>
      <div className={styles.contentInputs}>
        <h5>Edit your content</h5>
        {Object.keys(contents).map((key, i) => (
          <input type="text" key={i} placeholder={contents[key]} value={contents[key]} onChange={(e) => setContents({ ...contents, [key]: e.target.value })} />
        ))}
      </div>
      <div className={`${styles.image} ${!image ? ' hidden' : ''}`}>
        <h5>Upload Image</h5>
        <div className={styles.dropzone} onDrop={(e) => handleDrop(e)} onDragOver={(e) => e.preventDefault()}>
          <input id="imgSelect" type="file" className={styles.files} onChange={(e) => handleUpload(e)} />
          <label htmlFor="imgSelect">
            {image ? <img src={image} alt="logo" /> : imgSvg}
            <span>
              Drop your image here or <span>upload</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
