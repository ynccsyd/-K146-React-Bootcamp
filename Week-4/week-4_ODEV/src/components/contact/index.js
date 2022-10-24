import React from 'react'
import ShareLink from 'react-linkedin-share-link'

const Contact = () => {
  return (
    <ShareLink  link="https://www.linkedin.com/in/seydayoncaci/">
      {(link) => (
        <a href={link} target=" blank">
          Go to Linkedin
        </a>
      )}
    </ShareLink>
  );
}

export default Contact


// https://github.com/ynccsyd