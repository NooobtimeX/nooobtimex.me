import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle = { fontSize: "2rem" };
  const socialIcons = [
    {
      component: <FaGithub style={iconStyle} />,
      link: "https://github.com/NooobtimeX",
      label: "GitHub",
    },
    {
      component: <FaYoutube style={iconStyle} />,
      link: "https://www.youtube.com/@nooobtimex2003",
      label: "YouTube",
    },
    {
      component: <FaFacebook style={iconStyle} />,
      link: "https://www.facebook.com/xnooobtime",
      label: "Facebook",
    },
    {
      component: <FaLinkedin style={iconStyle} />,
      link: "https://www.linkedin.com/in/NooobtimeX",
      label: "LinkedIn",
    },
    {
      component: <FaTwitter style={iconStyle} />,
      link: "#",
      label: "Twitter",
    },
  ];

  return (
    <footer className="footer fixed bottom-0 flex w-full items-center justify-center bg-neutral p-5 text-neutral-content">
      <div className="flex items-center justify-center gap-4">
        {socialIcons.map((icon, index) => (
          <a key={index} href={icon.link} aria-label={icon.label}>
            {icon.component}
          </a>
        ))}
      </div>
    </footer>
  );
}
