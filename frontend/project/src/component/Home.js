import React from 'react'
import photo from './photo.jpg'
import user from './user1.jpg'
import background from './background.jpg'
import basketball from './basketball.png'

function Home() {
  return (
    <div className='crousel'>
    <div>
      <img className='photo1' src={background} alt='this is placeholder'></img>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
        <div className="col">
          <div className="card h-100">
            <img src={user} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={basketball} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
