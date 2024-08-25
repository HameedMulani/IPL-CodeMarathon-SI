import store from '../Image/ipl-share-img.png'
const Home = () => {
  return (
    <div className='container'>
        <img src={store} style={{width: '100%'}} alt='store banner' />
        <div className='centered'>
            <h2 className='text-center'>IPL Project</h2>
        </div>
    </div>
  )
}

export default Home
