 <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
          Every project is a chance for me to refine my skills and bring fresh ideas to the table, ensuring your digital presence stands out.
        </p>
        <a href="mailto:noor.jsdivs@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-purple-600 duration-300">
            Say Hello
            Contact me
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/noorjsdivs" />
        <SocialLink title="Youtube" link="https://www.youtube.com/@reactjsBD" />
        <SocialLink title="Github" link="https://github.com/chriscervantes2415" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
        title="Email"
        link="christianjeffersoncervantes@gmail.com"
        isEmail={true} // Custom prop to differentiate email
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/Noorlalu143/"
          link="https://www.facebook.com/christian.cervantes.2415"
        />
        <SocialLink title="Nextjs" link="https://vercel.com/noorjsdivs" />
        
      </div>
    </div>
    const SocialLink = ({ title, link, isEmail }) => {
  const handleClick = () => {
    if (isEmail) {
      // Copy email to clipboard
      navigator.clipboard.writeText(link).then(() => {
        alert('Email address copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    } else {
      // Open the link for non-email links
      window.open(link, '_blank');
    }
  };
  return (
    <button onClick={handleClick} className="social-link">
      {title}
    </button>
  );
};
  );
};
