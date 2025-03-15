import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#003366] hover:text-[#CC3333] transition-colors"
      >
        <FaGithub className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#003366] hover:text-[#CC3333] transition-colors"
      >
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#003366] hover:text-[#CC3333] transition-colors"
      >
        <FaTwitter className="h-6 w-6" />
      </a>
    </div>
  );
}
