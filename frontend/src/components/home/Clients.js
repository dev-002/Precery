export default function Clients() {
  return (
    <section id="clients">
      <div className="client-heading">
        <h3>What Our Clients Say</h3>
      </div>
      <div className="client-box-container">
        <div className="client-box">
          <div className="client-profile">
            <img alt="client" src="sw.jpg" />
            <div className="profile-text">
              <strong>Swati Bisht</strong>
              <span>Graphic Designer</span>
            </div>
          </div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            BIAS PRECERY is the best. BP never fails to dissapoint me. Grocery
            shopping has become so easy with BIAS PRECERY.
          </p>
        </div>
        <div className="client-box">
          <div className="client-profile">
            <img alt="client" src="hb.jpg" />
            <div className="profile-text">
              <strong>Himanshu Bora</strong>
              <span>Software Developer</span>
            </div>
          </div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            BIAS PRECERY is just amazing. I can buy all my groceries from a
            single place. The groceries are available at very affordable prices.
            And, the groceries are delivered at the time slot you choose and
            prefer.
          </p>
        </div>
        <div className="client-box">
          <div className="client-profile">
            <img alt="client" src="ab.jpg" />
            <div className="profile-text">
              <strong>Ayush Bhagat</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            At BIAS Precery, you can get fresh fruits and vegetables. And it is
            not only about fruits or vegetables, you can buy all kinds of stuff
            here.
          </p>
        </div>
      </div>
    </section>
  );
}
