const ContentBlock = ({ title, text, imageUrl, button }) => {
    return (
      <div className="service">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
        <button>{button}</button>
      </div>
    );
  };

  const App = () => {
    const contentData = [
      { title: 'Service Name', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'images/service1.jpg', button: 'Read More' },
      { title: 'Service Name', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'images/service2.jpg', button: 'Read More' },
      { title: 'Service Name', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'images/service3.jpg', button: 'Read More' }
    ];

    return (
        
      <article>
        <h2>OUR SERVICES</h2>
        <div className="services">
            {contentData.map((item, index) => (
            <ContentBlock
                key={index}
                title={item.title}
                text={item.text}
                imageUrl={item.imageUrl}
                button={item.button}
            />
            ))}
        </div>
      </article>
    );
  };

  ReactDOM.render(<App />, document.getElementById('third-section'));