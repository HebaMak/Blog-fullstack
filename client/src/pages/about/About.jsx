import './about.css'

const About = () => {
  return (
    <div className="container about-page " data-testid="about-test">
      <div className="aboutpage-content">
        <h1>About</h1>

        <p className="intro">
          <span className='blog'>Blog </span> &nbsp; app is an application the user can use to read about and write
          different subjects
        </p>

        <h3>App features: </h3>
        <h6>Front-End made by me and Back-End made by my friend Lydia Samir</h6>
        <ol>
          <li> On the homepage,you will find a list of several subjects.</li>
          <li> each post has image , title , publish date and abrief about the subject </li>
          <li> by clicking on the post title it opens into a new page with the whole subject </li>
          <li> each post can be edited or deleted by only the author in the single page for each post</li>
          <li> you can also post anew post through the write page</li>
          <li> for a new member, you can register and then login, create posts modify or delete them  logout, user also can delete the account from the database</li>
          <li> the user also can update the profile picture ,username , email and password from the setting page</li>
          <li> the app is responsive from different screens and mobile screen</li>
        </ol>
        
        <h3>features i hope to add:</h3>
        <ul> 
          <li> show posts by each user by filtering all the post by author </li>
          <li> show post of the account owner only in a separated page </li>
          <li> modify the post and add some features like category to each post in the write page</li>
          <li> filter posts according to the category </li>
          <li> prevent register with the same email but not to the username</li>
        </ul>
        

        <h4>Thank you for choosing our App.</h4>
      </div>
    </div>
  );
};

export default About;
