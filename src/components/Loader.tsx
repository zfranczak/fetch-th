import '../styles/loader.css';

const Loader: React.FC = () => {
  return (
    <div className='loader'>
      <h2 className='icon-loader'>Finding your Perfect match!</h2>
      <div className='loader-inner'>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
        <div className='loader-line-wrap'>
          <div className='loader-line'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
